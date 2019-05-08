const gql = require('graphql-tag');

module.exports = gql`
fragment ContentPageFragment on Content {
  id
  name
  teaser(input: { useFallback: false, maxLength: null })
  body
  published
  company {
    id
    name
    canonicalPath
  }
  primarySection {
    id
    name
    alias
    canonicalPath
    hierarchy {
      id
      name
      alias
      canonicalPath
    }
  }
  primaryImage {
    id
    src
    alt
    caption
    credit
    isLogo
  }
  gating {
    surveyType
    surveyId
  }
  ... on ContentVideo {
    embedCode
  }
  ... on ContentNews {
    source
    byline
  }
  ... on ContentWebinar {
    linkUrl
    sponsors {
      edges {
        node {
          id
          name
          canonicalPath
        }
      }
    }
  }
  ... on Addressable {
    address1
    address2
    city
    state
    zip
    country
    location {
      latitude
      longitude
    }
  }
  ... on Contactable {
    phone
    tollfree
    fax
    website
    firstName
    lastName
    title
    mobile
    publicEmail
  }
  ... on Media {
    fileSrc
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
    contributors {
      edges {
        node {
          id
          name
          type
          canonicalPath
        }
      }
    }
    photographers {
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
