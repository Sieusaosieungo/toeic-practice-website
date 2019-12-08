const TestQuestions = require('../models/testQuestions.model');
const Test = require('../models/test.model');
const Question = require('../models/question.model');

const randomTestDb = async idUser => {
  const testQuestions = new TestQuestions();
  const test = new Test({
    idUser,
    idTestQuestions: testQuestions.id,
  });

  const random = await Question.aggregate([
    { $match: { part: 1 } },
    { $sample: { size: 4 } },
  ]);

  console.log(random);

  // testQuestions.save();
  // const rs = test.save();
  // return rs;
};

module.exports = {
  randomTestDb,
};
