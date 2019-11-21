import axios from 'axios';

export const services = {
	login,
  signUp
}

function login(email, password) {
  return axios({
    method : "POST",
    headers : { 'Content-Type': 'application/json' },
    url : "https://toeic-practice.herokuapp.com/api/users/login",
    data : JSON.stringify({ email, password })
  }).then(res => res)
  .catch(err=> {throw err})
}

function signUp(value) {
  console.log(value)
  return axios({
    method : "POST",
    headers : { 'Content-Type': 'application/json' },
    url : "https://toeic-practice.herokuapp.com/api/users/signup",
    data : value
  }).then(res => res)
  .catch(err=> {throw err})
}