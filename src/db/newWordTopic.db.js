const NewWordTopic = require('../models/newWordTopic.model');
const { pagination } = require('../configs/config');

const getAllNewWordTopicsDb = async (
  page = pagination.pageNumber,
  records = pagination.recordNumber,
) => {
  page = Number.parseInt(page, 10);
  records = Number.parseInt(records, 10);

  const totalRecords = await NewWordTopic.countDocuments();

  const topics = await NewWordTopic.find({})
    .skip((page - 1) * records)
    .limit(records);

  return {
    totalRecords,
    topics,
  };
};

module.exports = {
  getAllNewWordTopicsDb,
};
