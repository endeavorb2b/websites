const gql = require('graphql-tag');

module.exports = gql`

fragment MundoPMMIFeaturedCompaniesFragment on Content {
  id
  type
  typeTitled: type(input: { format: titleize })
  shortName
  canonicalPath
}

`;
