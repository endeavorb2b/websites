const queryFragment = require('@endeavorb2b/base-website-themes/default/api/fragments/website-section-page');
const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const submissionHandler = require('@endeavorb2b/base-website-common/utils/contact-us');
const section = require('../templates/website-section');
const contactUsTemplate = require('../templates/website-section/contact-us');
const automatizacionTemplate = require('../templates/website-section/automatizacion');
const empaqueTemplate = require('../templates/website-section/empaque');
const procesamientoTemplate = require('../templates/website-section/procesamiento');
const eventosTemplate = require('../templates/website-section/eventos');
const companiasTemplate = require('../templates/website-section/companias');

module.exports = (app) => {
  app.get('/:alias(contact-us)', withWebsiteSection({
    template: contactUsTemplate,
    queryFragment,
  }));

  app.get('/:alias(automatizacion)', withWebsiteSection({
    template: automatizacionTemplate,
    queryFragment,
  }));

  app.get('/:alias(empaque)', withWebsiteSection({
    template: empaqueTemplate,
    queryFragment,
  }));

  app.get('/:alias(procesamiento)', withWebsiteSection({
    template: procesamientoTemplate,
    queryFragment,
  }));

  app.get('/:alias(eventos)', withWebsiteSection({
    template: eventosTemplate,
    queryFragment,
  }));

  app.get('/:alias(companias)', withWebsiteSection({
    template: companiasTemplate,
    queryFragment,
  }));

  submissionHandler(app);
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
