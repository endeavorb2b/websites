const gql = require('graphql-tag');

module.exports = gql`

fragment GlobalThoughtLeadersContentFragment on Content {
  id
  type
  name
  canonicalPath
  ... on ContentCompany {
    primaryImage {
      id
      src
    }
  }
  ... on ContentVideo {
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
  ... on ContentWhitepaper {
    body
    canonicalPath
    company {
      id
      name
    }
  }
}
`;
