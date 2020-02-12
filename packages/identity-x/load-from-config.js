const identityX = require('./index');
const routes = require('./routes');

const { log } = console;

module.exports = (app) => {
  const { site } = app.locals;
  const config = site.getAsObject('identityX');
  if (config.appId) {
    app.use(identityX(config));
    app.use('/__idx', routes);
    log(`IdentityX mounted on /__idx using app ${config.appId}`);
  }
};
