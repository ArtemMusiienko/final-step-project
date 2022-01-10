import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Backdrop,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  IconButton
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { setWishlist, updateWishlist } from '../../store/wishlist/actions'

const AddToFavoritesButton = ({ id }) => {
  const wishlist = useSelector(state => state.wishlist)
  const theme = useTheme()
  const [isOpenedDialog, setIsOpenedDialog] = useState(false)
  const findFavoriteIcon = () => {
    if (!wishlist.products) {
      return false
    }
    // eslint-disable-next-line no-underscore-dangle
    if (wishlist.products.some(product => product._id === id)) {
      return true
    }
    return false
  }
  const dispatch = useDispatch()
  const handleClick = async () => {
    dispatch(setWishlist())
      .then(response => {
        if (response.error) {
          throw new Error(true)
        }
        dispatch(updateWishlist({ id }))
      })
      .catch(error => {
        const open = Boolean(error.message)
        setIsOpenedDialog(open)
      })
  }
  const handleClose = () => {
    setIsOpenedDialog(false)
  }
  const descriptionElementRef = useRef(null)
  useEffect(() => {
    if (isOpenedDialog) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [isOpenedDialog])
  return (
    <>
      <IconButton onClick={handleClick}>
        {findFavoriteIcon() ? (
          <FavoriteIcon sx={{ color: theme.palette.primary.main }} />
        ) : (
          <FavoriteBorderIcon sx={{ color: theme.text.primary }} />
        )}
      </IconButton>
      <Dialog
        open={isOpenedDialog}
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
            Add products to wishlist available only for registered users.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AddToFavoritesButton
