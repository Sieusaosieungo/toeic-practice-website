const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const newWordSchema = new mongoose.Schema({
  newWord: {
    type: String,
    required: true,
  },
  meaning: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  example: {
    type: String,
  },
  idNewWordTopic: {
    type: ObjectId,
    ref: 'NewWordTopic',
  },
});

const newWordModel = mongoose.model('NewWord', newWordSchema);

module.exports = newWordModel;
