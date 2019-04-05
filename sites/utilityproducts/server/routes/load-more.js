const { withLoadMore } = require('@base-cms/marko-web/middleware');
const contentLoadMoreA = require('@endeavorb2b/base-website-common/components/content/blocks/query-load-more-a');

// Register blocks that support load more...
const blocks = {
  'content-query-load-more-a': contentLoadMoreA,
};

module.exports = (app) => {
  app.get('/load-more/:blockName', withLoadMore({
    blocks,
  }));
};
