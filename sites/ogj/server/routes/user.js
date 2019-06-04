const login = require('../templates/user/login');
const authenticate = require('../templates/user/authenticate');

module.exports = (app) => {
  app.get('/user/authenticate', (req, res) => {
    res.marko(authenticate);
  });

  app.get('/user/login', (req, res) => {
    res.marko(login);
  });
};
