/* eslint-disable global-require */
const router = require('./routers');
const defaultEmailTemplate = require('./templates/email.marko');
const defaultSubmissionTemplate = require('./templates/submission.marko');
const defaultQueryFragment = require('./default-fragment');

const { log } = console;

module.exports = (app, options = {}) => {
  const { site } = app.locals;
  const inquiry = site.getAsObject('inquiry');
  const config = {
    template: options.template,
    queryFragment: options.queryFragment || defaultQueryFragment,
    emailTemplate: options.emailTemplate || defaultEmailTemplate,
    submissionTemplate: options.submissionTemplate || defaultSubmissionTemplate,
  };
  if (!options.template) throw new Error('Inquiry template must be provided!');
  if (inquiry.enabled) {
    // ensure SENDGRID_API_KEY and SENDGRID_DEV_TO are set
    // @todo use @base-cms/env for this
    const { SENDGRID_API_KEY } = process.env;
    if (!SENDGRID_API_KEY) throw new Error('Required env SENDGRID_API_KEY was not set!');

    const mountTo = inquiry.mountTo || '/__inquiry';
    if (inquiry.sendFrom && inquiry.sendTo) {
      app.use(mountTo, router(config));
      if (inquiry.debug) log(`Inquiry mounted on ${mountTo}.`);
    } else {
      throw new Error('inquiry.{sendFrom,sendTo} configs are required and not present.');
    }
  }
};
