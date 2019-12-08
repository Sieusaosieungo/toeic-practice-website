const express = require('express');

const router = express.Router();
const asyncWrap = require('../middlewares/asyncWrap');
const { randomTest } = require('../controllers/test.controller');
const auth = require('../middlewares/auth');

router.get('/', auth, asyncWrap(randomTest));

module.exports = router;
