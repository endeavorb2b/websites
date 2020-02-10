module.exports = {
  enabled: true,
  appId: '5cf67e2221be593b13b30edf',
  uri: process.env.IDENTITYX_GRAPHQL_URI || 'https://identity-x.io/graphql',
  mountTo: '/__idx',
  debug: process.env.NODE_ENV === 'development',
};
