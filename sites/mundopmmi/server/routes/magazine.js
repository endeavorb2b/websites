const { withMagazinePublication, withMagazineIssue } = require('@base-cms/marko-web/middleware');
const magazinePage = require('@endeavorb2b/base-website-themes/pennwell/api/fragments/magazine-page');
const magazineIssuePage = require('@endeavorb2b/base-website-themes/pennwell/api/fragments/magazine-issue-page');
const magazine = require('../templates/magazine');
const magazinePublication = require('../templates/magazine/publication');
const magazineIssue = require('../templates/magazine/issue');

module.exports = (app) => {
  app.get('/magazine', (req, res) => {
    res.marko(magazine);
  });

  app.get('/magazine/:id([a-fA-F0-9]{24})', withMagazinePublication({
    template: magazinePublication,
    queryFragment: magazinePage,
  }));

  app.get('/magazine/:id(\\d+)', withMagazineIssue({
    template: magazineIssue,
    queryFragment: magazineIssuePage,
  }));
};
