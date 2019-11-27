const NewWord = require('../models/newword.model');

const addNewWordDb = async word => {
  const newWord = new NewWord({
    ...word,
  });

  const data = await newWord.save();
  return data;
};

module.exports = {
  addNewWordDb,
};
