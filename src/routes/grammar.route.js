const express = require('express');

const router = express.Router();
const asyncWrap = require('../middlewares/asyncWrap');
const authAdmin = require('../middlewares/authAdmin');

const {
  addGrammar,
  getGrammarByTopic,
} = require('../controllers/grammar.controller');

router.post('/', authAdmin, asyncWrap(addGrammar));
router.get('/', asyncWrap(getGrammarByTopic));

module.exports = router;
