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
export const authNewPassword = (password, newPassword) =>
  axios.put('/customers/password', {
    password,
    newPassword
  })
export const authPersonalUpdate = (
  login,
  password,
  firstName,
  lastName,
  country,
  city,
  address,
  postal,
  email,
  mobile
) =>
  axios.put('/customers', {
    login,
    password,
    firstName,
    lastName,
    country,
    city,
    address,
    postal,
    email,
    mobile
  })
