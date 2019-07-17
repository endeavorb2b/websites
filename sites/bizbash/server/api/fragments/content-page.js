const gql = require('graphql-tag');
const contentPageFragment = require('@endeavorb2b/base-website-themes/default/api/fragments/content-page');

module.exports = gql`
  fragment BzbContentPageFragment on Content {
    ...ContentPageFragment
    ... on ContentTopList {
      relatedTo(input:{ pagination: { limit: 100 }, sort: { order: values } }) {
        edges {
          node {
            id
            shortName
            canonicalPath
            images(input:{ pagination: { limit: 100 }, sort: { order: values } }) {
              edges {
                node {
                  id
                  src
                  alt
                  displayName
                }
              }
            }
          }
        }
      }
    }
    ... on ContentSupplier {
      images(input:{ pagination: { limit: 100 }, sort: { order: values } }) {
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
    ... on ContentVenue {
      images(input:{ pagination: { limit: 100 }, sort: { order: values } }) {
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
      spaces {
        edges {
          node {
            id
            name
            area
            capacityMin
            capacityMaxSeated
            capacityMaxStanding
            floorPlan {
              id
              src
            }
          }
        }
      }
    }
  }
  ${contentPageFragment}
`;
