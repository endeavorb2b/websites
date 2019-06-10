const helmet = require('helmet');

// Set global express settings/middlewares for _all_ websites that use this function.
module.exports = version => (app) => {
  app.set('trust proxy', 'loopback, linklocal, uniquelocal');
  app.use((req, res, next) => {
    res.set('x-version', version);
    next();
  });
  app.use(helmet({
    frameguard: false,
  }));
};
