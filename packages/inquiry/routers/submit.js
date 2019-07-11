const { asyncRoute } = require('@base-cms/utils');
const { content: contentLoader } = require('@base-cms/web-common/page-loaders');
const send = require('@endeavorb2b/base-website-common/utils/send-mail');
const { notificationBuilder, confirmationBuilder } = require('../template-builders');

module.exports = ({ queryFragment, notification, confirmation }) => asyncRoute(async (req, res) => {
  const { locals } = res.app;
  const { apollo } = req;
  const content = await contentLoader(apollo, { id: req.params.id, queryFragment });
  await send(notificationBuilder(notification, locals, content, req));
  if (req.body.confirmationEmail) {
    await send(confirmationBuilder(confirmation, locals, content, req.body.confirmationEmail));
  }
  res.json({ ok: true });
});
