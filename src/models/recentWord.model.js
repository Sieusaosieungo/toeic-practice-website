const mongoose = require('mongoose');

const recentWordSchema = new mongoose.Schema({
  newWord: {
    type: String,
    required: true,
  },
  meaning: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
});

const recentWordModel = mongoose.model('RecentWord', recentWordSchema);

module.exports = recentWordModel;
