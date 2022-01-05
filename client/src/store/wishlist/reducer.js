import { createSlice } from '@reduxjs/toolkit'
import { setWishlist, updateWishlist } from './actions'

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {},
  reducers: {
    removeWishlist: (state, action) => {
      return {}
    }
  },
  extraReducers: {
    [setWishlist.fulfilled]: (state, action) => action.payload,
    [updateWishlist.fulfilled]: (state, action) => action.payload
  }
})

const { reducer, actions } = wishlistSlice

export const { removeWishlist } = actions
export default reducer
