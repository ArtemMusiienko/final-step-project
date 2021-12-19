import React from 'react'
import Badge from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import { Link } from 'react-router-dom'
import CartIcon from './CartIcon'
import Cart from '../Pages/Cart'

const StyledBadge = styled(Badge)(({ theme }) => {
  return {
    '& .MuiBadge-badge': {
      right: -3,
      top: 5,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 1px'
    }
  }
})

const CartBage = () => (
  <IconButton aria-label="cart">
    <Link to="/shop/cart" style={{ color: 'black' }}>
      {' '}
      <StyledBadge badgeContent={4} color="primary">
        <CartIcon viewBox="0 0 24 24" />
      </StyledBadge>
    </Link>
  </IconButton>
)

export default CartBage
