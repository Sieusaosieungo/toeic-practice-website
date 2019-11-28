const Question = require('../models/question.model');

const getQuestionById = async id => {
  const question = Question.findById(id);
  return question;
};

const addBasicQuestionInfoDb = async question => {
  const newQuestion = new Question({
    ...question,
  });

  const data = await newQuestion.save();
  return data;
};

const addSubQuestionsDb = async body => {
  const { idQuestion, subQuestions } = body;

  const foundQuestion = await getQuestionById(idQuestion);

  if (!foundQuestion) {
    return null;
  }

  foundQuestion.subQuestions = foundQuestion.subQuestions.concat(subQuestions);
  const rs = await foundQuestion.save();
  return rs;
};

module.exports = {
  addBasicQuestionInfoDb,
  addSubQuestionsDb,
};
