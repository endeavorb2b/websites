const queryFragment = require('@endeavorb2b/base-website-themes/pennwell/api/fragments/home-page');
const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const index2 = require('../templates/index2');

module.exports = (app) => {
  app.get('/', withWebsiteSection({
    aliasResolver: () => 'home',
    template: index2,
    queryFragment,
  }));
};
