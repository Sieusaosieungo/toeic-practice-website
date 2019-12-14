const express = require('express');

const router = express.Router();
const asyncWrap = require('../middlewares/asyncWrap');
const {
  randomTest,
  submitResultPart,
  getTestById,
} = require('../controllers/test.controller');
const auth = require('../middlewares/auth');

router.get('/', auth, asyncWrap(randomTest));
router.get('/id', asyncWrap(getTestById));
router.post('/results/part', auth, asyncWrap(submitResultPart));

module.exports = router;
