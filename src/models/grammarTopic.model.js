const mongoose = require('mongoose');

const grammarSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

const grammarModel = mongoose.model('GrammarTopic', grammarSchema);

module.exports = grammarModel;
