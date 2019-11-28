const express = require('express');

const router = express.Router();
const asyncWrap = require('../middlewares/asyncWrap');

const {
  addGrammar,
  getGrammarByTopic,
} = require('../controllers/grammar.controller');

router.post('/', asyncWrap(addGrammar));
router.get('/', asyncWrap(getGrammarByTopic));

module.exports = router;
