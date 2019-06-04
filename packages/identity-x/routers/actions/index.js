const { Router } = require('express');
const { json } = require('body-parser');
const cookieParser = require('cookie-parser');
const authenticate = require('./authenticate');
const login = require('./login');
const logout = require('./logout');
const jsonErrorHandler = require('../json-error-handler');

const router = Router();

router.use(json());
router.use(cookieParser());
router.post('/authenticate', authenticate);
router.post('/login', login);
router.post('/logout', logout);
router.use(jsonErrorHandler());

module.exports = router;
