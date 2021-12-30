/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import { useSelector } from 'react-redux'
import { useTheme } from '@mui/styles'
import { Box } from '@mui/system'
import { Rating, Button } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import ProductCardReviewForm from './ProductCardReviewsForm'
import setDate from '../../../services/dateDiff'

const ProductCardReview = ({ oneReview }) => {
  const { user } = useSelector(state => state.auth)
  const [userId, setUserId] = useState('')
  const [review, setReview] = useState(oneReview)
  const [isEdited, setIsEdited] = useState(false)
  const theme = useTheme()
  useEffect(() => {
    setReview(oneReview)
  }, [oneReview])
  useEffect(() => {
    if (user !== null) {
      const decodedJwt = jwt_decode(user)
      setUserId(decodedJwt.id)
      return null
    }
    setUserId('')
    return null
  }, [user])
  const editButtonHandleClick = () => {
    setIsEdited(!isEdited)
  }
  const cheakUserForEditing = () => {
    // eslint-disable-next-line no-underscore-dangle
    if (userId === review.customer._id) {
      return true
    }
    return false
  }
  return (
    <Box sx={{ padding: isEdited ? '10px 0 15px' : '0' }}>
      {isEdited ? (
        <ProductCardReviewForm
          isEdited={isEdited}
          review={review}
          setIsEdited={setIsEdited}
          setReview={setReview}
        />
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            color: theme.text.primary,
            backgroundColor: theme.palette.grey[100],
            marginTop: 2,
            marginBottom: 2,
            padding: 1,
            border: '1px solid transparent',
            borderRadius: '4px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <Rating
              name="text-feedback"
              value={review.rating}
              readOnly
              size="small"
              precision={0.5}
              sx={{ padding: '5px 0' }}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {cheakUserForEditing() && (
              <Box>
                <Button
                  variant="text"
                  color="primary"
                  sx={{ textTransform: 'capitalize', padding: 0 }}
                  onClick={editButtonHandleClick}
                >
                  Edit review
                </Button>
              </Box>
            )}
          </Box>
          <Box sx={{ display: 'flex', fontSize: '14px', margin: '5px 0', alignItems: 'center' }}>
            <Box sx={{ fontWeight: 'bold' }}>
              {`${review.customer.firstName} ${review.customer.lastName}`}
            </Box>
            <Box sx={{ marginLeft: '5px', fontSize: '12px' }}>{setDate(review.date)}</Box>
          </Box>
          <Box>{review.content}</Box>
        </Box>
      )}
    </Box>
  )
}
export default ProductCardReview
