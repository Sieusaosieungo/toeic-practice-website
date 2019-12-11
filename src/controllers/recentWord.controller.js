const recentWordService = require('../services/recentWord.service');

async function addRecentWord(req, res) {
  const { newWord, meaning } = req.body;
  await recentWordService.addRecentWord(newWord, meaning, req.user);

  res.send({
    status: 1,
    results: {
      user: req.user,
    }
  });
}

async function getTenRecentWord(req, res) {
  res.send({
    status: 1,
    results: {
      tenRecentWords: req.user.tenRecentWords,
    },
  });
}

async function getAllRecentWordOfUser(req, res) {
  const recentWordOfUser = await recentWordService.getAllRecentWordOfUser(
    req.user,
    req.query,
  );

  res.send({
    status: 1,
    results: {
      recentWordOfUser,
    },
  });
}

module.exports = {
  addRecentWord,
  getTenRecentWord,
  getAllRecentWordOfUser,
};
