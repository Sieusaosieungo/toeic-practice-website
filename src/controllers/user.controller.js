const validator = require('validator');
const userService = require('../services/user.service');

async function signup(req, res) {
  const { email } = req.body;

  if (!validator.isEmail(email)) {
    throw new Error('Email không hợp lệ');
  }

  const { user, token } = await userService.signup(req.body);

  res.send({
    status: 1,
    results: {
      user,
      token,
    },
  });
}

async function login(req, res) {
  const { email, password } = req.body;

  const { user, token } = await userService.login(email, password);

  res.send({
    status: 1,
    results: {
      user,
      token,
    },
  });
}

async function logout(req, res) {
  await userService.logout(req.user, req.token);
  res.send({ status: 1 });
}

async function logoutAllDevice(req, res) {
  await userService.logoutAllDevice(req.user);
  res.send({ status: 1 });
}

async function getInfoUser(req, res) {
  res.send({
    status: 1,
    results: {
      user: req.user,
    },
  });
}

async function updateInfoUser(req, res) {
  const infoUpdates = req.body;
  const user = await userService.updateInfoUser(req.user, infoUpdates);

  res.send({
    status: 1,
    results: {
      user,
    },
  });
}

module.exports = {
  signup,
  login,
  logout,
  logoutAllDevice,
  getInfoUser,
  updateInfoUser,
};
