const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const testSchema = new mongoose.Schema({
  level: {
    type: String
  },
  dateCreated: {
    type: Date,
    default: Date.now()
  },
  idUser: {
    type: ObjectId,
    ref: 'User'
  },
  overallPoint: {
    type: Number
  },
  partResults: [
    {
      idPart: {
        type: ObjectId,
        ref: 'Part'
      },
      partPoint: {
        type: Number
      }
    }
  ],
  grammarResults: [
    {
      idGrammer: {
        type: ObjectId,
        ref: 'Grammar'
      }
    }
  ],
  idTestQuestions: {
    type: ObjectId,
    ref: 'TestQuestions'
  },
  idUser: {
    type: ObjectId,
    ref: 'User'
  }
});

const TestModel = mongoose.model('Test', testSchema);

module.exports = TestModel;