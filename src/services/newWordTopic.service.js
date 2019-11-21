const { getAllNewWordTopicsDb } = require('../db/newWordTopic.db');

const getAllNewWordTopics = async (page, records) => {
  const { totalRecords, topics } = getAllNewWordTopicsDb(page, records);

  return {
    totalRecords,
    topics,
  };
};

module.exports = {
  getAllNewWordTopics,
};
