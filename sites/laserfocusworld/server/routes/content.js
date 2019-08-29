const queryFragment = require('@endeavorb2b/base-website-themes/default/api/fragments/content-page');
const { withContent } = require('@base-cms/marko-web/middleware');
const whitepaper = require('../templates/content/whitepaper');
const content = require('../templates/content');

module.exports = (app) => {
  app.get('/*?whitepaper/:id(\\d{8})*', withContent({
    template: whitepaper,
    queryFragment,
  }));
  app.get('/*?:id(\\d{8})*', withContent({
    template: content,
    queryFragment,
  }));
};
