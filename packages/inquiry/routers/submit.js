const { asyncRoute } = require('@base-cms/utils');
const { getAsArray } = require('@base-cms/object-path');
const { content: contentLoader } = require('@base-cms/web-common/page-loaders');
const send = require('@endeavorb2b/base-website-common/utils/send-mail');
const buildMarkoGlobal = require('@endeavorb2b/base-website-common/utils/build-marko-global');
const { notificationBuilder, confirmationBuilder } = require('../template-builders');
const storeInquiry = require('../utils/store-inquiry');

module.exports = ({ queryFragment, notification, confirmation }) => asyncRoute(async (req, res) => {
  const { site } = res.app.locals;
  const {
    sendBcc: bcc,
    sendFrom: from,
    sendTo: to,
    directSend,
  } = site.getAsObject('inquiry');
  const $global = buildMarkoGlobal(res);
  const { apollo, body: payload } = req;
  const content = await contentLoader(apollo, { id: req.params.id, queryFragment });
  const contacts = getAsArray(content, 'inquiryContacts')
    .map(({ name, email }) => ({ name, email }))
    .filter(({ email }) => email);
  const addresses = {
    to: directSend && contacts.length ? contacts : to,
    cc: directSend && contacts.length ? to : undefined,
    bcc,
    from,
  };

  // Store the submission
  await storeInquiry({
    apollo,
    content,
    payload,
    addresses,
  });

  // Notify the contacts of the submission
  await send(notificationBuilder({
    template: notification,
    $global,
    content,
    payload,
    addresses,
  }));

  // Notify the user their submission was received
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
