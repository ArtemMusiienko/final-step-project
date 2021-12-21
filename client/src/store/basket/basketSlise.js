import { createSlice } from '@reduxjs/toolkit'

const basketSlice = createSlice({
  name: 'basket',
  initialState: [],
  reducers: {
    // incriment(state) {
    //   state.count += 1
    // },
    // decrement(state) {
    //   state.count -= 1
    // },
    addProduct(state, action) {
      state.push(action.payload)
    },
    removeProduct(state, action) {
      state.pop()
    }
  }
})
export const { addProduct, removeProduct, incriment, decrement } = basketSlice.actions
export default basketSlice.reducer
