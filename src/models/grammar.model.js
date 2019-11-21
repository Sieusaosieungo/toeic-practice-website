const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const grammarSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  idGrammarTopic: {
    type: ObjectId,
    ref: 'GrammarTopic',
  },
});

const grammarModel = mongoose.model('Grammar', grammarSchema);

module.exports = grammarModel;
