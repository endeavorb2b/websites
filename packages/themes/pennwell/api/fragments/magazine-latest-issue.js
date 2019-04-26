const gql = require('graphql-tag');

module.exports = gql`

fragment MagazineLatestIssueQueryFragment on MagazineIssue {
  id
  name
  canonicalPath
  mailed
  coverImage {
    id
    src
  }
  digitalEditionUrl
  publication {
    id
    name
    canonicalPath
    subscribeUrl
  }
}

`;
