const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const testSchema = new mongoose.Schema({
  level: {
    type: String,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  idUser: {
    type: ObjectId,
    ref: 'User',
  },
  overallPoint: {
    type: Number,
  },
  partResults: [
    {
      part: {
        type: Number,
        required: true,
      },
      partPoint: {
        type: Number,
      },
    },
  ],
  // Check if test finished
  checked: {
    type: Boolean,
    default: false,
  },
  grammarResults: [
    {
      idGrammarTopic: {
        type: ObjectId,
        ref: 'GrammarTopic',
      },
      totalQuestionsInTopic: {
        type: Number,
      },
      result: {
        type: Number,
      },
    },
  ],
  idTestQuestions: {
    type: ObjectId,
    ref: 'TestQuestions',
  },
});

const TestModel = mongoose.model('Test', testSchema);

module.exports = TestModel;
