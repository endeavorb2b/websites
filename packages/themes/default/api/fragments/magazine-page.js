const gql = require('graphql-tag');

module.exports = gql`

fragment MagazinePageFragment on MagazinePublication {
  id
  name
  description
  coverImage {
    id
    src
  }
  canonicalPath
  metadata {
    title
    description
  }
}

`;
