import axios from 'axios'

export const getProducts = () => axios.get('/products').then(response => response.data)
