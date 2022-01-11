/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from '@mui/material/styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { IconButton, SvgIcon, TextField, Button } from '@mui/material'
import Zoom from '@mui/material/Zoom'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { addProductToCartForLocalStorage } from '../../store/cart/reducer'
import { updateBasket } from '../../store/cart/actions'

const addToCartSchema = Yup.object().shape({
  cartQuantity: Yup.number().min(1, 'Quantity should be above 1 pc').required('Required')
})

const AddToCartButtonIcon = ({ product }) => {
  const theme = useTheme()
  const { isLoggedIn } = useSelector(state => state.auth)
  const [quantity, setQuantity] = useState(1)
  const [anchorEl, setAnchorEl] = useState(null)
  const [isDisabled, setIsDisabled] = useState(false)
  const dispatch = useDispatch()
  const open = Boolean(anchorEl)
  useEffect(() => {
    if (product.quantity <= 0) {
      setIsDisabled(!isDisabled)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product])
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
        dispatch(addProductToCartForLocalStorage({ product, cartQuantity }))
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
      const error = {
        cartQuantity: `Sorry, on stock only ${product.quantity} pcs`
      }
      formik.setErrors(error)
    }
    if (value > 0 && value <= product.quantity) {
      formik.setFieldValue(name, +value)
    }
  }
  return (
    <>
      <IconButton
        sx={{ color: theme.text.primary }}
        onClick={handleOpenMenuClick}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        id="zoom-button"
        aria-controls={open ? 'zoom-menu' : undefined}
        disabled={isDisabled}
      >
        <SvgIcon component={AddShoppingCartIcon} />
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
              onChange={handleChange}
              onBlur={formik.handleBlur}
              error={Boolean(formik.errors.cartQuantity)}
              helperText={formik.errors.cartQuantity}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ marginTop: '5px', padding: 0 }}
              disabled={formik.values.cartQuantity <= 0}
            >
              Add
            </Button>
          </form>
        </MenuItem>
      </Menu>
    </>
  )
}

export default React.memo(AddToCartButtonIcon)
