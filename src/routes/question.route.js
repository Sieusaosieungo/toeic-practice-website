const express = require('express');

const router = express.Router();
const asyncWrap = require('../middlewares/asyncWrap');
const {
  addBasicQuestionInfo,
  addSubQuestions,
} = require('../controllers/question.controller');

// Add basic question's info: image, audio, scripts, level, paragraph
router.post('/basic-info', asyncWrap(addBasicQuestionInfo));
// Add subQuestion after added basic question
router.post('/sub-questions', asyncWrap(addSubQuestions));
router.post('/random', asyncWrap(addSubQuestions));

module.exports = router;
