import axios from 'axios';

export const services = {
	login
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