const mongoose = require('mongoose');

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
  },
  subQuestions: [
    {
      type: ObjectId,
      ref: 'SubQuestion',
    },
  ],
  part: {
    partNumber: {
      type: Number,
    },
    idPart: {
      type: ObjectId,
      ref: 'Part',
    },
  },
});

const questionModel = mongoose.model('Question', questionSchema);

module.exports = questionModel;
