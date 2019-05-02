const gql = require('graphql-tag');

module.exports = gql`
fragment ContentCompanyThoughtLeaderFragment on ContentCompany {
  id
  name
  canonicalPath
  primaryImage {
    id
    src
  }
}
`;
