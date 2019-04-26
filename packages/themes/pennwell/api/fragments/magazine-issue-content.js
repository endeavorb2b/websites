const gql = require('graphql-tag');

module.exports = gql`
fragment ContentBlockQueryMagazineIssueScheduledContentFragment on Content {
  id
  type
  shortName
  canonicalPath
  published
  company {
    id
    type
    name
    canonicalPath
  }
  primarySection {
    id
    name
    fullName
    canonicalPath
  }
  primaryImage {
    id
    src
    alt
  }
  ... on Authorable {
    authors {
      edges {
        node {
          id
          name
          type
          canonicalPath
        }
      }
    }
  }
}
`;
