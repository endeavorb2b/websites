const queryFragment = require('@endeavorb2b/base-website-themes/default/api/fragments/content-page');
const { withContent } = require('@base-cms/marko-web/middleware');
const whitepaper = require('@endeavorb2b/base-website-themes/default/templates/whitepaper');
const content = require('../templates/content');

module.exports = (app) => {
  app.get('/*?whitepaper/:id(\\d{8})*', withContent({
    template: whitepaper,
    queryFragment,
  }));
  app.get('/:prefix(*):id(\\d{8}):suffix(*)', withContent({
    template: content,
    queryFragment,
  }));
};
