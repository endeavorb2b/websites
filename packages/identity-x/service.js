const createClient = require('./create-client');
const getActiveUser = require('./api/queries/get-active-user');
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

  async loadActiveUser() {
    if (!this.token) return null;
    if (typeof this.activeUser === 'undefined') {
      try {
        const { data = {} } = await this.client.query({ query: getActiveUser });
        this.activeUser = data.activeAppUser || null;
      } catch (e) {
        this.token = null;
        tokenCookie.removeFrom(this.res);
      }
    }
    return this.activeUser;
  }
}

module.exports = IdentityX;
