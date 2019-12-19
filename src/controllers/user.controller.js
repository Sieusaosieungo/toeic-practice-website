const validator = require('validator');
const userService = require('../services/user.service');
const CustomError = require('../errors/CustomError');
const errorCode = require('../errors/errorCode');

async function signup(req, res) {
  const { email, targetPoint } = req.body;

  if (!validator.isEmail(email)) {
    throw new Error('Email không hợp lệ');
  }
  if (!targetPoint) {
    throw new CustomError(
      errorCode.BAD_REQUEST,
      'Hãy thêm mục tiêu targetPoint',
    );
  }
  if (!validator.isNumeric(targetPoint.toString())) {
    throw new CustomError(
      errorCode.BAD_REQUEST,
      'Mục tiêu targetPoint phải là một số',
    );
  }
  if (
    targetPoint % 100 !== 0 ||
    Number.parseInt(targetPoint / 100, 10) > 9 ||
    Number.parseInt(targetPoint / 100, 10) < 1
  ) {
    throw new CustomError(
      errorCode.BAD_REQUEST,
      'Mục tiêu targetPoint phải là một số chia hết cho 100 và thuộc đoạn [100, 900]',
    );
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

async function uploadAvatar(req, res) {
  const { avatar } = req.files;
  if (!avatar.name.match(/\.(jpg|png|jpeg)$/)) {
    throw new CustomError(
      errorCode.BAD_REQUEST,
      'Làm ơn upload đúng định dạng ảnh',
    );
  }

  const userUpdated = await userService.uploadAvatar(req.user, avatar);

  res.send({
    status: 1,
    results: {
      user: userUpdated,
    },
  });
}

async function getAllUser(req, res) {
  const users = await userService.getAllUser();
  res.send({
    status: 1,
    results: {
      users,
    }
  })
}

module.exports = {
  signup,
  login,
  logout,
  logoutAllDevice,
  getInfoUser,
  updateInfoUser,
  uploadAvatar,
  getAllUser,
};
