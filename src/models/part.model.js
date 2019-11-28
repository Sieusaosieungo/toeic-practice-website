const mongoose = require('mongoose');

const partSchema = new mongoose.Schema({
  partNumber: {
    type: Number,
    required: true,
  },
  numberQuestion: {
    type: Number,
    required: true,
  },
  tips: {
    type: String,
  },
});

const partModel = mongoose.model('Part', partSchema);

module.exports = partModel;
