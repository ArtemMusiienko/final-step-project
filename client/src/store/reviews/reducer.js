import { createSlice } from '@reduxjs/toolkit'
import { setProductReviews, setAllReviews, addReview, updateReview, deleteReview } from './actions'

const wishlistSlice = createSlice({
  name: 'reviews',
  initialState: {
    allReviews: [],
    allCustomerReviews: [],
    productReviews: []
  },
  extraReducers: {
    [setProductReviews.fulfilled]: (state, action) => {
      state.productReviews = action.payload
    },
    [setAllReviews.fulfilled]: (state, action) => {
      state.allReviews = action.payload
    },
    [addReview.fulfilled]: (state, action) => {
      state.allReviews.push(action.payload)
      state.productReviews.push(action.payload)
    },
    [updateReview.fulfilled]: (state, action) => {
      const filteredSateAllReviews = state.allReviews.filter(
        // eslint-disable-next-line no-underscore-dangle
        review => review._id !== action.payload._id
      )
      const filteredSateProductReviews = state.productReviews.filter(
        // eslint-disable-next-line no-underscore-dangle
        review => review._id !== action.payload._id
      )
      state.allReviews = [...filteredSateAllReviews, action.payload]
      state.productReviews = [...filteredSateProductReviews, action.payload]
    },
    [deleteReview.fulfilled]: (state, action) => {
      const filteredSateAllReviews = state.allReviews.filter(
        // eslint-disable-next-line no-underscore-dangle
        review => review._id !== action.payload.deletedCommentInfo._id
      )
      const filteredSateProductReviews = state.productReviews.filter(
        // eslint-disable-next-line no-underscore-dangle
        review => review._id !== action.payload.deletedCommentInfo._id
      )
      state.allReviews = [...filteredSateAllReviews]
      state.productReviews = [...filteredSateProductReviews]
    }
  }
})

const { reducer } = wishlistSlice

export default reducer
