const bcrypt = require('bcryptjs');
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const CustomError = require('../errors/CustomError');
const errorCode = require('../errors/errorCode');
const User = require('../models/user.model');
const uploadImage = require('../utils/uploadImage');

async function signup(userInfo) {
  const { email } = userInfo;

  const checkExistEmail = await User.findOne({ email });
  if (checkExistEmail) {
    throw new CustomError(errorCode.CONFLICT, 'Email đã tồn tại');
  }

  const user = await User.create(userInfo);
  const token = await user.generateAuthToken();

  return { user, token };
}

async function login(email, password) {
  const user = await User.findOne({ email });
  if (!user) {
    throw new CustomError(errorCode.BAD_REQUEST, 'Đăng nhập thất bại');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new CustomError(errorCode.BAD_REQUEST, 'Đăng nhập thất bại');
  }

  const token = await user.generateAuthToken();

  return { user, token };
}

async function logout(user, currentToken) {
  user.tokens = user.tokens.filter(({ token }) => token !== currentToken);
  await user.save();
}

async function logoutAllDevice(user) {
  user.tokens = [];
  await user.save();
}

async function updateInfoUser(user, infoUpdates) {
  const { name, gender, oldPassword, newPassword } = infoUpdates;

  if (oldPassword) {
    if (!newPassword) {
      throw new CustomError(
        errorCode.BAD_REQUEST,
        'Bạn chưa nhập mật khẩu mới',
      );
    }
    const isMatch = await bcrypt.compare(oldPassword, user.password);

    if (!isMatch) {
      throw new CustomError(errorCode.FORBIDDEN, 'Mật khẫu cũ không chính xác');
    }

    if (oldPassword === newPassword) {
      throw new CustomError(
        errorCode.BAD_REQUEST,
        'Bạn phải nhập mật khẩu cũ khác mật khẩu mới',
      );
    }

    user.password = newPassword;
  }

  if (name && name !== user.name) {
    user.name = name;
  }

  if (gender && gender !== user.gender) {
    user.gender = gender;
  }

  await user.save();

  return user;
}

async function uploadAvatar(user, avatar) {
  const avatarLink = await uploadImage(avatar, '/images/avatar');

  const bodyFormData = new FormData();
  bodyFormData.append('relativePath', 'images/avatar');
  bodyFormData.append('file', fs.createReadStream(avatarLink));

  const config = {
    headers: bodyFormData.getHeaders(),
  };

  const res = await axios.post(
    'http://123.30.235.196:5221/api/files',
    bodyFormData,
    config,
  );

  user.avatar = res.data.link;
  await user.save();

  return user;
}

module.exports = {
  signup,
  login,
  logout,
  logoutAllDevice,
  updateInfoUser,
  uploadAvatar,
};
