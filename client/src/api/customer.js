import axios from 'axios'

export const getCustomer = () => axios.get('/customers/customer').then(response => response.data)
