const gql = require('graphql-tag');

module.exports = gql`
fragment HomePageFragment on WebsiteSection {
  hierarchy {
    id
    alias
  }
}
`;
