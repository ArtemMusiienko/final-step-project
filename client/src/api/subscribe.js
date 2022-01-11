import axios from 'axios'

export const updateSubscriberByEmail = (email, newSubscriber) =>
  axios.put(`/subscribers/email/${email}`, newSubscriber).then(response => response.data)

export const getSubscriber = email =>
  axios.get(`/subscribers/${email}`).then(response => response.data)

export const addSubscriber = newSubscriber =>
  axios.post('/subscribers', newSubscriber).then(response => response.data)
