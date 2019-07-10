const { asyncRoute } = require('@base-cms/utils');
const { getAsArray } = require('@base-cms/object-path');
const sgMail = require('@sendgrid/mail');
const { content: contentLoader } = require('@base-cms/web-common/page-loaders');

const { error } = console;

const isDev = process.env.NODE_ENV === 'development';

// @todo use @base-cms/env for this
const { SENDGRID_API_KEY, SENDGRID_DEV_TO } = process.env;
if (!SENDGRID_API_KEY) throw new Error('Required env SENDGRID_API_KEY was not set!');
sgMail.setApiKey(SENDGRID_API_KEY);

const exception = (message, code = 400) => {
  const err = new Error(message);
  err.statusCode = code;
  return err;
};

const send = (html, subject, addresses = {}) => sgMail.send({ subject, html, ...addresses });

const sendNotification = (template, locals, content, req) => {
  const { body: payload, hostname: domain } = req;
  const { site } = locals;
  const { sendTo, sendBcc, directSend } = site.getAsObject('inquiry');
  const contacts = getAsArray(content, 'inquiryContacts').map(({ name, email }) => ({ name, email }));
  const addresses = {
    to: directSend && contacts.length ? contacts : sendTo,
    cc: directSend && contacts.length ? sendTo : undefined,
    bcc: sendBcc,
  };
  const subject = 'A new inquiry submission was received.';
  const input = {
    $global: locals,
    content,
    subject,
    addresses,
    domain,
    payload,
    isDev,
  };
  const html = template.renderToString(input);
  const emails = isDev ? { to: SENDGRID_DEV_TO } : addresses;
  return send(html, subject, { ...emails, from: site.get('inquiry.sendFrom') });
};

const sendThankYou = (template, locals, content, email) => {
  const { site } = locals;
  const { sendBcc } = site.getAsObject('inquiry');

  const addresses = { to: email };
  if (sendBcc) addresses.bcc = sendBcc;
  const subject = 'Your inquiry was received.';
  const input = {
    $global: locals,
    content,
    subject,
    addresses,
  };
  const html = template.renderToString(input);
  const emails = isDev ? { to: SENDGRID_DEV_TO } : addresses;
  return send(html, subject, { ...emails, from: site.get('inquiry.sendFrom') });
};

module.exports = ({
  emailTemplate,
  queryFragment,
  submissionTemplate,
}) => asyncRoute(async (req, res) => {
  try {
    const { locals } = res.app;
    const { apollo } = req;
    const content = await contentLoader(apollo, { id: req.params.id, queryFragment });
    await sendNotification(emailTemplate, locals, content, req);
    if (req.body.email) {
      await sendThankYou(submissionTemplate, locals, content, req.body.email);
    }
    res.json({ ok: true });
  } catch (e) {
    error(e);
    throw exception(e);
  }
});
