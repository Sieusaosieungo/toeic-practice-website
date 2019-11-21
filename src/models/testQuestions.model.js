const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const testQuestionsSchema = new mongoose.Schema({
  questions: [
    {
      question: {
        type: ObjectId,
        ref: 'Question',
      },
      userAnswer: {
        type: String,
      },
    },
  ],
});

const testQuestionModel = mongoose.model('TestQuestion', testQuestionsSchema);

module.exports = testQuestionModel;
