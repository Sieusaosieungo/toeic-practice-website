const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const testQuestionsSchema = new mongoose.Schema({
  questions: [
    {
      question: {
        type: ObjectId,
        ref: 'Question',
      },
      userAnswer: [
        {
          idSubQuestion: {
            type: String,
            trim: true,
          },
          answer: {
            type: String,
            trim: true,
            lowercase: true,
          },
        },
      ],
    },
  ],
});

const testQuestionModel = mongoose.model('TestQuestion', testQuestionsSchema);

module.exports = testQuestionModel;
