const gql = require('graphql-tag');
const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const section = require('../templates/website-section');

const queryFragment = gql`
  fragment WebsiteSectionPageFragment on WebsiteSection {
    hierarchy {
      id
      alias
    }
  }
`;

module.exports = (app) => {
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
