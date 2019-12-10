const TestQuestions = require('../models/testQuestions.model');
const Test = require('../models/test.model');
const Question = require('../models/question.model');
const { numberQuestions } = require('../configs/config');

const randomTestDb = async (user, query) => {
  let { level } = query;
  level = Number.parseInt(level, 10);

  const idUser = user.id;
  const testQuestions = new TestQuestions();
  const test = new Test({
    idUser,
    idTestQuestions: testQuestions.id,
  });

  // ramdom part 1
  const ranQuestionsP1 = await Question.aggregate([
    { $match: { part: 1, level } },
    { $sample: { size: numberQuestions.NQPart1 } },
  ]);
  ranQuestionsP1.forEach(question => {
    testQuestions.questions.push({
      question: question._id,
    });
  });

  // ramdom part 2
  const ranQuestionsP2 = await Question.aggregate([
    { $match: { part: 2, level } },
    { $sample: { size: numberQuestions.NQPart2 } },
  ]);
  ranQuestionsP2.forEach(question => {
    testQuestions.questions.push({
      question: question._id,
    });
  });

  // ramdom part 3
  const ranQuestionsP3 = await Question.aggregate([
    { $match: { part: 3, level } },
    { $sample: { size: numberQuestions.NQPart3 } },
  ]);
  ranQuestionsP3.forEach(question => {
    testQuestions.questions.push({
      question: question._id,
    });
  });

  // ramdom part 4
  const ranQuestionsP4 = await Question.aggregate([
    { $match: { part: 4, level } },
    { $sample: { size: numberQuestions.NQPart4 } },
  ]);
  ranQuestionsP4.forEach(question => {
    testQuestions.questions.push({
      question: question._id,
    });
  });

  // ramdom part 5
  const ranQuestionsP5 = await Question.aggregate([
    { $match: { part: 5, level } },
    { $sample: { size: numberQuestions.NQPart5 } },
  ]);
  ranQuestionsP5.forEach(question => {
    testQuestions.questions.push({
      question: question._id,
    });
  });

  // ramdom part 6
  const ranQuestionsP6 = await Question.aggregate([
    { $match: { part: 6, level } },
    { $sample: { size: numberQuestions.NQPart6 } },
  ]);
  ranQuestionsP6.forEach(question => {
    testQuestions.questions.push({
      question: question._id,
    });
  });

  // ramdom part 7
  const ranQuestionsP7 = await Question.aggregate([
    { $match: { part: 7, level } },
    { $sample: { size: numberQuestions.NQPart7 } },
  ]);
  ranQuestionsP7.forEach(question => {
    testQuestions.questions.push({
      question: question._id,
    });
  });

  await testQuestions.save();
  test.save();

  return {
    test,
    questions: {
      part1: ranQuestionsP1,
      part2: ranQuestionsP2,
      part3: ranQuestionsP3,
      part4: ranQuestionsP4,
      part5: ranQuestionsP5,
      part6: ranQuestionsP6,
      part7: ranQuestionsP7,
    },
  };
};

module.exports = {
  randomTestDb,
};
