/* eslint-disable no-underscore-dangle */
import { Box, Button } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../../../store/cart/basketSlise'

const Cart = () => {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const handleRemoveFromCart = cartItem => {
    dispatch(removeFromCart(cartItem))
  }

  return (
    <Box>
      {cart.cartItems.map(cartItem => (
        <div key={cartItem[0].id}>
          <h1> {cartItem[0].name}</h1>
          <p> {cartItem[0].subTitle}</p>
          <img style={{ height: 30, witdh: 40 }} src={cartItem[0].imageUrls[0]} alt="pictures" />
          <Button onClick={() => handleRemoveFromCart(cartItem)}>Remuve from Cart</Button>
        </div>
      ))}
    </Box>
  )
}
export default Cart
