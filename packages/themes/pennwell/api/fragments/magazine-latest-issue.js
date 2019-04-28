const gql = require('graphql-tag');

module.exports = gql`

fragment MagazineLatestIssueQueryFragment on MagazineIssue {
  id
  name
  canonicalPath
  coverImage {
    id
    src
  }
  mailDate
  digitalEditionUrl
  publication {
    id
    name
    canonicalPath
    subscribeUrl
  }
}

`;
