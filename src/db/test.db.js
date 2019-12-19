const TestQuestions = require('../models/testQuestions.model');
const Test = require('../models/test.model');
const Question = require('../models/question.model');
const { numberQuestions, numSubQuestions } = require('../configs/config');
const CustomError = require('../errors/CustomError');
const errorCode = require('../errors/errorCode');

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
  // const ranQuestionsP1 = await Question.aggregate([
  //   { $match: { part: 1, level } },
  //   { $sample: { size: numberQuestions.NQPart1 } },
  // ]);
  const ranQuestionsP1 = await Question.aggregate([
    { $match: { part: 1, level } },
    {
      $match: {
        $expr: {
          $eq: [{ $size: '$subQuestions' }, numSubQuestions.numSubQP1],
        },
      },
    },
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
    {
      $match: {
        $expr: {
          $eq: [{ $size: '$subQuestions' }, numSubQuestions.numSubQP2],
        },
      },
    },
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
    {
      $match: {
        $expr: {
          $eq: [{ $size: '$subQuestions' }, numSubQuestions.numSubQP3],
        },
      },
    },
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
    {
      $match: {
        $expr: {
          $eq: [{ $size: '$subQuestions' }, numSubQuestions.numSubQP4],
        },
      },
    },
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
    {
      $match: {
        $expr: {
          $eq: [{ $size: '$subQuestions' }, numSubQuestions.numSubQP5],
        },
      },
    },
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
    {
      $match: {
        $expr: {
          $eq: [{ $size: '$subQuestions' }, numSubQuestions.numSubQP6],
        },
      },
    },
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
    {
      $match: {
        $expr: {
          $eq: [{ $size: '$subQuestions' }, numSubQuestions.numSubQP7],
        },
      },
    },
    { $sample: { size: numberQuestions.NQPart7 } },
  ]);
  ranQuestionsP7.forEach(question => {
    testQuestions.questions.push({
      question: question._id,
    });
  });
  testQuestions.userAnswer = [];

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

const submitResultPartDb = async body => {
  const { idTest, part, results } = body;

  const test = await Test.findById(idTest);
  // console.log(test);
  if (!test) {
    throw new CustomError(
      errorCode.BAD_REQUEST,
      `Không thể tìm thấy bài test có id: ${idTest}`,
    );
  }

  const { idTestQuestions } = test;
  const testQuestions = await TestQuestions.findById(idTestQuestions);
  let numberRightAnswer = 0;
  await Promise.all(
    testQuestions.questions.map(async question => {
      await Promise.all(
        results.map(async result => {
          if (result.idQuestion === question.question.toString()) {
            const q = await Question.findById(question.question.toString());
            question.userAnswer = result.userAnswer;
            q.subQuestions.forEach((subQ, idx) => {
              if (subQ.answer === result.userAnswer[idx].answer) {
                numberRightAnswer += 1;
              }
            });
          }
        }),
      );
      return 0;
    }),
  );

  let check = 0;
  for (let i = 0; i < test.partResults.length; i += 1) {
    if (test.partResults[i].part === part) {
      check = 1;
      test.partResults[i].partPoint = numberRightAnswer;
      break;
    }
  }

  if (check === 0) {
    test.partResults.push({
      part,
      partPoint: numberRightAnswer,
    });
  }

  const rs = await test.save();
  await testQuestions.save();
  return rs;
};

const getTestByIdDb = async query => {
  const { id } = query;

  const test = await Test.findById(id);
  if (!test) {
    throw new CustomError(
      errorCode.BAD_REQUEST,
      `Không thể tìm thấy bài test có id: ${id}`,
    );
  }

  const { idTestQuestions } = test;
  const testQuestions = await TestQuestions.findById(idTestQuestions);
  const part1 = [];
  const part2 = [];
  const part3 = [];
  const part4 = [];
  const part5 = [];
  const part6 = [];
  const part7 = [];

  await Promise.all(
    testQuestions.questions.map(async question => {
      const q = await Question.findById(question.question);
      switch (q.part) {
        case 1:
          part1.push({
            question: q,
            userAnswer: question.userAnswer,
          });
          break;
        case 2:
          part2.push({
            question: q,
            userAnswer: question.userAnswer,
          });
          break;
        case 3:
          part3.push({
            question: q,
            userAnswer: question.userAnswer,
          });
          break;
        case 4:
          part4.push({
            question: q,
            userAnswer: question.userAnswer,
          });
          break;
        case 5:
          part5.push({
            question: q,
            userAnswer: question.userAnswer,
          });
          break;
        case 6:
          part6.push({
            question: q,
            userAnswer: question.userAnswer,
          });
          break;
        case 7:
          part7.push({
            question: q,
            userAnswer: question.userAnswer,
          });
          break;
        default:
          break;
      }
    }),
  );

  const data = {
    test,
    questions: {
      part1,
      part2,
      part3,
      part4,
      part5,
      part6,
      part7,
    },
  };

  return data;
};

const finishTestDbV1 = async body => {
  const { id } = body;

  const test = await Test.findById(id);
  if (!test) {
    throw new CustomError(
      errorCode.BAD_REQUEST,
      `Không thể tìm thấy bài test có id: ${id}`,
    );
  }

  test.checked = true;
  const result = await test.save();
  return result;
};

module.exports = {
  randomTestDb,
  submitResultPartDb,
  getTestByIdDb,
  finishTestDbV1,
};
