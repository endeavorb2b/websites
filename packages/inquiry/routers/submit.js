const { asyncRoute } = require('@base-cms/utils');
const { content: contentLoader } = require('@base-cms/web-common/page-loaders');
const send = require('@endeavorb2b/base-website-common/utils/send-mail');
const buildMarkoGlobal = require('@endeavorb2b/base-website-common/utils/build-marko-global');
const { notificationBuilder, confirmationBuilder } = require('../template-builders');

module.exports = ({ queryFragment, notification, confirmation }) => asyncRoute(async (req, res) => {
  const { site } = res.app.locals;
  const {
    sendBcc: bcc,
    sendFrom: from,
    sendTo: to,
    directSend,
  } = site.getAsObject('inquiry');
  const $global = buildMarkoGlobal(res);
  const { apollo } = req;
  const content = await contentLoader(apollo, { id: req.params.id, queryFragment });
  await send(notificationBuilder({
    template: notification,
    $global,
    content,
    payload: req.body,
    to,
    from,
    bcc,
    directSend,
  }));
  if (req.body.confirmationEmail) {
    await send(confirmationBuilder({
      template: confirmation,
      $global,
      content,
      email: req.body.confirmationEmail,
      from,
      bcc,
    }));
  }
  res.json({ ok: true });
});
