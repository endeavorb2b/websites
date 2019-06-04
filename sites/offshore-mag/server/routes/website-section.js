const queryFragment = require('@endeavorb2b/base-website-themes/pennwell/api/fragments/website-section-page');
const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const section = require('../templates/website-section');
const mapspostersTemplate = require('../templates/website-section/resources-maps-posters');

module.exports = (app) => {
  app.get('/:alias(resources/maps-posters)', withWebsiteSection({
    template: mapspostersTemplate,
    queryFragment,
  }));

  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
