const search = require('../templates/search');

module.exports = (app) => {
  app.get('/search', (_, res) => {
    res.marko(search);
  });
};
