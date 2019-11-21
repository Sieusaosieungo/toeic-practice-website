const mongoose = require('mongoose');

const newWordTopicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

const newWordTopicModel = mongoose.model('NewWordTopic', newWordTopicSchema);

module.exports = newWordTopicModel;
