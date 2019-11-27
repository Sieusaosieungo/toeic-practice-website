const express = require('express');

const router = express.Router();
const asyncWrap = require('../middlewares/asyncWrap');
const {
  addNewWord,
  getAllNewWordsInTopic,
} = require('../controllers/newWord.controller');

router.post('/', asyncWrap(addNewWord));
router.get('/', asyncWrap(getAllNewWordsInTopic));

module.exports = router;
