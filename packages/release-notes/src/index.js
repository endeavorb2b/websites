/* eslint-disable camelcase */
const octokit = require('./octokit');
const between = require('./between');

module.exports = async () => {
  const owner = 'endeavorb2b';
  const repo = 'websites';

  const { data } = await octokit.repos.listTags({
    owner,
    repo,
  });

  const tags = data.map(t => t.name);
  if (!tags.length) throw new Error('No tags were found.');

  const base = tags[1] || 'master';
  const head = tags[0];

  process.stdout.write(head);

  await between({ base, head });
};
