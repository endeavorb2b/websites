const { getAsArray } = require('@base-cms/object-path');

// @todo use @base-cms/env for this
const isDev = process.env.NODE_ENV === 'development';
const { SENDGRID_DEV_TO } = process.env;

module.exports = (template, locals, content, req) => {
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
  return {
    html,
    subject,
    addresses: { ...emails, from: site.get('inquiry.sendFrom') },
  };
};
