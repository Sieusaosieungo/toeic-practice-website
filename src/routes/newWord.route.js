const express = require('express');

const router = express.Router();
const asyncWrap = require('../middlewares/asyncWrap');
const { addNewWord } = require('../controllers/newWord.controller');

router.post('/', asyncWrap(addNewWord));

module.exports = router;
