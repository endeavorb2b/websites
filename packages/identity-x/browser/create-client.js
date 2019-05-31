import ApolloClient from 'apollo-boost';

export default ({ uri, appId }) => new ApolloClient({
  uri,
  headers: { 'x-app-id': appId },
});
