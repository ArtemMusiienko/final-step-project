import axios from 'axios'

export const getCatalog = () => axios.get('/catalog').then(response => response.data)
