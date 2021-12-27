import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  getWishlist,
  createWishlist,
  addProductToWishlist,
  deleteProductFromWishlist,
  deleteWishlist
} from '../../api/wishlist'

export const setWishlist = createAsyncThunk('wishlist/fetchWishlist', async () => {
  let data = await getWishlist()
  if (data === null) {
    data = await createWishlist()
  }
  return data
})

export const updateWishlist = createAsyncThunk(
  'wishlist/fetchUpdateWishlist',
  async ({ id }, thunkAPI) => {
    const wishlistProducts = thunkAPI.getState().wishlist.products
    // eslint-disable-next-line no-underscore-dangle
    const filterWishlist = wishlistProducts.filter(product => product._id === id)
    if (filterWishlist.length) {
      const data = await deleteProductFromWishlist(id)
      return data
    }
    const data = await addProductToWishlist(id)
    return data
  }
)
