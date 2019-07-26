const gql = require('graphql-tag');

module.exports = gql`

fragment BizBashContentListFragment on Content {
  id
  type
  typeTitled: type(input: { format: titleize })
  shortName
  teaser(input: { maxLength: 500, useFallback: false, truncatedSuffix: "" })
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
    alt
    isLogo
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
