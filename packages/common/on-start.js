const helmet = require('helmet');

// Set global express settings/middlewares for _all_ websites that use this function.
module.exports = (app) => {
  app.set('trust proxy', 'loopback, linklocal, uniquelocal');
  app.use(helmet({
    frameguard: false,
  }));
};
