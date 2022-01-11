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
