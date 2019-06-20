const queryFragment = require('@endeavorb2b/base-website-themes/pennwell/api/fragments/website-section-page');
const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const submissionHandler = require('@endeavorb2b/base-website-common/utils/contact-us');
const section = require('../templates/website-section');
const industryStatistics = require('../templates/website-section/industry-statistics');
const surveyDownloads = require('../templates/website-section/ogj-survey-downloads');
const surveyDownloadsChildren = require('../templates/website-section/ogj-survey-downloads-children');
const contactUsTemplate = require('../templates/website-section/contact-us');

module.exports = (app) => {
  app.get('/:alias(contact-us)', withWebsiteSection({
    template: contactUsTemplate,
    queryFragment,
  }));
  submissionHandler(app);
  app.get('/:alias(industry-statistics)', withWebsiteSection({
    template: industryStatistics,
    queryFragment,
  }));
  app.get('/:alias(ogj-survey-downloads)', withWebsiteSection({
    template: surveyDownloads,
    queryFragment,
  }));
  app.get('/:alias(ogj-survey-downloads/[a-z0-9-/]+)', withWebsiteSection({
    template: surveyDownloadsChildren,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
