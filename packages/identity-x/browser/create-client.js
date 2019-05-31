import ApolloClient from 'apollo-boost';

module.exports = ({ uri, appId }) => new ApolloClient({
  uri,
  headers: { 'x-app-id': appId },
});
