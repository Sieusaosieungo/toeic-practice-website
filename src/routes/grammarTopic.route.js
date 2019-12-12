const express = require('express');

const router = express.Router();
const asyncWrap = require('../middlewares/asyncWrap');
const authAdmin = require('../middlewares/authAdmin');

const {
  getAllTopics,
  addGrammarTopic,
} = require('../controllers/grammarTopic.controller');

router.get('/', authAdmin, asyncWrap(getAllTopics));
router.post('/', authAdmin, asyncWrap(addGrammarTopic));

module.exports = router;
