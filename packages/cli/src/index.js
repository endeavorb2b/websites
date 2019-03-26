#!/usr/bin/env node

const yargs = require('yargs');
const log = require('fancy-log');

const commands = require('./commands');

const main = () => {
  log('Starting CLI...');
  commands(yargs);
  yargs
    .help()
    .demandCommand()
    .argv;
};
main();
