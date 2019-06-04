const fetch = require('node-fetch');
const { ApolloClient } = require('apollo-client');
const { InMemoryCache } = require('apollo-cache-inmemory');
const { createHttpLink } = require('apollo-link-http');

const rootConfig = {
  connectToDevTools: false,
  ssrMode: true,
};

module.exports = ({
  uri,
  appId,
  config,
  linkConfig = {},
} = {}) => {
  if (!appId) throw new Error('An IdentityX application ID is required.');
  return new ApolloClient({
    ...config,
    ...rootConfig,
    link: createHttpLink({
      ...linkConfig,
      uri,
      fetch,
      headers: {
        ...linkConfig.headers,
        'x-app-id': appId,
      },
    }),
    cache: new InMemoryCache(),
  });
};
