const gql = require('graphql-tag');

module.exports = gql`
fragment WebsiteSectionPageFragment on WebsiteSection {
  name
  description
  hierarchy {
    id
    alias
    name
  }
}
`;
