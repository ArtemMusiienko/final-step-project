import axios from 'axios'

export const placeOrder = newOrder =>
  axios.post('/orders', newOrder).then(response => response.data)
