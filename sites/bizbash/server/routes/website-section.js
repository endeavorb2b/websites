const queryFragment = require('@endeavorb2b/base-website-themes/default/api/fragments/website-section-page');
const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const submissionHandler = require('@endeavorb2b/base-website-common/utils/contact-us');
const section = require('../templates/website-section');
const contactUsTemplate = require('../templates/website-section/contact-us');
const gatherGeeksTemplate = require('../templates/website-section/gathergeeks');
const productionStrategyTemplate = require('../templates/website-section/production-strategy');
const styleDecorTemplate = require('../templates/website-section/style-decor');
const cateringTemplate = require('../templates/website-section/catering');
const venueDirectory = require('../templates/website-section/venue-directory');

module.exports = (app) => {
  app.get('/:alias(contact-us)', withWebsiteSection({
    template: contactUsTemplate,
    queryFragment,
  }));
  app.get('/:alias(venue-directory)', withWebsiteSection({
    template: venueDirectory,
    queryFragment,
  }));
  submissionHandler(app);

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

  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
