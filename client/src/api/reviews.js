import axios from 'axios'

export const addComment = (product, content, rating) =>
  axios
    .post('/comments', {
      product,
      content,
      rating
    })
    .then(response => response.data)

export const updateComment = (id, content, rating) =>
  axios
    .put(`/comments/${id}`, {
      content,
      rating
    })
    .then(response => response.data)

export const deleteComment = id => axios.delete(`/comments/${id}`).then(response => response.data)

export const getAllComments = () => axios.get('/comments').then(response => response.data)

export const getCustomerComments = customerId =>
  axios.get(`/comments/customer/${customerId}`).then(response => response.data)

export const getProductComments = productId =>
  axios.get(`/comments/product/${productId}`).then(response => response.data)
