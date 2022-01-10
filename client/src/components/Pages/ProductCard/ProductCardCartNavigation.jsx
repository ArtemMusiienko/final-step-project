/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Button, Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import Link from '@mui/material/Link'
import {
  addProductToCartForLocalStorage,
  deleteProductFromCartForLocalStorage,
  updateProductInCartForLocalStorage
} from '../../../store/cart/reducer'
import { deleteProductFromBasket, updateBasket } from '../../../store/cart/actions'

const ProductCardCartNavigation = ({ currentProduct }) => {
  const theme = useTheme()
  const { isLoggedIn } = useSelector(state => state.auth)
  const { products } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const [product, setProduct] = useState(currentProduct)
  const [isProductInCart, setIsProductInCart] = useState(false)
  const [quantityInCart, setQuantityInCart] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isDisabled, setIsDisabled] = useState(false)
  const [errorMessage, setErrorMessage] = useState()
  useEffect(() => {
    const productInCart = products.filter(
      productFromCart => productFromCart.product._id === product._id
    )
    if (productInCart.length) {
      setQuantityInCart(productInCart[0].cartQuantity)
      setIsProductInCart(true)
    } else {
      setQuantity(1)
    }
    setErrorMessage('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products])
  useEffect(() => {
    if (product.quantity <= 0) {
      setIsDisabled(!isDisabled)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product])
  const decreaseHandleClick = () => {
    if (isProductInCart) {
      if (quantityInCart <= 0) {
        return
      }
      setErrorMessage('')
      setQuantityInCart(quantityInCart - 1)
      return
    }
    if (quantity <= 1) {
      return
    }
    setErrorMessage('')
    setQuantity(quantity - 1)
  }

  const increaseHandleClick = () => {
    if (isProductInCart) {
      setQuantityInCart(prevState => {
        if (prevState + 1 > product.quantity) {
          setErrorMessage(`Sorry, on stock only ${product.quantity} pcs`)
          return prevState
        }
        return prevState + 1
      })
      return
    }
    setQuantity(prevState => {
      if (prevState + 1 > product.quantity) {
        setErrorMessage(`Sorry, on stock only ${product.quantity} pcs`)
        return prevState
      }
      return prevState + 1
    })
  }
  const handleUpdateButtonClick = () => {
    if (!isLoggedIn) {
      if (isProductInCart) {
        const cartQuantity = quantityInCart
        if (quantityInCart !== 0) {
          dispatch(updateProductInCartForLocalStorage({ product, cartQuantity }))
          return
        }
        dispatch(deleteProductFromCartForLocalStorage({ product }))
        setIsProductInCart(false)
        return
      }
      const cartQuantity = quantity
      dispatch(addProductToCartForLocalStorage({ product, cartQuantity }))
      return
    }
    if (isProductInCart) {
      const cartQuantity = quantityInCart
      if (quantityInCart !== 0) {
        dispatch(updateBasket({ product, cartQuantity }))
        return
      }
      const productId = product._id
      dispatch(deleteProductFromBasket({ productId }))
      setIsProductInCart(false)
      return
    }
    const cartQuantity = quantity
    dispatch(updateBasket({ product, cartQuantity }))
  }
  return (
    <>
      <Grid item sx={{ display: isProductInCart ? 'block' : 'none' }}>
        <Typography sx={{ fontSize: '1.1rem', fontWeight: '600' }}>
          {'Currently quantity in '}
          <Link component={RouterLink} to="/shop/cart" onClick={() => window.scrollTo({ top: 0 })}>
            cart
          </Link>
          :
        </Typography>
      </Grid>
      <Grid
        item
        container
        columnSpacing={1}
        alignItems="center"
        rowSpacing={{ xs: 1, sm: 0 }}
        justifyContent={{ xs: 'center', sm: 'flex-start' }}
      >
        <Grid item>
          <Fab
            color="primary"
            size="small"
            aria-label="add"
            sx={{ boxShadow: 'none' }}
            onClick={decreaseHandleClick}
            disabled={isDisabled}
          >
            <RemoveIcon />
          </Fab>
          <Typography variant="body2" color="initial" sx={{ fontSize: '20px', margin: '0 15px' }}>
            {quantityInCart === 0 && !isProductInCart ? quantity : quantityInCart}
          </Typography>
          <Fab
            color="primary"
            size="small"
            aria-label="add"
            sx={{ boxShadow: 'none' }}
            onClick={increaseHandleClick}
            disabled={isDisabled}
          >
            <AddIcon />
          </Fab>
        </Grid>
        <Grid item>
          {quantityInCart === 0 && !isProductInCart ? (
            <Button
              variant="outlined"
              color="primary"
              sx={{ boxShadow: 'none', fontWeight: 'bold' }}
              disabled={isDisabled}
              onClick={handleUpdateButtonClick}
            >
              Add to cart
            </Button>
          ) : (
            <Button
              variant="outlined"
              color={quantityInCart === 0 ? 'error' : 'primary'}
              sx={{ boxShadow: 'none', fontWeight: 'bold' }}
              onClick={handleUpdateButtonClick}
              disabled={
                isProductInCart
                  ? quantityInCart ===
                    products.filter(
                      productFromCart => productFromCart.product._id === product._id
                    )[0].cartQuantity
                  : false
              }
            >
              {quantityInCart === 0 ? 'Remove Product' : 'Update Cart'}
            </Button>
          )}
          {/* <Button
            variant="contained"
            color="primary"
            sx={{ boxShadow: 'none', fontWeight: 'bold', marginLeft: '5px' }}
            disabled={isDisabled}
          >
            Buy Now
          </Button> */}
        </Grid>
        {errorMessage && (
          <Grid item sx={{ color: theme.palette.error.main }}>
            {errorMessage}
          </Grid>
        )}
      </Grid>
    </>
  )
}

export default ProductCardCartNavigation
