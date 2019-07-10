const { asyncRoute } = require('@base-cms/utils');
const sgMail = require('@sendgrid/mail');
const { content: contentLoader } = require('@base-cms/web-common/page-loaders');
const { notificationBuilder, confirmationBuilder } = require('../template-builders');

// @todo use @base-cms/env for this
const { SENDGRID_API_KEY } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

const send = ({ html, subject, addresses }) => sgMail.send({ html, subject, ...addresses });

module.exports = ({
  emailTemplate,
  queryFragment,
  submissionTemplate,
}) => asyncRoute(async (req, res) => {
  const { locals } = res.app;
  const { apollo } = req;
  const content = await contentLoader(apollo, { id: req.params.id, queryFragment });

  await send(notificationBuilder(emailTemplate, locals, content, req));
  if (req.body.email) await send(confirmationBuilder(submissionTemplate, locals, content, req));
  res.json({ ok: true });
});
