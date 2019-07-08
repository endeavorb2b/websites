const { Router } = require('express');
const { json } = require('body-parser');
const jsonErrorHandler = require('@endeavorb2b/base-website-routing-utils/json-error-handler');

const router = Router();

router.use(json());
router.use(jsonErrorHandler());

module.exports = router;
