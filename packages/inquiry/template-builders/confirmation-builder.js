module.exports = (template, locals, content, req) => {
  const { email } = req.body;
  const { site } = locals;
  const { sendBcc } = site.getAsObject('inquiry');

  const addresses = {
    to: email,
    from: site.get('inquiry.sendFrom'),
    bcc: sendBcc,
  };
  const subject = 'Your inquiry was received.';
  const input = {
    $global: locals,
    content,
    subject,
    addresses,
  };
  const html = template.renderToString(input);
  return { html, subject, addresses };
};
