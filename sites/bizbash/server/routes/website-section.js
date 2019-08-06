const queryFragment = require('@endeavorb2b/base-website-themes/default/api/fragments/website-section-page');
const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const section = require('../templates/website-section');
const gatherGeeksTemplate = require('../templates/website-section/gathergeeks');
const productionStrategyTemplate = require('../templates/website-section/production-strategy');
const styleDecorTemplate = require('../templates/website-section/style-decor');
const cateringTemplate = require('../templates/website-section/catering');
const localVenuesDestinations = require('../templates/website-section/local-venues-destinations');
const supplierDirectory = require('../templates/website-section/supplier-directory');
const venueDirectory = require('../templates/website-section/venue-directory');
const bermudaTemplate = require('../templates/website-section/bermuda');
const industryBuzzTemplate = require('../templates/website-section/industry-buzz');

module.exports = (app) => {
  app.get('/:alias(supplier-directory)', withWebsiteSection({
    template: supplierDirectory,
    queryFragment,
  }));

  app.get('/:alias(venue-directory)', withWebsiteSection({
    template: venueDirectory,
    queryFragment,
  }));

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

  app.get('/:alias(local-venues-destinations)', withWebsiteSection({
    template: localVenuesDestinations,
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
