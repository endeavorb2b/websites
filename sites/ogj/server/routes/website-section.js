const queryFragment = require('@endeavorb2b/base-website-themes/pennwell/api/fragments/website-section-page');
const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const section = require('../templates/website-section');
const industryStatistics = require('../templates/website-section/industry-statistics');

module.exports = (app) => {
  app.get('/:alias(industry-statistics)', withWebsiteSection({
    template: industryStatistics,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
