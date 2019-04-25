const helmet = require('helmet');
const newrelic = require('newrelic');

// Set global express settings/middlewares for _all_ websites that use this function.
module.exports = (app) => {
  app.set('trust proxy', 'loopback, linklocal, uniquelocal');
  app.use(helmet());

  // NR error logging
  app.use((err, req, res, next) => {
    newrelic.noticeError(err);
    next(err);
  });
};
