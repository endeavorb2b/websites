const gql = require('graphql-tag');

module.exports = gql`

fragment mundopmmiContentListFragment on Content {
  id
  type
  typeTitled: type(input: { format: titleize })
  shortName
  canonicalPath
}

`;
