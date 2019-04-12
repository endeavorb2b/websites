const gql = require('graphql-tag');
const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const home = require('../templates/index');

const queryFragment = gql`
  fragment HomePageFragment on WebsiteSection {
    hierarchy {
      id
      alias
    }
  }
`;

module.exports = (app) => {
  app.get('/', withWebsiteSection({
    aliasResolver: () => 'home',
    template: home,
    queryFragment,
  }));
};
