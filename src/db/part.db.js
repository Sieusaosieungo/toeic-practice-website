const Part = require('../models/part.model');

const addPartDb = async body => {
  const newPart = new Part({
    ...body,
  });

  const data = await newPart.save();
  return data;
};

const getAllPartsDb = async () => {
  const parts = await Part.find({});
  return parts;
};

module.exports = {
  addPartDb,
  getAllPartsDb,
};
