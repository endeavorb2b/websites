const { SENDGRID_DEV_TO, isDev } = require('../env');

module.exports = (template, locals, content, req) => {
  const { email } = req.body;
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
  return {
    html,
    subject,
    addresses: { ...emails, from: site.get('inquiry.sendFrom') },
  };
};
