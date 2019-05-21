const queryFragment = require('@endeavorb2b/base-website-themes/pennwell/api/fragments/content-page');
const { withContent } = require('@base-cms/marko-web/middleware');
const content = require('../templates/content');

module.exports = (app) => {
  app.get('/:prefix(*):id(\\d{8}):suffix(*)', withContent({
    template: content,
    queryFragment,
  }));
};
