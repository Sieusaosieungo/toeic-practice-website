const mongoose = require('mongoose');

const subQuestionSchema = new mongoose.Schema({
  question: {
    type: String
  },
  A: {
    type: String
  },
  B: {
    type: String
  },
  C: {
    type: String
  },
  D: {
    type: String
  },
  answer: {
    type: String
  },
  tips: {
    type: String
  }
});

const subQuestionModel = mongoose.model('SubQuestion', subQuestionSchema);

module.exports = subQuestionModel;