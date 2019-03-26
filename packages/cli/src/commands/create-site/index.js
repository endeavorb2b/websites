const log = require('fancy-log');
const inquirer = require('inquirer');
const chalk = require('chalk');
const { existsSync, readFileSync, appendFileSync } = require('fs');
const { spawnSync } = require('child_process');
const yaml = require('yaml');

const options = (yargs) => {
  yargs.option('folder', {
    describe: 'A path (relative to the CWD) to create the project in',
    type: 'string',
  }).option('siteName', {
    describe: 'The friendly name of the website',
    type: 'string',
  }).option('account', {
    describe: 'The account key',
    type: 'string',
  }).option('dev', {
    describe: 'Add website to docker compose',
    type: 'boolean',
    default: true,
  });
};

const questions = argv => [
  {
    name: 'folder',
    default: argv.folder,
    message: chalk`Project Name {reset [used as the {blue folder} for the site]}:`,
    validate: v => RegExp(/^[a-zA-Z0-9-]{1,}$/).test(v) || chalk`Invalid: {reset [Only {green a-z} {green A-Z} {green 0-9} and {green -} allowed]}`,
  },
  {
    name: 'siteName',
    default: argv.siteName,
    message: 'The friendly name of the website project',
  },
  {
    name: 'dev',
    default: argv.dev,
    type: 'confirm',
    message: 'Add website to docker compose?',
  },
  {
    name: 'account',
    default: argv.account || 'ebm',
    message: chalk`Account Key {reset [used for the site's GraphQL URI]}:`
  },
  {
    name: 'group',
    default: argv.group,
    message: chalk`Group Key {reset [used for the site's GraphQL URI]}:`
  }
];

const handler = async (argv) => {
  if (!argv.folder || !argv.account || !argv.group) {
    await inquirer
      .prompt(questions(argv))
      .then(answers => Object.keys(answers).forEach(k => argv[k] = answers[k]));
  }
  const { folder, dev, siteName, account, group } = argv;
  const npmOrg = 'endeavorb2b';
  const templateDir = 'packages/website-template';
  const graphqlUri = `https://graphql.base-cms.io/${account}/${group}`;

  if (existsSync(`sites/${folder}`)) throw new Error(`Folder ${folder} already exists!`);

  const args = [
    'create',
    `--path=${folder}`,
    `--npmOrg=${npmOrg}`,
    `--templateDir=${templateDir}`,
    `--siteName=${siteName}`,
    `--graphqlUri=${graphqlUri}`,
    '--proceed=true',
    '--withNavItems=true',
    '--withBootstrap=true',
    '--proceed=true'
  ];
  log('Executing basecms-website with options...');
  const { status } = spawnSync('./node_modules/.bin/basecms-website', args, { stdio: 'inherit' });
  if (status !== 0) throw new Error('basecms-website did not execute successfully!');

  if (dev) {
    updateDockerCompose({ folder, account, group });
    updateTravis({ folder, siteName });
  }
};

const updateDockerCompose = ({ folder, account, group }) => {
  const parsed = yaml.parse(readFileSync('./docker-compose.yml', 'utf8'), { merge: true });
  const prev = parsed.services[Object.keys(parsed.services).pop()];
  const appPort = parseInt(prev.environment.EXPOSED_PORT) + 1;
  const lrPort = parseInt(prev.environment.LIVERELOAD_PORT) + 1;

  log('Appending docker compose configuration');
  appendFileSync('./docker-compose.yml', `\n  ${folder}:
  <<: *node
  <<: *site-cmd
  working_dir: /root/sites/${folder}
  environment:
    <<: *env
    PORT: 80
    EXPOSED_PORT: ${appPort}
    LIVERELOAD_PORT: ${lrPort}
    GRAPHQL_URI: https://graphql.base-cms.io/${account}/${group}
  ports:
    - "${appPort}:80"
    - "${lrPort}:${lrPort}"\n`);
};

const updateTravis = ({ folder, siteName }) => {
  log('Appending Travis deployment configuration');
  appendFileSync('./.travis.yml', `\n    - stage: deploy
    name: Deploy ${siteName}
    script: scripts/deploy.js ${folder}\n`);
};

module.exports = yargs => yargs.command('create-site', 'Create a new website project', options, handler);
