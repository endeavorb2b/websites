const IdentityX = require('./service');

module.exports = ({
  uri,
  appId,
  config,
  linkConfig,
} = {}) => (req, res, next) => {
  const identityX = new IdentityX({
    req,
    res,
    uri,
    appId,
    config,
    linkConfig,
  });
  req.identityX = identityX;
  res.locals.identityX = identityX;
  next();
};
