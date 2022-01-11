/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState, useRef } from 'react'
import { useLocation, Link as RouterLink, useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import { useSelector, useDispatch } from 'react-redux'
import {
  Box,
  Button,
  Divider,
  Link,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText
} from '@mui/material'
import Backdrop from '@mui/material/Backdrop'
import BreadcrumbsComponent from '../../BreadcrumbsComponent/BreadcrumbsComponent'
import CartCard from './CartCard'
import {
  decreaseQuantityOfProductInCartForLocalstorage,
  deleteProductFromCartForLocalStorage,
  increaseQuantityOfProductInCartForLocalstorage
} from '../../../store/cart/reducer'
import {
  decreaseProductFromBasket,
  deleteProductFromBasket,
  increaseProductFromBasket
} from '../../../store/cart/actions'
import { setProducts } from '../../../store/products/actions'

const Cart = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const theme = useTheme()
  const { products: productsAll } = useSelector(state => state.products)
  const { products } = useSelector(state => state.cart)
  const { isLoggedIn } = useSelector(state => state.auth)
  const [totalAmount, setTotalAmount] = useState(0)
  const [isDisabled, setIsDisabled] = useState(false)
  const [open, setOpen] = useState(false)
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
  const [message, setMessage] = useState('')
  const [idForDelete, setIdForDelete] = useState('')
  const dispatch = useDispatch()
  const handleClose = () => {
    setOpen(false)
    setMessage('')
  }
  const handleDeleteClose = () => {
    setOpenDeleteDialog(false)
    setIdForDelete('')
  }
  const handleDeleteConfirm = () => {
    setOpenDeleteDialog(false)
    if (!isLoggedIn) {
      const currentProduct = products.find(
        productInCart => productInCart.product._id === idForDelete
      )
      const { product } = currentProduct
      dispatch(deleteProductFromCartForLocalStorage({ product }))
      return
    }
    const productId = idForDelete
    dispatch(deleteProductFromBasket({ productId }))
  }
  const descriptionElementRef = useRef(null)
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [open])
  const descriptionDeleteRef = useRef(null)
  useEffect(() => {
    if (openDeleteDialog) {
      const { current: descriptionElement } = descriptionDeleteRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [openDeleteDialog])
  useEffect(() => {
    dispatch(setProducts())
  }, [])
  useEffect(() => {
    const someMatchDifQuantities = products.some(productInCart => {
      const productInStock = productsAll.find(
        productOnStock => productOnStock._id === productInCart.product._id
      )
      return productInStock.quantity < productInCart.cartQuantity
    })
    if (someMatchDifQuantities) {
      setIsDisabled(true)
      return null
    }
    setIsDisabled(false)
    return null
  }, [productsAll])
  useEffect(() => {
    const amount = products.reduce(
      (accum, currentValue) =>
        accum + currentValue.cartQuantity * currentValue.product.currentPrice,
      0
    )
    setTotalAmount(amount)
    const someMatchDifQuantities = products.some(productInCart => {
      const productInStock = productsAll.find(
        productOnStock => productOnStock._id === productInCart.product._id
      )
      return productInStock.quantity < productInCart.cartQuantity
    })
    if (someMatchDifQuantities) {
      setIsDisabled(true)
      return null
    }
    setIsDisabled(false)
    return null
  }, [products])
  const decreaseHandleClick = id => {
    if (!isLoggedIn) {
      const product = products.find(productInCart => productInCart.product._id === id)
      if (product.cartQuantity - 1 === 0) {
        return
      }
      dispatch(decreaseQuantityOfProductInCartForLocalstorage({ product }))
      return
    }
    const product = products.find(productInCart => productInCart.product._id === id)
    if (product.cartQuantity - 1 === 0) {
      return
    }
    const productId = id
    dispatch(decreaseProductFromBasket({ productId }))
  }
  const increaseHandleClick = id => {
    if (!isLoggedIn) {
      const product = products.find(productInCart => productInCart.product._id === id)
      const currentProductInStock = productsAll.find(productOnStock => productOnStock._id === id)
      if (product.cartQuantity + 1 > currentProductInStock.quantity) {
        setOpen(true)
        setMessage(`Sorry on stock available only ${currentProductInStock.quantity} pcs`)
        return
      }
      dispatch(increaseQuantityOfProductInCartForLocalstorage({ product }))
    }
    const product = products.find(productInCart => productInCart.product._id === id)
    const currentProductInStock = productsAll.find(productOnStock => productOnStock._id === id)
    if (product.cartQuantity + 1 > currentProductInStock.quantity) {
      setOpen(true)
      setMessage(`Sorry on stock available only ${currentProductInStock.quantity} pcs`)
      return
    }
    const productId = id
    dispatch(increaseProductFromBasket({ productId }))
  }
  const handleDeleteIconClick = id => {
    setOpenDeleteDialog(true)
    setIdForDelete(id)
  }
  const handleCheckoutClick = () => {
    window.scrollTo({ top: 0 })
    navigate('/shop/checkout')
  }
  const handleLinkShoppingClick = () => {
    window.scrollTo({ top: 0 })
  }

  return (
    <Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <DialogContent>
          <DialogContentText id="dialog-description" ref={descriptionElementRef} tabIndex={-1}>
            {`${message}`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openDeleteDialog}
        onClose={handleDeleteClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <DialogContent>
          <DialogContentText id="dialog-description" ref={descriptionDeleteRef} tabIndex={-1}>
            Are you sure, you want to delete this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteConfirm}>Ok</Button>
          <Button onClick={handleDeleteClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
      <BreadcrumbsComponent location={location} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          columnGap: '40px',
          flexDirection: { xs: 'column', md: 'row' }
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              display: 'flex',
              fontWeight: 500,
              color: theme.text.primary,
              columnGap: { xs: '5px', sm: '15px' },
              fontSize: { xs: '0.8rem', sm: '1rem' }
            }}
          >
            <Box sx={{ maxWidth: { xs: '55%', sm: '40%' }, width: '100%' }}>Products</Box>
            <Box
              sx={{
                display: 'flex',
                flexGrow: 1,
                justifyContent: 'space-between',
                columnGap: '5px'
              }}
            >
              <Box sx={{ minWidth: { xs: 0, sm: '20%' }, display: { xs: 'none', sm: 'block' } }}>
                Price
              </Box>
              <Box sx={{ minWidth: { xs: '40%', sm: '30%' } }}>Quantity</Box>
              <Box sx={{ minWidth: { xs: '45%', sm: '40%' } }}>Total</Box>
            </Box>
          </Box>
          <Divider sx={{ margin: '10px 0' }} />
          {products.length > 0 ? (
            products.map(product => (
              <CartCard
                key={product.product._id}
                productFromCart={product}
                decreaseHandleClick={decreaseHandleClick}
                increaseHandleClick={increaseHandleClick}
                handleDeleteIconClick={handleDeleteIconClick}
              />
            ))
          ) : (
            <Box
              sx={{ textAlign: 'center', padding: '20px 0', fontSize: '1.1rem', fontWeight: 700 }}
            >
              Cart is empty
            </Box>
          )}
        </Box>
        <Box sx={{ color: theme.text.primary, marginTop: { xs: '15px', md: 0 } }}>
          <Box sx={{ fontWeight: 700, color: theme.text.primary, minWidth: '330px' }}>
            Cart Totals
          </Box>
          <Divider sx={{ margin: '10px 0' }} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '5px 0'
            }}
          >
            <Box>Subtotal</Box>
            <Box sx={{ fontWeight: 700 }}>{`$${totalAmount.toFixed(2)}`}</Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '5px 0'
            }}
          >
            <Box>Shipping</Box>
            <Box sx={{ fontWeight: 700 }}>$0</Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '20px 0'
            }}
          >
            <Box sx={{ fontWeight: 700 }}>Total</Box>
            <Box sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
              {`$${totalAmount.toFixed(2)}`}
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              padding: '10px 0'
            }}
          >
            <Button
              variant="contained"
              sx={{ textTransform: 'capitalize', boxShadow: 'none', width: '100%' }}
              onClick={handleCheckoutClick}
              disabled={isDisabled || !products.length}
            >
              Proceed To Checkout
            </Button>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Link
              sx={{ textDecoration: 'none' }}
              component={RouterLink}
              to="/shop"
              onClick={handleLinkShoppingClick}
            >
              Continue Shopping
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default Cart
