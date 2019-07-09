const { Router } = require('express');
const { json } = require('body-parser');
const jsonErrorHandler = require('@endeavorb2b/base-website-routing-utils/json-error-handler');
const { withContent } = require('@base-cms/marko-web/middleware');
const bodyParser = require('body-parser');
const handler = require('./handler');

module.exports = ({
  emailTemplate,
  queryFragment,
  submissionTemplate,
  template,
}) => {
  const router = Router();
  // View/form route
  router.get('/:id(\\d{8})', withContent({ template, queryFragment, redirectOnPathMismatch: false }));
  // Form submission
  router.use(json());
  router.post('/:id(\\d{8})', bodyParser.json(), handler({ emailTemplate, queryFragment, submissionTemplate }));
  router.use(jsonErrorHandler());
  return router;
};
