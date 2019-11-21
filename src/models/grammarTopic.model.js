const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const grammarSchema = new mongoose.Schema({
  title: {
    type: String
  }
});

const grammarModel = mongoose.model('GrammarTopic', grammarSchema);

module.exports = grammarModel;