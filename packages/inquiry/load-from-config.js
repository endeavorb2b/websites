/* eslint-disable global-require */
const router = require('./routers');
const defaultNotificationTemplate = require('./templates/notification.marko');
const defaultSubmissionTemplate = require('./templates/confirmation.marko');
const defaultQueryFragment = require('./default-fragment');

const { log } = console;

module.exports = (app, options = {}) => {
  const { site } = app.locals;
  const inquiry = site.getAsObject('inquiry');
  const config = {
    queryFragment: options.queryFragment || defaultQueryFragment,
    notification: options.notificationTemplate || defaultNotificationTemplate,
    confirmation: options.confirmationTemplate || defaultSubmissionTemplate,
  };
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
