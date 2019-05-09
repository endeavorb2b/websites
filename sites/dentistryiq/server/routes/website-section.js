const queryFragment = require('@endeavorb2b/base-website-themes/pennwell/api/fragments/website-section-page');
const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const section = require('../templates/website-section');
const freeSamplesTemplate = require('../templates/website-section/products-free-samples');

module.exports = (app) => {
  app.get('/:alias(products/free-samples)', withWebsiteSection({
    template: freeSamplesTemplate,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
