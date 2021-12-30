import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useTheme } from '@mui/styles'
import { Box } from '@mui/system'
import Typography from '@mui/material/Typography'
import ProductCardReview from './ProductCardReview'

const ProductCardAllReviews = () => {
  const { productReviews } = useSelector(state => state.reviews)
  const theme = useTheme()
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    setReviews(productReviews)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productReviews])
  const setReviewsList = () => {
    const reviewsList = reviews.map(review => (
      // eslint-disable-next-line no-underscore-dangle
      <ProductCardReview key={review._id} oneReview={review} />
    ))
    return reviewsList
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid',
        borderColor: theme.palette.primary.main,
        borderRadius: '4px',
        padding: '0 15px',
        rowGap: 1
      }}
    >
      {reviews.length ? (
        setReviewsList()
      ) : (
        <Typography sx={{ color: theme.text.primary, fontWeight: 600, padding: '15px 0' }}>
          Please login and write a review. You will be first reviewer.
        </Typography>
      )}
    </Box>
  )
}
export default ProductCardAllReviews
