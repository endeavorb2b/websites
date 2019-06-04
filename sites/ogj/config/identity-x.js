module.exports = {
  enabled: true,
  appId: '5cf1797bba814a000656ab79',
  uri: process.env.IDENTITYX_GRAPHQL_URI || 'https://identity-x.base-cms.io/graphql',
  mountTo: '/__idx',
  debug: process.env.NODE_ENV === 'development',
};
