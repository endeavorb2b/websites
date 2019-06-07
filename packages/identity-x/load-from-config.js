const identityX = require('./index');
const { actionsRouter } = require('./routers');

const { log } = console;

module.exports = (app) => {
  const { site } = app.locals;
  const idx = site.getAsObject('identityX');
  if (idx.enabled && idx.uri && idx.appId) {
    app.use(identityX({
      uri: idx.uri,
      appId: idx.appId,
    }));
    const mountTo = idx.mountTo || '/__idx';
    app.use(mountTo, actionsRouter);
    if (idx.debug) log(`IdentityX mounted on ${mountTo} using app ${idx.appId} (API: ${idx.uri})`);
  }
};
