const express = require('express');

const router = express.Router();
const asyncWrap = require('../middlewares/asyncWrap');
const {
  randomTest,
  submitResultPart,
} = require('../controllers/test.controller');
const auth = require('../middlewares/auth');

router.get('/', auth, asyncWrap(randomTest));
router.post('/results/part', auth, asyncWrap(submitResultPart));

module.exports = router;
