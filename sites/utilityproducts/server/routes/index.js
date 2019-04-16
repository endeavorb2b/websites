const search = require('@endeavorb2b/base-website-themes/pennwell/templates/search');
const contentTypes = require('./content');
const dynamicPages = require('./dynamic-page');
const home = require('./home');
const loadMore = require('./load-more');
const websiteSections = require('./website-section');

module.exports = (app) => {
  // Homepage
  home(app);

  // Load More / Infinite Scroll
  loadMore(app);

  // Dynamic Pages
  dynamicPages(app);

  // Content Types
  contentTypes(app);

  // Search
  app.get('/search', (_, res) => { res.marko(search); });

  // Website Sections
  websiteSections(app);
};
