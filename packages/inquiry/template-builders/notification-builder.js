const { getAsArray } = require('@base-cms/object-path');

module.exports = (template, locals, content, req) => {
  const { body: payload, hostname: domain } = req;
  const { site } = locals;
  const { sendTo, sendBcc, directSend } = site.getAsObject('inquiry');
  const contacts = getAsArray(content, 'inquiryContacts').map(({ name, email }) => ({ name, email }));
  const addresses = {
    to: directSend && contacts.length ? contacts : sendTo,
    cc: directSend && contacts.length ? sendTo : undefined,
    bcc: sendBcc,
    from: site.get('inquiry.sendFrom'),
  };
  const subject = 'A new inquiry submission was received.';
  const input = {
    $global: locals,
    content,
    subject,
    addresses,
    domain,
    payload,
    isDev: process.env === 'development',
  };
  const html = template.renderToString(input);
  return { html, subject, addresses };
};
