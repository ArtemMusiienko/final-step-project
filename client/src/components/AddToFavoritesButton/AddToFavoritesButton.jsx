import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IconButton } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { updateWishlist } from '../../store/wishlist/actions'

const AddToFavoritesButton = ({ id }) => {
  const wishlist = useSelector(state => state.wishlist)
  const theme = useTheme()
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
  const handleClick = () => {
    dispatch(updateWishlist({ id }))
  }
  return (
    <IconButton onClick={handleClick}>
      {findFavoriteIcon() ? (
        <FavoriteIcon sx={{ color: theme.palette.primary.main }} />
      ) : (
        <FavoriteBorderIcon sx={{ color: theme.text.primary }} />
      )}
    </IconButton>
  )
}

export default AddToFavoritesButton
