const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const exerciseSchema = new mongoose.Schema({
  level: {
    type: Number
  },
  idQuestion: {
    type: ObjectId,
    ref: 'SubQuestion'
  }
});

const exerciseModel = mongoose.model('Exercise', exerciseSchema);

module.exports = exerciseModel;