import axios from 'axios'

export const getWishlist = () => axios.get('/wishlist').then(response => response.data)

export const createWishlist = () =>
  axios
    .post('/wishlist', {
      products: []
    })
    .then(response => response.data)

export const addProductToWishlist = id =>
  axios.put(`/wishlist/${id}`).then(response => response.data)

export const deleteProductFromWishlist = id =>
  axios.delete(`/wishlist/${id}`).then(response => response.data)

export const deleteWishlist = () => axios.delete('/wishlist').then(response => response.data)
