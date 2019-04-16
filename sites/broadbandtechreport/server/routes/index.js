const contentTypes = require('./content');
const dynamicPages = require('./dynamic-page');
const home = require('./home');
const loadMore = require('./load-more');
const search = require('./search');
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
  search(app);

  // Website Sections
  websiteSections(app);
};
