#!/usr/bin/env node

const { readdirSync, statSync } = require('fs')
const { writeFileSync, existsSync } = require('fs');
const { join } = require('path');

const dirs = p => readdirSync(p).filter(f => statSync(join(p, f)).isDirectory())
const siteDirectories = dirs(__dirname);
const sites = require('../sites');

siteDirectories.forEach((k) => {
  const { domain } = sites[k];
  const robots = `# www.robotstxt.org/
# www.google.com/support/webmasters/bin/answer.py?hl=en&answer=156449

User-agent: *
Disallow: /
Disallow: /load-more

Sitemap: https://www.${domain}/sitemap.xml
Sitemap: https://www.${domain}/sitemap-google-news.xml`;

  writeFileSync(join(__dirname, k, 'server/public/robots.txt'), robots);
});
