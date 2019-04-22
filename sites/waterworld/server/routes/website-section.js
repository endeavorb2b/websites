const queryFragment = require('@endeavorb2b/base-website-themes/pennwell/api/fragments/website-section-page');
const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const section = require('../templates/website-section');
const municipalTemplate = require('../templates/website-section/municipal');
const industrialTemplate = require('../templates/website-section/industrial');
const internationalTemplate = require('../templates/website-section/international');

module.exports = (app) => {
  app.get('/:alias(municipal)', withWebsiteSection({
    template: municipalTemplate,
    queryFragment,
  }));

  app.get('/:alias(industrial)', withWebsiteSection({
    template: industrialTemplate,
    queryFragment,
  }));

  app.get('/:alias(international)', withWebsiteSection({
    template: internationalTemplate,
    queryFragment,
  }));

  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
