import axios from 'axios'

export const getCart = async () => {
  try {
    const {data} = await axios.get('/cart')
    return data
  } catch (error) {
    console.log(error)
  }
}

