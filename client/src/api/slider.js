import axios from 'axios'

export const getSlider = () => axios.get('/slides').then(response => response.data)
