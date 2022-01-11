/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Badge from '@mui/material/Badge'
import { styled, useTheme } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Zoom from '@mui/material/Zoom'
import Popover from '@mui/material/Popover'
import { Link as RouterLink } from 'react-router-dom'
import { Divider, Link, Typography } from '@mui/material'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Box } from '@mui/system'
import Image from 'material-ui-image'
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

const CartBage = () => {
  const theme = useTheme()
  const { products } = useSelector(state => state.cart)
  const [totalQuantitiesInCart, setTotalQuantitiesInCart] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  useEffect(() => {
    const quantity = products.reduce((accum, currentValue) => accum + currentValue.cartQuantity, 0)
    const amount = products.reduce(
      (accum, currentValue) =>
        accum + currentValue.cartQuantity * currentValue.product.currentPrice,
      0
    )
    setTotalQuantitiesInCart(quantity)
    setTotalAmount(amount)
  }, [products])
  useEffect(() => {
    if (open) {
      document.body.onwheel = handleCloseMenuClick
      document.body.addEventListener('touchstart', handleCloseMenuClick, false)
    }
    return () => {
      document.body.onwheel = undefined
      document.body.removeEventListener('touchstart', handleCloseMenuClick, false)
    }
  }, [open])
  const handleOpenMenuClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleCloseMenuClick = () => {
    setAnchorEl(null)
  }
  const handleLinkCartClick = () => {
    window.scrollTo({ top: 0 })
    handleCloseMenuClick()
  }
  return (
    <>
      <IconButton
        aria-label="zoom-cart"
        onClick={handleOpenMenuClick}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        id="zoom-cart-button"
        aria-controls={open ? 'zoom-cart-menu' : undefined}
      >
        <StyledBadge badgeContent={totalQuantitiesInCart} color="primary">
          <CartIcon viewBox="0 0 24 24" />
        </StyledBadge>
      </IconButton>
      <Popover
        id="zoom-cart-menu"
        open={open}
        anchorEl={anchorEl}
        onClose={handleCloseMenuClick}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        TransitionComponent={Zoom}
      >
        <Box sx={{ padding: '5px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', columnGap: '5px' }}>
            <Typography variant="body1" color={theme.text.primary} sx={{ fontWeight: 'bold' }}>
              Products
            </Typography>
            <Typography variant="body1" color={theme.text.primary} sx={{ fontWeight: 'bold' }}>
              Subtotal
            </Typography>
          </Box>
          <Divider sx={{ margin: '5px 0' }} />
          {products.length ? (
            <>
              {products.map(product => (
                <Box
                  key={product.product._id}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: theme.palette.grey[100],
                    margin: '5px 0',
                    columnGap: '5px'
                  }}
                >
                  <Box sx={{ display: 'flex', flexGrow: 1, columnGap: '5px' }}>
                    <Box sx={{ width: '70px' }}>
                      <Image
                        src={product.product.imageUrls[0]}
                        style={{ width: '70px', color: '#46A358' }}
                        cover
                        imageStyle={{ width: 'inherit', height: '100%', display: 'block' }}
                        color="#f5f5f5"
                        loading={<CircularProgress color="inherit" />}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1,
                        justifyContent: 'center'
                      }}
                    >
                      <Box
                        color={theme.text.primary}
                        sx={{ fontWeight: 600, textTransform: 'capitalize' }}
                      >
                        {product.product.name}
                      </Box>
                      <Box
                        color={theme.palette.action.disabled}
                        sx={{ fontWeight: 400, textTransform: 'capitalize', fontSize: '0.8rem' }}
                      >
                        {`SKU: ${product.product.itemNo}`}
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      columnGap: '5px',
                      minWidth: '100px'
                    }}
                  >
                    <Box>{`(x${product.cartQuantity})`}</Box>
                    <Box sx={{ color: theme.palette.primary.main, paddingRight: '3px' }}>{`($${(
                      product.cartQuantity * product.product.currentPrice
                    ).toFixed(2)})`}</Box>
                  </Box>
                </Box>
              ))}
            </>
          ) : (
            <Box sx={{ textAlign: 'center' }}> Cart is empty </Box>
          )}
          <Divider sx={{ margin: '5px 0' }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', columnGap: '10px' }}>
            <Typography variant="body1" color={theme.text.primary} sx={{ fontWeight: 'bold' }}>
              Total:
            </Typography>
            <Typography
              variant="body1"
              color={theme.text.primary}
              sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}
            >
              {`$${totalAmount.toFixed(2)}`}
            </Typography>
          </Box>
          {products.length > 0 && (
            <Box>
              <Typography sx={{ fontWeight: '400', textAlign: 'center' }}>
                {'See full details in '}
                <Link component={RouterLink} to="/shop/cart" onClick={handleLinkCartClick}>
                  Cart
                </Link>
              </Typography>
            </Box>
          )}
        </Box>
      </Popover>
    </>
  )
}

export default CartBage
