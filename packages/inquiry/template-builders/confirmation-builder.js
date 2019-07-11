module.exports = (template, locals, content, confirmataionEmail) => {
  const { site } = locals;
  const { sendBcc } = site.getAsObject('inquiry');

  const addresses = {
    to: confirmataionEmail,
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
