const { startServer } = require('@base-cms/marko-web');
const onStart = require('@endeavorb2b/base-website-common/on-start');
const errorTemplate = require('@endeavorb2b/base-website-themes/pennwell/templates/error');
require('./newrelic');
const routes = require('./server/routes');
const siteConfig = require('./config/site');
const coreConfig = require('./config/core');

const { log } = console;

startServer({
  rootDir: __dirname,
  coreConfig,
  siteConfig,
  routes,
  errorTemplate,
  onStart,
}).then(() => log('Website started!')).catch(e => setImmediate(() => { throw e; }));
