const express = require('express');

const router = express.Router();
const asyncWrap = require('../middlewares/asyncWrap');
const {
  randomTest,
  submitResultPart,
  getTestById,
  finishTestV1,
} = require('../controllers/test.controller');
const auth = require('../middlewares/auth');

router.get('/', auth, asyncWrap(randomTest));
router.get('/id', asyncWrap(getTestById));
router.post('/results/part', auth, asyncWrap(submitResultPart));
router.post('/finished/v1', auth, asyncWrap(finishTestV1));

module.exports = router;
