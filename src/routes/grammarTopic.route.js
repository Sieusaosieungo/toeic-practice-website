const express = require('express');

const router = express.Router();
const asyncWrap = require('../middlewares/asyncWrap');
const {
  getAllTopics,
  addGrammarTopic,
} = require('../controllers/grammarTopic.controller');

router.get('/', asyncWrap(getAllTopics));
router.post('/', asyncWrap(addGrammarTopic));

module.exports = router;
