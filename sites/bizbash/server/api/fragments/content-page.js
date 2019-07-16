const gql = require('graphql-tag');
const contentPageFragment = require('@endeavorb2b/base-website-themes/default/api/fragments/content-page');

module.exports = gql`
  fragment BzbContentPageFragment on Content {
    ...ContentPageFragment
    ... on ContentSupplier {
      images {
        edges {
          node {
            id
            src
            alt
            displayName
            credit
            caption
          }
        }
      }
    }
  }
  ${contentPageFragment}
`;
