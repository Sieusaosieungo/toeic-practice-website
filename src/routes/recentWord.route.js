const express = require('express');

const router = express.Router();
const asyncWrap = require('../middlewares/asyncWrap');
const auth = require('../middlewares/auth');
const {
  addRecentWord,
  getTenRecentWord,
  getAllRecentWordOfUser,
} = require('../controllers/recentWord.controller');

router.post('/', auth, asyncWrap(addRecentWord));
router.get('/ten-words', auth, asyncWrap(getTenRecentWord));
router.get('/', auth, asyncWrap(getAllRecentWordOfUser));

module.exports = router;
