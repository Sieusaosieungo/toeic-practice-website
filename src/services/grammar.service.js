const Grammar = require('../models/grammar.model');
const GrammarTopic = require('../models/grammarTopic.model');
const CustomError = require('../errors/CustomError');
const errorCode = require('../errors/errorCode');
const { pagination } = require('../configs/config');

async function addGrammar(infoGrammar) {
  const { title, idGrammarTopic } = infoGrammar;

  const checkExistTitle = await Grammar.findOne({ title });
  if (checkExistTitle) {
    throw new CustomError(
      errorCode.CONFLICT,
      'Tiêu đề đã có! Vui lòng tạo tiêu đề khác',
    );
  }

  const checkValidIdGrammarTopic = await GrammarTopic.findById(idGrammarTopic);
  if (!checkValidIdGrammarTopic) {
    throw new CustomError(errorCode.BAD_REQUEST, 'Grammar topic không tồn tại');
  }

  const newGrammar = await Grammar.create(infoGrammar);
  return newGrammar;
}

async function getGrammarByTopic(query) {
  let { page, records } = query;
  const { idTopic } = query;
  if (page === null) {
    page = pagination.pageNumber;
  }
  if (records === null) {
    records = pagination.recordNumber;
  }
  page = Number.parseInt(page, 10);
  records = Number.parseInt(records, 10);
  const totalRecords = await Grammar.countDocuments({
    idGrammarTopic: idTopic,
  });

  const grammars = await Grammar.find({ idGrammarTopic: idTopic })
    .skip((page - 1) * records)
    .limit(records);

  return {
    totalRecords,
    grammars,
  };
}

module.exports = {
  addGrammar,
  getGrammarByTopic,
};
