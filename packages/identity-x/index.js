const IdentityX = require('./service');

module.exports = ({
  uri,
  debug,
  appId,
  config,
  linkConfig,
} = {}) => (req, res, next) => {
  const identityX = new IdentityX({
    uri,
    debug,
    appId,
    config,
    linkConfig,
  });
  req.identityX = identityX;
  res.locals.identityX = identityX;
  next();
};
