/**
 * Generates an HTML email template thanking a user for their inquiry and
 * notifying them that it was received.
 *
 * @param template  The marko template to render
 * @param locals    The marko globals to provide to the template
 * @param content   The platform.Content model to use in the template.
 * @param email     The email address this confirmation should be sent to
 * @returns Object  An object containing the rendered html, subject line, and addresses
 */
module.exports = ({
  template,
  locals,
  content,
  email,
}) => {
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
