const { withLoadMore } = require('@base-cms/marko-web/middleware');
const contentLoadMore = require('@endeavorb2b/base-website-common/components/content/blocks/query-load-more');
const contentLoadMoreAuthor = require('@endeavorb2b/base-website-common/components/content/blocks/query-load-more-author');
const contentLoadMoreCompany = require('@endeavorb2b/base-website-common/components/content/blocks/query-load-more-company');
const contentLoadMoreList = require('@endeavorb2b/base-website-common/components/content/blocks/query-load-more-list');
const publishedLoadMore = require('@endeavorb2b/base-website-common/components/published-content/query-load-more');
const magazineIssueContent = require('@endeavorb2b/base-website-common/components/content/blocks/query-load-more-issue-content');
const magazineIssues = require('@endeavorb2b/base-website-common/components/magazine/blocks/query-active-issues');

// Register blocks that support load more...
const blocks = {
  'content-query-load-more': contentLoadMore,
  'content-query-load-more-author': contentLoadMoreAuthor,
  'content-query-load-more-company': contentLoadMoreCompany,
  'content-query-load-more-list': contentLoadMoreList,
  'published-content-query-load-more': publishedLoadMore,
  'magazine-query-issue-content': magazineIssueContent,
  'magazine-active-issues': magazineIssues,
};

module.exports = (app) => {
  app.get('/load-more/:blockName', withLoadMore({
    blocks,
  }));
};
