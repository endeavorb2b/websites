const queryFragment = require('@endeavorb2b/base-website-themes/pennwell/api/fragments/website-section-page');
const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const section = require('../templates/website-section');
const index = require('../templates/index');
const index3 = require('../templates/index3');

module.exports = (app) => {
  app.get('/:alias(transmission-distribution)', withWebsiteSection({
    template: index,
    queryFragment,
  }));

  app.get('/:alias(vehicles-accessories)', withWebsiteSection({
    template: index3,
    queryFragment,
  }));

  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
