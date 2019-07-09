const gql = require('graphql-tag');

module.exports = gql`
  fragment ContentInquiryFragment on Content {
    id
    name
    canonicalPath
    company {
      id
      name
      canonicalPath
      salesContacts {
        edges {
          node {
            id
            name
            email
          }
        }
      }
    }
    ... on Inquirable {
      enableRmi
      leadsDelivery
      salesContacts {
        edges {
          node {
            id
            name
            email
          }
        }
      }
    }
  }
`;
