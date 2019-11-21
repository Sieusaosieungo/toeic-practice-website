const NewWordTopic = require('../models/newWordTopic.model');
const { pagination } = require('../configs/config');

const getAllNewWordTopicsDb = async query => {
  let { page, records } = query;
  if (page === null) {
    page = pagination.pageNumber;
  }
  if (records === null) {
    records = pagination.recordNumber;
  }
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

const addNewWordTopicDb = async topic => {
  const newWordTopic = new NewWordTopic({
    title: topic.title,
    image: topic.image,
  });

  await newWordTopic.save();
};

module.exports = {
  getAllNewWordTopicsDb,
  addNewWordTopicDb,
};
