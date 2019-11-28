const mongoose = require('mongoose');
const { questionLevel } = require('../configs/config');

const questionSchema = new mongoose.Schema({
  image: {
    type: String,
    trim: true,
  },
  audio: {
    type: String,
    trim: true,
  },
  scripts: {
    type: String,
  },
  paragraph: {
    type: String,
  },
  level: {
    type: Number,
    default: questionLevel.ELEMENTARY,
  },
  subQuestions: [
    {
      question: {
        type: String,
      },
      A: {
        type: String,
      },
      B: {
        type: String,
      },
      C: {
        type: String,
      },
      D: {
        type: String,
      },
      answer: {
        type: String,
        lowercase: true,
      },
      tips: {
        type: String,
      },
    },
  ],
  part: {
    type: Number,
    required: true,
  },
});

const questionModel = mongoose.model('Question', questionSchema);

module.exports = questionModel;
