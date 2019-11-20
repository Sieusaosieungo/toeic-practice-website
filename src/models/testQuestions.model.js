const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const testQuestionsSchema = new mongoose.Schema({
  questions: [
    {
      question: {
        type: ObjectId,
        ref: 'Question'
      },
      userAnswer: {
        type: String
      }
    }
  ]
})