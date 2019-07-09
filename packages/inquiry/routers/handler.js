const { asyncRoute } = require('@base-cms/utils');
const sgMail = require('@sendgrid/mail');

const { error, log } = console;

const { SENDGRID_API_KEY, SENDGRID_BCC } = process.env;
if (!SENDGRID_API_KEY || SENDGRID_API_KEY === '(unset)') throw new Error('Required env SENDGRID_API_KEY was not set!');
sgMail.setApiKey(SENDGRID_API_KEY);
const bcc = SENDGRID_BCC || 'emailactivity@cygnus.com';

const exception = (message, code = 400) => {
  const err = new Error(message);
  err.statusCode = code;
  return err;
};

const loadContent = async (contentId) => {
  // @todo qyery for ontent
  log('query!');
  return { id: contentId };
};

const send = async ({ template, input, subject }, addresses) => {
  const isDev = process.env.NODE_ENV === 'development';
  const html = template.renderToString({ ...input, isDev });
  const emails = isDev ? { to: 'developer@endeavorb2b.com' } : addresses;
  const cfgFrom = input.$global.site.get('inquiry.fromEmail');
  const cfgName = input.$global.config.get('siteName');

  return sgMail.send({
    from: cfgFrom && cfgName ? `${cfgName} <${cfgFrom}>` : 'Base CMS <noreply@base-cms.io>',
    ...emails,
    subject,
    html,
  });
};

const getSalesAddresses = ({ site, content }) => {
  const addresses = {
    to: [site.getAsObject('inquiry.defaultContact')],
    bcc,
  };
  if (site.getAsObject('inquiry.directSend') && content.leadsDelivery) {
    // @todo ensure these pull from the parent `company`-like object, if not present.
    // @todo this should be provided by the Inquirable graph resolver...
    const contacts = content.salesContacts;
    if (contacts && contacts.edges.length) {
      addresses.cc = [site.getAsObject('inquiry.defaultContact')];
      addresses.to = contacts.edges.map(({ node: { name, email } }) => ({ name, email }));
    }
  }
  return addresses;
};

const sendNotification = (template, locals, content, req) => {
  const { body: payload, hostname: domain } = req;
  const { site } = locals;
  const addresses = getSalesAddresses({ site, content });
  const subject = 'A new inquiry submission was received.';
  const input = {
    $global: locals,
    content,
    subject,
    addresses,
    domain,
    payload,
  };
  return send({ template, input, subject }, addresses);
};

const sendThankYou = (template, locals, content, email) => {
  const addresses = { to: email, bcc };
  const subject = 'Your inquiry was received.';
  const input = {
    $global: locals,
    content,
    subject,
    addresses,
  };
  return send({ template, input, subject }, addresses);
};

module.exports = ({
  emailTemplate,
  queryFragment,
  submissionTemplate,
}) => asyncRoute(async (req, res) => {
  try {
    const { locals } = res.app;
    const content = await loadContent(req.params.id, queryFragment);
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
