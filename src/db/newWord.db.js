const NewWord = require('../models/newword.model');
const { pagination } = require('../configs/config');

const addNewWordDb = async word => {
  const newWord = new NewWord({
    ...word,
  });

  const data = await newWord.save();
  return data;
};

const getAllNewWordsInTopicDb = async query => {
  let { page, records } = query;
  const { idTopic } = query;
  if (page === null) {
    page = pagination.pageNumber;
  }
  if (records === null) {
    records = pagination.recordNumber;
  }
  page = Number.parseInt(page, 10);
  records = Number.parseInt(records, 10);
  const totalRecords = await NewWord.countDocuments({
    idNewWordTopic: idTopic,
  });

  const newWords = await NewWord.find({ idNewWordTopic: idTopic })
    .skip((page - 1) * records)
    .limit(records);

  return {
    totalRecords,
    newWords,
  };
};

module.exports = {
  addNewWordDb,
  getAllNewWordsInTopicDb,
};
