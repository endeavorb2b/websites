const createClient = require('./create-client');
const getActiveContext = require('./api/queries/get-active-context');
const tokenCookie = require('./utils/token-cookie');

class IdentityX {
  constructor({
    req,
    res,
    uri,
    appId,
    config,
    linkConfig,
  } = {}) {
    this.req = req;
    this.res = res;
    this.token = tokenCookie.getFrom(req);
    this.client = createClient({
      token: this.token,
      uri,
      appId,
      config,
      linkConfig,
    });
  }

  async loadActiveContext() {
    if (typeof this.activeContext === 'undefined') {
      try {
        const { data = {} } = await this.client.query({ query: getActiveContext });
        this.activeContext = data.activeAppContext || {};
      } catch (e) {
        this.activeContext = {};
        this.token = null;
        throw e;
      }
    }
    return this.activeContext;
  }
}

module.exports = IdentityX;
