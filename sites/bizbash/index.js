const newrelic = require('newrelic');
const { startServer } = require('@base-cms/marko-web');
const onStart = require('@endeavorb2b/base-website-common/on-start');
const errorTemplate = require('@endeavorb2b/base-website-themes/default/templates/error');
const { version } = require('./package.json');
const routes = require('./server/routes');
const siteConfig = require('./config/site');
const coreConfig = require('./config/core');

const { log } = console;

module.exports = startServer({
  rootDir: __dirname,
  coreConfig,
  siteConfig,
  routes,
  errorTemplate,
  onStart: onStart(version),
  onAsyncBlockError: e => newrelic.noticeError(e),
  redirectHandler: ({ from }) => {
    if (from === '/marketplace') {
      const to = Math.random() * 10 > 5 ? '/venue-directory' : '/supplier-directory';
      return { to, code: 302 };
    }
    const pattern = /(\/story\/[0-9]*|\/listing\/[0-9]*|\/gallery\/[0-9]*)/;
    const matches = pattern.exec(from);
    if (matches && matches[0] !== from) return { to: matches[0] };
    return null;
  },
}).then(() => log('Website started!')).catch(e => setImmediate(() => { throw e; }));
