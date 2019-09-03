const loadInquiry = require('@endeavorb2b/base-website-inquiry/load-from-config');
const contentTypes = require('./content');
const dynamicPages = require('./dynamic-page');
const home = require('./home');
const magazine = require('./magazine');
const loadMore = require('./load-more');
const publishedContent = require('./published-content');
const search = require('./search');
const websiteSections = require('./website-section');

module.exports = (app) => {
  // Load Inquiry routing
  loadInquiry(app);

  // Homepage
  home(app);

  // Load More / Infinite Scroll
  loadMore(app);

  // Magazine Pages
  magazine(app);

  // Dynamic Pages
  dynamicPages(app);

  // Content Types
  contentTypes(app);

  // Published content pages
  publishedContent(app);

  // Search
  search(app);

  // Website Sections
  websiteSections(app);
};
