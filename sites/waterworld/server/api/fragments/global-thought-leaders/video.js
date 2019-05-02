const gql = require('graphql-tag');

module.exports = gql`

fragment ContentVideoThoughtLeaderFragment on ContentVideo {
  id
  embedCode
  company {
    id
    name
    canonicalPath
    primaryImage {
      id
      src
    }
  }
}
`;
