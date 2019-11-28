const GrammarTopic = require('../models/grammarTopic.model');
const { pagination } = require('../configs/config');
const CustomError = require('../errors/CustomError');
const errorCode = require('../errors/errorCode');

async function getAllGrammarTopicDb(query) {
  let { page, records } = query;

  if (page === null) {
    page = pagination.pageNumber;
  }
  if (records === null) {
    records = pagination.recordNumber;
  }
  page = Number.parseInt(page, 10);
  records = Number.parseInt(records, 10);

  const totalRecords = await GrammarTopic.countDocuments();

  const topics = await GrammarTopic.find({})
    .skip((page - 1) * records)
    .limit(records);

  return {
    totalRecords,
    topics,
  };
}

async function addGrammarTopicDb(title) {
  const checkExistTitle = await GrammarTopic.findOne({ title });
  if (checkExistTitle) {
    throw new CustomError(errorCode.BAD_REQUEST, 'Topic đã tồn tại');
  }

  const newTopic = await GrammarTopic.create({ title });
  return newTopic;
}

module.exports = {
  getAllGrammarTopicDb,
  addGrammarTopicDb,
};
