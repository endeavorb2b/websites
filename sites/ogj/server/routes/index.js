const loadIdentityX = require('@endeavorb2b/base-website-identity-x/load-from-config');
const contentTypes = require('./content');
const dynamicPages = require('./dynamic-page');
const home = require('./home');
const magazine = require('./magazine');
const loadMore = require('./load-more');
const publishedContent = require('./published-content');
const search = require('./search');
const subscribe = require('./subscribe');
const user = require('./user');
const websiteSections = require('./website-section');

module.exports = (app) => {
  // Load IdentityX before all routes.
  loadIdentityX(app);

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

  // Subscription Pages
  subscribe(app);

  // User Pages
  user(app);

  // Website Sections
  websiteSections(app);
};
