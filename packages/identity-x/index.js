const IdentityX = require('./service');

module.exports = config => (req, res, next) => {
  const service = new IdentityX({ req, res, config });
  req.identityX = service;
  res.locals.identityX = service;
  next();
};
