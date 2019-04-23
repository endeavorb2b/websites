const { withMagazineSubscribeUrl } = require('@base-cms/marko-web/middleware');
const queryFragment = require('@endeavorb2b/base-website-themes/pennwell/api/fragments/magazine-publication');
const subscribe = require('../templates/subscribe/index');
const subscribeEmail = require('../templates/subscribe/email');
const subscribeMagazine = require('../templates/subscribe/magazine');

module.exports = (app) => {
  app.get('/subscribe', (_, res) => {
    res.marko(subscribe);
  });

  app.get('/subscribe/email', (_, res) => {
    res.marko(subscribeEmail);
  });

  app.get(':subscribeUrl(/subscribe/print/[a-zA-Z]+)', withMagazineSubscribeUrl({
    template: subscribeMagazine,
    queryFragment,
  }));
};
