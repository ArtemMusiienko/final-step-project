import axios from 'axios'

export const createCart = () => axios.post('/cart').then(response => response.data)

export const updateCart = cart =>
  axios
    .put('/cart', {
      products: cart
    })
    .then(response => response.data)

export const addProductToCart = productId => {
  console.log(productId)
  return axios.put(`/cart/${productId}`).then(response => response.data)
}

export const deleteProductFromCart = productId =>
  axios.delete(`/cart/${productId}`).then(response => response.data)

export const getCart = () => axios.get('/cart').then(response => response.data)

export const deleteCart = () => axios.delete('/cart').then(response => response.data)

export const decreaseProductQuantityFromCart = productId =>
  axios.delete(`/cart/product/${productId}`).then(response => response.data)
