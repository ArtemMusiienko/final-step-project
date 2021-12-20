import { createSlice } from '@reduxjs/toolkit'
import { setProducts } from './actions'

const initialState = {
  products: []
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [setProducts.fulfilled]: (state, action) => {
      state.products = action.payload
    }
  }
})

const { reducer } = productsSlice
export default reducer
