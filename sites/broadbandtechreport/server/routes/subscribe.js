const subscribe = require('../templates/subscribe/index');
const subscribeEmail = require('../templates/subscribe/email');

module.exports = (app) => {
  app.get('/subscribe', (_, res) => {
    res.marko(subscribe);
  });

  app.get('/subscribe/email', (_, res) => {
    res.marko(subscribeEmail);
  });
};
