// const validator = require('validator');

const testService = require('../services/test.service');

const randomTest = async (req, res) => {
  const { user } = req;
  const rs = await testService.randomTest(user);

  res.send(rs);
};

module.exports = {
  randomTest,
};
