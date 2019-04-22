const { withLoadMore } = require('@base-cms/marko-web/middleware');
const contentLoadMore = require('@endeavorb2b/base-website-common/components/content/blocks/query-load-more');
const publishedLoadMore = require('@endeavorb2b/base-website-themes/pennwell/components/published-content/query-load-more');

// Register blocks that support load more...
const blocks = {
  'content-query-load-more': contentLoadMore,
  'published-content-query-load-more': publishedLoadMore,
};

module.exports = (app) => {
  app.get('/load-more/:blockName', withLoadMore({
    blocks,
  }));
};
