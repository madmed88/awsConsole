const express = require('express');
const router = express.Router();

const ctrlAuth = require('./user.controller');

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
