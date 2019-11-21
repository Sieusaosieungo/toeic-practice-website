const newWordTopicService = require('../services/newWordTopic.service');

const getAllTopics = async (req, res) => {
  const { query } = req;

  const {
    totalRecords,
    topics,
  } = await newWordTopicService.getAllNewWordTopics(query);

  res.send({
    status: 1,
    results: {
      totalRecords,
      topics,
    },
  });
};

const addNewWordTopic = async (req, res) => {
  const { title } = req.body;
  const { image } = req.files;

  newWordTopicService.addNewWordTopic(title, image);

  res.send({
    status: 1,
  });
};

module.exports = {
  getAllTopics,
  addNewWordTopic,
};
