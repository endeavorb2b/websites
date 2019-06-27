#!/usr/bin/env node
process.on('unhandledRejection', (e) => { throw e; });

require('../src')().catch(e => setImmediate(() => { throw e; }));
