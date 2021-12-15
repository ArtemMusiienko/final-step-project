import axios from 'axios'

export const authLogin = (loginOrEmail, password) =>
  axios
    .post('/customers/login', {
      loginOrEmail,
      password
    })
    .then(response => {
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data.token))
      }
      return response.data.token
    })

export const authLogout = () => {
  localStorage.removeItem('user')
}

export const authRegister = (firstName, lastName, login, email, password) =>
  axios.post('/customers', {
    firstName,
    lastName,
    password,
    login,
    email
  })
