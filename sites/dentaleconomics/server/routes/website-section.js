const submissionHandler = require('@endeavorb2b/base-website-common/utils/contact-us');
const queryFragment = require('@endeavorb2b/base-website-themes/default/api/fragments/website-section-page');
const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const section = require('../templates/website-section');
const contactUsTemplate = require('../templates/website-section/contact-us');
const editorialAdvisoryBoardTemplate = require('../templates/website-section/editorial-advisory-board');

module.exports = (app) => {
  app.get('/:alias(contact-us)', withWebsiteSection({
    template: contactUsTemplate,
    queryFragment,
  }));
  app.get('/:alias(editorial-advisory-board)', withWebsiteSection({
    template: editorialAdvisoryBoardTemplate,
    queryFragment,
  }));
  submissionHandler(app);
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
