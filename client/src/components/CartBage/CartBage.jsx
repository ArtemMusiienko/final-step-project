import React from 'react'
import Badge from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import CartIcon from './CartIcon'

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
    <StyledBadge badgeContent={4} color="primary">
      <CartIcon viewBox="0 0 24 24" />
    </StyledBadge>
  </IconButton>
)

export default CartBage
