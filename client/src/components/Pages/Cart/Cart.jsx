import React from 'react'
import './Cart.scss'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Tabs, Tab, Box, Container, Typography, Avatar } from '@mui/material'
import { Backdrop } from '@mui/material/Backdrop'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { addProduct, decrement, incriment, removeProduct } from '../../../store/buscet/buscetSlise'

const Cart = () => {
  const count = useSelector(state => state.basket.count)
  const product = useSelector(state => state.basket.product)
  const { products } = useSelector(state => state.product)
  const oneProduct = products[0]
  console.log(oneProduct)
  const dispatch = useDispatch()

  return (
    <Container style={{ height: 448, marginLeft: 0, marginTop: 107 }}>
      <Box style={{ display: 'flex' }}>
        <Typography style={{ marginRight: 245 }}> Product</Typography>
        <Typography style={{ marginRight: 108 }}> Price</Typography>
        <Typography style={{ marginRight: 97 }}> Quantity</Typography>
        <Typography>Total </Typography>
      </Box>
      <Box
        style={{
          height: 70,
          background: '#FBFBFB',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: 14
        }}
      >
        <Avatar variant="square" />
        <Typography style={{ marginLeft: 240 }}>Her will be price</Typography>
        <Typography>
          <Button onClick={() => dispatch(incriment())}> + </Button>
          {count}
          <Button onClick={() => dispatch(decrement())}> -</Button>{' '}
        </Typography>
        <Typography>Her will be total</Typography>
        <DeleteOutlineIcon style={{ marginLeft: 59 }} />
      </Box>
      <Button onClick={() => dispatch(addProduct(oneProduct))}> addProduct</Button>
      <Button onClick={() => dispatch(removeProduct())}>removeProduct</Button>
    </Container>
  )
}
export default Cart
