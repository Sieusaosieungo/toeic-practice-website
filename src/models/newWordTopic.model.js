const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const newWordTopicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String
  }
});

const newWordTopicModel = mongoose.model('NewWordTopic', newWordTopicSchema);

module.exports = newWordTopicModel;