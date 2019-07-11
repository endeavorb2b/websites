const { getAsArray } = require('@base-cms/object-path');

/**
 * Generates an HTML email template notifying contact(s) of a user's inquiry.
 *
 * @param template  The marko template to render
 * @param $global   The marko globals to provide to the template
 * @param content   The platform.Content model to use in the template.
 * @param payload   An object containing the user's submitted data.
 * @returns Object  An object containing the rendered html, subject line, and addresses
 */
module.exports = ({
  template,
  $global,
  content,
  payload,
}) => {
  const { site } = $global;
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
    $global,
    content,
    subject,
    addresses,
    payload,
    isDev: process.env === 'development',
  };
  const html = template.renderToString(input);
  return { html, subject, addresses };
};
