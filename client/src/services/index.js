import axios from 'axios';
import { authHeader, getCookie } from '../utils/authHeader';
import config from '../utils/config';

export const services = {
  login,
  signUp,
  getUser,
  updateUser,
  uploadAvatar,
  getGrammarTopics,
  getGrammarById,
  translate,
  addRecentWord,
  getTenWords,
  getExamTest,
};

function login(email, password) {
  return axios({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    url: `${config.API_URL}/api/users/login`,
    data: JSON.stringify({ email, password }),
  })
    .then(res => res)
    .catch(err => {
      throw err;
    });
}

function signUp(value) {
  return axios({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    url: `${config.API_URL}/api/users/signup`,
    data: value,
  })
    .then(res => res)
    .catch(err => {
      throw err;
    });
}

function getUser(accessToken) {
  return axios({
    method: 'GET',
    url: `${config.API_URL}/api/users/`,
    headers: authHeader(),
  })
    .then(res => res)
    .catch(err => {
      throw err;
    });
}

function updateUser(object) {
  return axios({
    method: 'PATCH',
    headers: authHeader(),
    url: `${config.API_URL}/api/users`,
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
    url: `${config.API_URL}/api/users/upload-avatar`,
    data: formData,
  })
    .then(res => res)
    .catch(err => {
      throw err;
    });
}

function getGrammarTopics(object) {
  return axios({
    method: 'GET',
    url: `${config.API_URL}/api/grammar-topics`,
    headers: authHeader(),
    params: object,
  })
    .then(res => res)
    .catch(err => {
      throw err;
    });
}

function getGrammarById(object) {
  return axios({
    method: 'GET',
    url: `${config.API_URL}/api/grammar`,
    headers: authHeader(),
    params: object,
  })
    .then(res => res)
    .catch(err => {
      throw err;
    });
}

function translate(value) {
  return axios({
    method: 'POST',
    url: `${config.API_URL}/api/translate`,
    headers: authHeader(),
    data: JSON.stringify({
      value: value,
    }),
  })
    .then(res => res)
    .catch(err => {
      throw err;
    });
}

function addRecentWord(object) {
  return axios({
    method: 'POST',
    url: `${config.API_URL}/api/recent-word`,
    headers: authHeader(),
    data: object,
  })
    .then(res => res)
    .catch(err => {
      throw err;
    });
}

function getTenWords() {
  return axios({
    method: 'GET',
    url: `${config.API_URL}/api/recent-word/ten-words`,
    headers: authHeader(),
  })
    .then(res => res)
    .catch(err => {
      throw err;
    });
}

function getExamTest(object) {
  return axios({
    method: 'GET',
    url: `http://202.191.56.159:2510/api/tests`,
    headers: authHeader(),
    params : object
  })
    .then(res => res)
    .catch(err => {
      throw err;
    });
}
