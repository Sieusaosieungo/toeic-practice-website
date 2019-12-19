const express = require('express');

const router = express.Router();
const asyncWrap = require('../middlewares/asyncWrap');
const {
  randomTest,
  submitResultPart,
  getTestById,
  finishTestV1,
  finishTestV2,
} = require('../controllers/test.controller');
const auth = require('../middlewares/auth');

router.get('/', auth, asyncWrap(randomTest));
router.get('/id', asyncWrap(getTestById));
router.post('/results/part', auth, asyncWrap(submitResultPart));
router.post('/finished/v1', auth, asyncWrap(finishTestV1));
router.post('/finished/v2', auth, asyncWrap(finishTestV2));

module.exports = router;
