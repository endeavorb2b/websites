const gql = require('graphql-tag');

module.exports = gql`

fragment ContentListFragment on Content {
  id
  type
  typeTitled: type(input: { format: titleize })
  shortName
  teaser(input: { maxLength: 500, useFallback: false, truncatedSuffix: "" })
  canonicalPath
  published
  publishedDate(input: { format: "MMM Do, YYYY" })
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
    isLogo
  }
  userRegistration {
    isRequired
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
  ... on ContentPromotion {
    linkText
    linkUrl
  }
  ... on ContentContact {
    title
    phone
    publicEmail
  }
  ... on ContentWebinar {
    starts
  }
  ... on ContentEvent {
    starts
    ends
  }
}

`;
