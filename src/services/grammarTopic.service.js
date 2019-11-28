const {
  getAllGrammarTopicDb,
  addGrammarTopicDb,
} = require('../db/grammarTopic.db');

async function getAllGrammarTopics(query) {
  const { totalRecords, topics } = await getAllGrammarTopicDb(query);

  return {
    totalRecords,
    topics,
  };
}

async function addGrammarTopic(title) {
  const newTopic = await addGrammarTopicDb(title);
  return newTopic;
}

module.exports = {
  getAllGrammarTopics,
  addGrammarTopic,
};
