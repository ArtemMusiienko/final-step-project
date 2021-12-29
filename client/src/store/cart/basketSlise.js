/* eslint-disable no-underscore-dangle */
import { positions } from '@mui/system'
import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartItems.push(action.payload)
      toast.success('Product successfully added to cart', {
        position: toast.POSITION.BOTTOM_LEFT
      })
    },
    removeFromCart(state, action) {
      state.cartItems.pop()
      toast.error('Product successfully deleted from cart', {
        position: toast.POSITION.BOTTOM_LEFT
      })
    }
  }
})
export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
