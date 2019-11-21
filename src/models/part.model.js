const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const partSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  numberQuestion: {
    type: Number,
    required: true
  },
  tips: {
    type: String
  }
});

const partModel = mongoose.model('Part', partSchema);

module.exports = partModel;