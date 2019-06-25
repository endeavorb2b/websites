#!/usr/bin/env node
process.on('unhandledRejection', (e) => { throw e; });

const base = process.argv[2];
if (!base) throw new Error('The base commit argument must be provided.');
const head = process.argv[3];
if (!head) throw new Error('The head commit argument must be provided.');

require('../src/between')({ base, head }).catch(e => setImmediate(() => { throw e; }));
