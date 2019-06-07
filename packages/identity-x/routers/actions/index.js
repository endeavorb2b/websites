const { Router } = require('express');
const { json } = require('body-parser');
const authenticate = require('./authenticate');
const login = require('./login');
const logout = require('./logout');
const jsonErrorHandler = require('../json-error-handler');

const router = Router();

router.use(json());
router.post('/authenticate', authenticate);
router.post('/login', login);
router.post('/logout', logout);
router.use(jsonErrorHandler());

module.exports = router;
