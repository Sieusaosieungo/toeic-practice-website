const Part = require('../models/part.model');

const addPartDb = async body => {
  const newPart = new Part({
    ...body,
  });

  const data = await newPart.save();
  return data;
};

module.exports = {
  addPartDb,
};
