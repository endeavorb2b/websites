#!/usr/bin/env node
/**
 * Deployment tool for website containers
 * Requirements:
 * - Argument 1: the folder name to deploy [officer,...]
 * - ENV
 *   - DOCKERHUB_USERNAME
 *   - DOCKERHUB_PASSWORD
 *   - TRAVIS_TAG
 */

const { existsSync } = require('fs');
const { join } = require('path');
const { spawnSync } = require('child_process');
const https = require('https');
const lerna = require('../lerna.json');

const { log } = console;
const { TRAVIS_TAG } = process.env;

const version = `v${lerna.version}`;
const site = process.argv[2];
const sitePath = join('sites', site, 'package.json');
const image = `endeavorb2b/website-${site}`;

const error = (message) => {
  log(`ERROR: ${message}`);
  const text = `Deployment of \`${image}\` @ \`${version}\` to production FAILED!\n${message}`;
  const payload = JSON.stringify({ attachments: [{ color: 'danger', text }] });
  const req = https.request({
    hostname: 'hooks.slack.com',
    path: '/services/TDA6JTAKC/BGCT0SNGY/vJSPL4S2NQN8SDAjCPilP773',
    port: 443,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': payload.length,
    }
  }, (res) => {
    res.on('data', () => {
      log('Slack notified.');
      process.exit(1);
    });
  });

  req.on('error', e => log(e));
  req.write(payload);
  req.end();

}

if (TRAVIS_TAG !== version) error(`Tagged version ${TRAVIS_TAG} differs from lerna version ${version}, aborting!`);
if (!site) error('You must specify the site folder to deploy.');
if (!existsSync(sitePath)) error(`Could not read ${sitePath}!`);

const pkg = require(`../${sitePath}`);

if (version !== `v${pkg.version}`) {
  log(`Site ${site} is at version ${pkg.version}. Skipping deployment.`);
  process.exit(0);
}

const getJson = (url, reqHeaders) => new Promise((resolve, reject) => {
  const headers = { ...reqHeaders, 'Content-Type': 'application/json; charset=utf-8' };
  https.get(url, { headers }, (resp) => {
    let data = '';
    const { statusCode, statusMessage } = resp;
    if (statusCode >= 500) return reject(statusMessage);
    resp.on('data', chunk => data += chunk);
    resp.on('end', () => resolve(JSON.parse(data)));
  }).on('error', reject);
});

const getVersions = async () => {
  const authUrl = `https://auth.docker.io/token?service=registry.docker.io&scope=repository:${image}:pull`;
  const { token } = await getJson(authUrl);
  const url = `https://registry.hub.docker.com/v2/${image}/tags/list`;
  const list = await getJson(url, { Authorization: `Bearer ${token}`});
  return Array.isArray(list.tags) ? list.tags : [];
};

const shouldBuild = async () => {
  log(`\nChecking  ${image}:${version} on DockerHub`);
  const versions = await getVersions();
  return !versions.includes(version);
}

/**
 * Build docker image and push to docker hub
 */
const build = async () => {
  log(`Building  ${image}:${version}...\n`);
  const { status } = await spawnSync('bash', ['scripts/deploy-image.sh', site, version], { stdio: 'inherit' });
  if (status !== 0) throw new Error('Image build failed!');
}

const deploy = async () => {
  log(`Deploying ${image}:${version} on Kubernertes`);

  // Tell k8s to update the deployment with the new image version
};

const main = async () => {
  if (await shouldBuild()) {
    log(`  Image was not found, building.`)
    await build();
    log('    Build complete.');
  } else {
    log(`  Image found, skipping build.`);
  }
  await deploy();
  log('  Deploy complete.\n');
};

main().catch(e => error);
