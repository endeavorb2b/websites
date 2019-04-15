#!/usr/bin/env node

const { readdirSync, statSync, copyFileSync, mkdirSync } = require('fs')
const { join } = require('path');

const dirs = p => readdirSync(p).filter(f => statSync(join(p, f)).isDirectory())
const siteDirectories = dirs(__dirname);

siteDirectories.forEach((k) => {
  const src = join(__dirname, 'officer');
  const dest = join(__dirname, k);

  // Routing
  mkdirSync(join(dest, 'server/routes'), { recursive: true });
  copyFileSync(join(src, 'server/routes/index.js'), join(dest, 'server/routes/index.js'));
  copyFileSync(join(src, 'server/routes/search.js'), join(dest, 'server/routes/search.js'));

  // Templates
  mkdirSync(join(dest, 'server/templates/search/components'), { recursive: true });
  copyFileSync(join(src, 'server/templates/search/index.marko'), join(dest, 'server/templates/search/index.marko'));
  copyFileSync(join(src, 'server/templates/search/components/layout.marko'), join(dest, 'server/templates/search/components/layout.marko'));
});
