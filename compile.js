#!/usr/bin/env node
const compiler = require('marko/compiler');
const glob = require('glob');
const fs = require('fs');

const { log } = console;

const run = ({
  dir = process.cwd(),
  ignore = ['node_modules/**'],
  patterns = ['**/*.marko'],
  clean = false,
  silent = false,
} = {}) => {
  const globOptions = {
    ignore,
    cwd: dir,
    matchBase: true,
    absolute: true,
  };

  return Promise.all(patterns.map(pattern => new Promise((resolve, reject) => {
    glob(pattern, globOptions, (err, files) => {
      if (err) return reject(err);
      files.map((file) => {
        const serverFile = `${file}.js`;
        if (clean) {
          try {
            if (!silent) log(`Deleting ${serverFile}`);
            fs.unlinkSync(serverFile);
          } catch (e) {

          }
        } else {
          const compiled = compiler.compileFile(file);
          fs.writeFileSync(serverFile, compiled);
          if (!silent) log(`Wrote ${serverFile}`);
        }
        resolve();
      });
    });
  })));
};

log('Compiling Marko templates...')
run({ silent: true }).then(() => log('Templates compiled successfully.')).catch((e) => {
  log(e);
  process.exit(1);
});
