const identityX = require('@endeavorb2b/base-website-identity-x');

module.exports = ({ app, site }) => {
  const idx = site.getAsObject('identityX');
  if (idx.enabled && idx.uri && idx.appId) {
    app.use(identityX({
      uri: idx.uri,
      appId: idx.appId,
    }));
  }
};
