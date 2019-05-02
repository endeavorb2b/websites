const gql = require('graphql-tag');

module.exports = gql`

fragment ContentWhitepaperThoughtLeaderFragment on ContentWhitepaper {
  id
  name
  body
  canonicalPath
  company {
    id
    name
  }
}
`;
