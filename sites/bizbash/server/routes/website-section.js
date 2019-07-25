const queryFragment = require('@endeavorb2b/base-website-themes/default/api/fragments/website-section-page');
const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const section = require('../templates/website-section');
const gatherGeeksTemplate = require('../templates/website-section/gathergeeks');
const productionStrategyTemplate = require('../templates/website-section/production-strategy');
const styleDecorTemplate = require('../templates/website-section/style-decor');
const cateringTemplate = require('../templates/website-section/catering');
const bermudaTemplate = require('../templates/website-section/bermuda');
const industryBuzzTemplate = require('../templates/website-section/industry-buzz');

module.exports = (app) => {
  app.get('/:alias(gathergeeks)', withWebsiteSection({
    template: gatherGeeksTemplate,
    queryFragment,
  }));

  app.get('/:alias(production-strategy)', withWebsiteSection({
    template: productionStrategyTemplate,
    queryFragment,
  }));

  app.get('/:alias(style-decor)', withWebsiteSection({
    template: styleDecorTemplate,
    queryFragment,
  }));

  app.get('/:alias(catering)', withWebsiteSection({
    template: cateringTemplate,
    queryFragment,
  }));

  app.get('/:alias(bermuda)', withWebsiteSection({
    template: bermudaTemplate,
    queryFragment,
  }));

  app.get('/:alias(industry-buzz)', withWebsiteSection({
    template: industryBuzzTemplate,
    queryFragment,
  }));

  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
