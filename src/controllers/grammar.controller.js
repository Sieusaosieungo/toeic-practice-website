const validator = require('validator');
const CustomError = require('../errors/CustomError');
const errorCode = require('../errors/errorCode');
const grammarService = require('../services/grammar.service');

async function addGrammar(req, res) {
  const { title, content, idGrammarTopic } = req.body;

  if (!idGrammarTopic) {
    throw new CustomError(errorCode.BAD_REQUEST, 'idGrammarTopic là bắt buộc');
  }
  if (!title) {
    throw new CustomError(
      errorCode.BAD_REQUEST,
      'Hãy thêm tiêu đề cho ngữ pháp',
    );
  }
  if (!content) {
    throw new CustomError(
      errorCode.BAD_REQUEST,
      'Hãy thêm nội dung cho ngữ pháp',
    );
  }

  const newGrammar = await grammarService.addGrammar(req.body);

  res.send({
    status: 1,
    results: {
      newGrammar,
    },
  });
}

async function getGrammarByTopic(req, res) {
  const { query } = req;
  const { idTopic, page, records } = query;

  if (!idTopic) {
    throw new CustomError(errorCode.BAD_REQUEST, 'idTopic là bắt buộc');
  }
  if (page) {
    if (!validator.isNumeric(page)) {
      throw new CustomError(errorCode.BAD_REQUEST, 'page phải là môt số');
    }
  }
  if (records) {
    if (!validator.isNumeric(records)) {
      throw new CustomError(errorCode.BAD_REQUEST, 'records phải là một số');
    }
  }

  const grammars = await grammarService.getGrammarByTopic(query);
  res.send({
    status: 1,
    results: {
      grammars,
    },
  });
}

module.exports = {
  addGrammar,
  getGrammarByTopic,
};
