/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled, useTheme } from '@mui/material/styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import {
  IconButton,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText
} from '@mui/material'
import Backdrop from '@mui/material/Backdrop'
import Badge from '@mui/material/Badge'
import Zoom from '@mui/material/Zoom'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import {
  deleteProductFromCartForLocalStorage,
  updateProductInCartForLocalStorage
} from '../../store/cart/reducer'
import { deleteProductFromBasket, updateBasket } from '../../store/cart/actions'

const StyledBadge = styled(Badge)(({ theme }) => {
  return {
    '& .MuiBadge-badge': {
      padding: '0 1px',
      minWidth: '17px',
      height: '17px',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.background.default,
      fontSize: '10px'
    }
  }
})

const addToCartSchema = Yup.object().shape({
  cartQuantity: Yup.number().min(0, 'Quantity should be above 0 pc').required('Required')
})

const BageProductCart = ({ product, quantityInCart }) => {
  const theme = useTheme()
  const { isLoggedIn } = useSelector(state => state.auth)
  const [quantity, setQuantity] = useState(() => quantityInCart)
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState(null)
  const [openDialog, setOpenDialog] = useState(false)
  const [message, setMessage] = useState('')
  const handleClose = () => {
    setOpenDialog(false)
    setMessage('')
  }
  const descriptionElementRef = useRef(null)
  useEffect(() => {
    if (openDialog) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [openDialog])
  const open = Boolean(anchorEl)
  useEffect(() => {
    setQuantity(quantityInCart)
  }, [quantityInCart])
  const handleOpenMenuClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleCloseMenuClick = () => {
    setAnchorEl(null)
    formik.resetForm()
  }
  const formik = useFormik({
    initialValues: {
      cartQuantity: quantity
    },
    validationSchema: addToCartSchema,
    onSubmit: value => {
      const { cartQuantity } = value
      if (!isLoggedIn) {
        if (cartQuantity === 0) {
          dispatch(deleteProductFromCartForLocalStorage({ product }))
          handleCloseMenuClick()
          formik.setSubmitting(false)
          formik.resetForm()
          return null
        }
        dispatch(updateProductInCartForLocalStorage({ product, cartQuantity }))
        handleCloseMenuClick()
        formik.setSubmitting(false)
        formik.resetForm()
        return null
      }
      if (cartQuantity === 0) {
        const productId = product._id
        dispatch(deleteProductFromBasket({ productId }))
        handleCloseMenuClick()
        formik.setSubmitting(false)
        formik.resetForm()
        return null
      }
      dispatch(updateBasket({ product, cartQuantity }))
      handleCloseMenuClick()
      formik.setSubmitting(false)
      formik.resetForm()
      return null
    }
  })
  const handleChange = event => {
    const { name, value } = event.target
    if (value > product.quantity) {
      setMessage(`Sorry, on stock only ${product.quantity} pcs`)
      setOpenDialog(true)
      formik.setFieldValue(name, product.quantity)
    }
    if (value >= 0 && value <= product.quantity) {
      formik.setFieldValue(name, +value)
    }
  }
  return (
    <>
      <IconButton
        sx={{ color: theme.palette.primary.main }}
        onClick={handleOpenMenuClick}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        id="zoom-button"
        aria-controls={open ? 'zoom-menu' : undefined}
      >
        <StyledBadge badgeContent={quantity} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
      <Menu
        id="zoom-menu"
        MenuListProps={{
          'aria-labelledby': 'zoom-button'
        }}
        anchorEl={anchorEl}
        open={open}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        onClose={handleCloseMenuClick}
        TransitionComponent={Zoom}
      >
        <MenuItem
          sx={{
            '&:hover': { backgroundColor: theme.palette.background.default },
            '&:focus-within': { backgroundColor: theme.palette.background.default }
          }}
        >
          <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={formik.handleSubmit}>
            <TextField
              label="Quantity"
              type="number"
              id="cartQuantity"
              name="cartQuantity"
              InputLabelProps={{
                shrink: true
              }}
              variant="standard"
              value={formik.values.cartQuantity}
              color={formik.values.cartQuantity === 0 ? 'error' : 'primary'}
              onChange={handleChange}
              onBlur={formik.handleBlur}
              error={Boolean(formik.errors.cartQuantity)}
              helperText={formik.errors.cartQuantity}
            />
            <Button
              type="submit"
              variant="contained"
              color={formik.values.cartQuantity === 0 ? 'error' : 'primary'}
              sx={{ marginTop: '5px', padding: 0 }}
              disabled={formik.values.cartQuantity === formik.initialValues.cartQuantity}
            >
              {formik.values.cartQuantity === 0 ? 'Remove' : 'Update'}
            </Button>
          </form>
        </MenuItem>
      </Menu>
      <Dialog
        open={openDialog}
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
    </>
  )
}

export default BageProductCart
