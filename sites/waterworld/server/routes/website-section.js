const queryFragment = require('@endeavorb2b/base-website-themes/pennwell/api/fragments/website-section-page');
const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const submissionHandler = require('@endeavorb2b/base-website-common/utils/contact-us');
const section = require('../templates/website-section');
const municipalTemplate = require('../templates/website-section/municipal');
const technologiesTemplate = require('../templates/website-section/municipal-technologies');
const industrialTemplate = require('../templates/website-section/industrial');
const internationalTemplate = require('../templates/website-section/international');
const globalTemplate = require('../templates/website-section/global-thought-leaders');
const contactUsTemplate = require('../templates/website-section/contact-us');

module.exports = (app) => {
  app.get('/:alias(contact-us)', withWebsiteSection({
    template: contactUsTemplate,
    queryFragment,
  }));
  submissionHandler(app);

  app.get('/:alias(global-thought-leaders)', withWebsiteSection({
    template: globalTemplate,
    queryFragment,
  }));

  app.get('/:alias(municipal)', withWebsiteSection({
    template: municipalTemplate,
    queryFragment,
  }));

  app.get('/:alias(municipal/technologies)', withWebsiteSection({
    template: technologiesTemplate,
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
