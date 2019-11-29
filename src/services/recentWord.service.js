const RecentWord = require('../models/recentWord.model');
const { pagination } = require('../configs/config');

async function addRecentWord(newWord, meaning, user) {
  const recentWordOfUser = await RecentWord.find({ userId: user._id });
  const recentWordOfUserOnlyNewWord = recentWordOfUser.map(rw => rw.newWord);

  if (!recentWordOfUserOnlyNewWord.includes(newWord)) {
    await RecentWord.create({ newWord, meaning, userId: user._id });
    user.tenRecentWords.unshift({ newWord, meaning });
    if (user.tenRecentWords.length > 10) {
      user.tenRecentWords.splice(10, 1);
    }

    await user.save();
  }
}

async function getAllRecentWordOfUser(user, query) {
  let { page, records } = query;

  if (page === null) {
    page = pagination.pageNumber;
  }
  if (records === null) {
    records = pagination.recordNumber;
  }
  page = Number.parseInt(page, 10);
  records = Number.parseInt(records, 10);
  const totalRecords = await RecentWord.countDocuments({
    userId: user._id,
  });

  const recentNewWordOfUser = await RecentWord.find({ userId: user._id })
    .skip((page - 1) * records)
    .limit(records);

  return {
    totalRecords,
    recentNewWordOfUser,
  };
}

module.exports = { addRecentWord, getAllRecentWordOfUser };
