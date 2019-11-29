const mongoose = require('mongoose');
const { questionLevel } = require('../configs/config');

const { ObjectId } = mongoose.Schema.Types;

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
  part: {
    type: Number,
    required: true,
  },
  subQuestions: [
    {
      idGrammarTopic: {
        type: ObjectId,
        ref: 'GrammarTopic',
      },
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
});

const questionModel = mongoose.model('Question', questionSchema);

module.exports = questionModel;
