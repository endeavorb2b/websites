const subscribeMagazine = require('../templates/subscribe/magazine');

module.exports = (app) => {
  // app.get('/subscribe', (req, res) => {
  //   res.marko(subscribe);
  // });

  app.get('/subscribe/print', (req, res) => {
    const { key } = req.params;
    res.marko(subscribeMagazine, { key });
  });
};
