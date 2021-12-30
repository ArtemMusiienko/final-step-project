import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  addComment,
  updateComment,
  deleteComment,
  getAllComments,
  getCustomerComments,
  getProductComments
} from '../../api/reviews'

export const setProductReviews = createAsyncThunk(
  'reviews/fetchProductReviews',
  async ({ productId }) => {
    const data = await getProductComments(productId)
    return data
  }
)

export const setAllReviews = createAsyncThunk('reviews/fetchAllReviews', async () => {
  const data = await getAllComments()
  return data
})

export const addReview = createAsyncThunk(
  'reviews/fetchAddReview',
  async ({ productId, content, rating }) => {
    const data = await addComment(productId, content, rating)
    return data
  }
)
export const updateReview = createAsyncThunk(
  'reviews/fetchUpdateReview',
  async ({ id, content, rating }) => {
    const data = await updateComment(id, content, rating)
    return data
  }
)
export const deleteReview = createAsyncThunk('reviews/fetchDeleteReview', async ({ id }) => {
  const data = await deleteComment(id)
  return data
})
// export const setWishlist = createAsyncThunk('wishlist/fetchWishlist', async () => {
//   let data = await getWishlist()
//   if (data === null) {
//     data = await createWishlist()
//   }
//   return data
// })

// export const updateWishlist = createAsyncThunk(
//   'wishlist/fetchUpdateWishlist',
//   async ({ id }, thunkAPI) => {
//     const wishlistProducts = thunkAPI.getState().wishlist.products
//     // eslint-disable-next-line no-underscore-dangle
//     const filterWishlist = wishlistProducts.filter(product => product._id === id)
//     if (filterWishlist.length) {
//       const data = await deleteProductFromWishlist(id)
//       return data
//     }
//     const data = await addProductToWishlist(id)
//     return data
//   }
// )
