const gql = require('graphql-tag');

module.exports = gql`

fragment AllPublishedContentQueryFragment on Content {
  id
  type
  name
  shortName
  teaser
  canonicalPath
  published
  primarySection {
    id
    name
    fullName
    canonicalPath
  }
  primaryImage {
    id
    src
  }
  ... on ContentWhitepaper {
    company {
      id
      name
      canonicalPath
    }
  }
  ... on ContentWebinar {
    starts
    company {
      id
      name
      canonicalPath
    }
  }
  ... on ContentEvent {
    starts
    ends
    company {
      id
      name
      canonicalPath
    }
  }
}

`;
