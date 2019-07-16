const queryFragment = require('@endeavorb2b/base-website-themes/default/api/fragments/home-page');
const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const index = require('../templates/index');

module.exports = (app) => {
  app.get('/', withWebsiteSection({
    aliasResolver: () => 'home',
    template: index,
    queryFragment,
  }));
};
