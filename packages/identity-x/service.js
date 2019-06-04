const createClient = require('./create-client');

class IdentityX {
  constructor({
    uri,
    appId,
    config,
    linkConfig,
  } = {}) {
    this.client = createClient({
      uri,
      appId,
      config,
      linkConfig,
    });
  }
}

module.exports = IdentityX;
