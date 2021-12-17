import axios from 'axios'

export const authLogin = (loginOrEmail, password) =>
  axios
    .post('/customers/login', {
      loginOrEmail,
      password
    })
    .then(response => response.data.token)

export const authRegister = (firstName, lastName, login, email, password) =>
  axios.post('/customers', {
    firstName,
    lastName,
    password,
    login,
    email
  })
