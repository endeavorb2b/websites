const submissionHandler = require('@endeavorb2b/base-website-common/utils/contact-us');
const template = require('../templates/contact-us');

module.exports = (app) => {
  app.get('/contact-us', (_, res) => { res.marko(template); });
  submissionHandler(app);
};
