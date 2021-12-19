import React from 'react'
import './Cart.scss'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '@mui/material'
import { addProduct, decrement, incriment, removeProduct } from '../../../store/buscet/buscetSlise'

const Cart = () => {
  const count = useSelector(state => state.basket.count)
  const product = useSelector(state => state.basket.product)
  const dispatch = useDispatch()

  return (
    <div>
      <div>Counter{count}</div>
      <Button onClick={() => dispatch(incriment())}> incriment </Button>
      <Button onClick={() => dispatch(decrement())}> decrement </Button>
      <Button onClick={() => dispatch(addProduct(product))}> addProduct</Button>
      <Button onClick={() => dispatch(removeProduct())}>RemoveProduct</Button>
      <ul>
        {product.map(item => (
          <li key={product}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
