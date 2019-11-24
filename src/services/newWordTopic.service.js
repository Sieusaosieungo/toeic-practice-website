const uploadImage = require('../utils/uploadImage');
const {
  getAllNewWordTopicsDb,
  addNewWordTopicDb,
} = require('../db/newWordTopic.db');

const getAllNewWordTopics = async query => {
  const { totalRecords, topics } = await getAllNewWordTopicsDb(query);

  return {
    totalRecords,
    topics,
  };
};

const addNewWordTopic = async (body, files) => {
  const { title } = body;
  const { image } = files;

  const imageLink = await uploadImage(image, '/images/topics');

  const topic = {
    title,
    image: imageLink,
  };

  await addNewWordTopicDb(topic);
};

module.exports = {
  getAllNewWordTopics,
  addNewWordTopic,
};
