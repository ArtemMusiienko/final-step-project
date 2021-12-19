import { createSlice } from '@reduxjs/toolkit'

const buscetSlise = createSlice({
  name: 'basket',
  initialState: {
    count: 0,
    product: []
  },
  reducers: {
    incriment(state) {
      state.count += 1
    },
    decrement(state) {
      state.count -= 1
    },
    addProduct(state, action) {
      state.product.push(action.payload)
    },
    removeProduct(state, action) {
      state.product.pop()
    }
  }
})
export const { addProduct, removeProduct, incriment, decrement } = buscetSlise.actions
export default buscetSlise.reducer
