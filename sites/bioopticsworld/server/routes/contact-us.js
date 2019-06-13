const submissionHandler = require('@endeavorb2b/base-website-common/utils/contact-us');
const queryFragment = require('@endeavorb2b/base-website-themes/pennwell/api/fragments/website-section-page');
const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const template = require('../templates/contact-us');

module.exports = (app) => {
  app.get('/contact-us', withWebsiteSection({
    aliasResolver: () => 'contact-us',
    template,
    queryFragment,
  }));
  submissionHandler(app);
};
