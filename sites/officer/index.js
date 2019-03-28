const { startServer } = require('@base-cms/marko-web');
const errorTemplate = require('./server/templates/error');
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
}).then(() => log('Website started!')).catch(e => setImmediate(() => { throw e; }));
