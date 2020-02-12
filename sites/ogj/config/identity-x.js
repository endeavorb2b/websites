const IdentityXConfig = require('@endeavorb2b/base-website-identity-x/config');

module.exports = new IdentityXConfig({
  appId: '5cf67e2221be593b13b30edf',
  requiredServerFields: ['givenName', 'familyName'],
});
