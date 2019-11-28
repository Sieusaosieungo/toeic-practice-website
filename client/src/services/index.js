import axios from 'axios';
import { authHeader, getCookie } from '../utils/authHeader';

export const services = {
  login,
  signUp,
  getUser,
  updateUser,
  uploadAvatar,
};

function login(email, password) {
  return axios({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    url: 'https://toeic-practice.herokuapp.com/api/users/login',
    data: JSON.stringify({ email, password }),
  })
    .then(res => res)
    .catch(err => {
      throw err;
    });
}

function signUp(value) {
  console.log(value);
  return axios({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    url: 'https://toeic-practice.herokuapp.com/api/users/signup',
    data: value,
  })
    .then(res => res)
    .catch(err => {
      throw err;
    });
}

function getUser(accessToken) {
  console.log(authHeader());
  return axios({
    method: 'GET',
    url: `https://toeic-practice.herokuapp.com/api/users/`,
    headers: authHeader(),
  })
    .then(res => res)
    .catch(err => {
      throw err;
    });
}

function updateUser(object) {
  console.log(object);
  return axios({
    method: 'PATCH',
    headers: authHeader(),
    url: 'https://toeic-practice.herokuapp.com/api/users',
    data: object,
  })
    .then(res => res)
    .catch(err => {
      throw err;
    });
}

function uploadAvatar(formData) {
  return axios({
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + getCookie('accessToken'),
      'Content-Type': 'multipart/form-data',
    },
    url: 'https://toeic-practice.herokuapp.com/api/users/upload-avatar',
    data: formData,
  })
    .then(res => res)
    .catch(err => {
      throw err;
    });
}
