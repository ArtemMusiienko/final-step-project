/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles, useTheme } from '@mui/styles'
import Typography from '@mui/material/Typography'
import { Button, LinearProgress, Rating, TextField } from '@mui/material'
import { useParams } from 'react-router-dom'
import Divider from '@mui/material/Divider'
import { useFormik } from 'formik'
import StarIcon from '@mui/icons-material/Star'
import * as Yup from 'yup'
import YupPassword from 'yup-password'
import { Box } from '@mui/system'
import { addReview, deleteReview, updateReview } from '../../../store/reviews/actions'

const labels = {
  0: 'No rating',
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+'
}

YupPassword(Yup)
const reviewSchema = Yup.object().shape({
  content: Yup.string().min(2, 'Review must be above 1 character').required('Required'),
  rating: Yup.number().moreThan(0, 'You should choose a rating').required('Required')
})

const useStyles = makeStyles({
  reviewForm: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10,
    width: '100%'
  }
})

const ProductCardReviewForm = ({ isEdited, setIsEdited, review }, props) => {
  const { products } = useSelector(state => state.products)
  const params = useParams()
  const [product, setProduct] = useState(
    // eslint-disable-next-line no-underscore-dangle
    products.filter(productData => productData.productUrl === `/${params.productUrl}`)
  )
  const theme = useTheme()
  const { isLoggedIn } = useSelector(state => state.auth)
  const [ratingValue, setRatingValue] = useState(0)
  const [reviewText, setReviewText] = useState('')
  const classes = useStyles(props)
  const [hover, setHover] = useState(-1)
  const dispatch = useDispatch()
  useEffect(() => {
    if (!isLoggedIn && setIsEdited) {
      setIsEdited(!isEdited)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn])
  const cheackContent = () => {
    if (review) {
      return review.content
    }
    return ''
  }
  const cheackRating = () => {
    if (review) {
      return review.rating
    }
    return 0
  }
  const formik = useFormik({
    initialValues: {
      content: reviewText || cheackContent(),
      rating: ratingValue || cheackRating()
    },
    validationSchema: reviewSchema,
    onSubmit: value => {
      // eslint-disable-next-line no-underscore-dangle
      const productId = product[0]._id
      // eslint-disable-next-line no-underscore-dangle
      const { content } = value
      const rating = +value.rating
      if (isEdited) {
        // eslint-disable-next-line no-underscore-dangle
        const id = review._id
        dispatch(updateReview({ id, content, rating }))
        setIsEdited(!isEdited)
        formik.setSubmitting(false)
        formik.resetForm()
        setHover(-1)
        return null
      }
      dispatch(addReview({ productId, content, rating }))
      formik.setSubmitting(false)
      formik.resetForm()
      setHover(-1)
      return null
    }
  })
  const handleButtonCancelClick = () => {
    setIsEdited(!isEdited)
  }
  const handleButtonDeleteClick = () => {
    // eslint-disable-next-line no-underscore-dangle
    const id = review._id
    dispatch(deleteReview({ id }))
    setIsEdited(!isEdited)
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '5px',
        border: '1px solid',
        borderColor: theme.palette.primary.main,
        borderRadius: '4px',
        padding: '15px',
        rowGap: 1
      }}
    >
      <Typography
        id="transition-modal-title"
        variant="h6"
        component="h2"
        sx={{ fontSize: 14, fontWeight: 400, color: 'text.primary' }}
      >
        Write your review:
      </Typography>
      <Divider />
      <form onSubmit={formik.handleSubmit} className={classes.reviewForm}>
        <Box
          sx={{
            width: 200,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Rating
            name="rating"
            type="rating"
            label="Rating"
            size="small"
            color="primary"
            value={+formik.values.rating}
            precision={0.5}
            onChange={formik.handleChange}
            onChangeActive={(event, newHover) => {
              setHover(newHover)
            }}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          {+formik.values.rating !== null && (
            <Box sx={{ ml: 2, color: theme.text.primary }}>
              {labels[hover !== -1 ? hover : +formik.values.rating]}
            </Box>
          )}
        </Box>
        <Box sx={{ color: '#d32f2f', fontSize: '0.745rem' }}>{formik.errors.rating}</Box>
        <TextField
          fullWidth
          id="content"
          name="content"
          label="Review"
          value={formik.values.content}
          onChange={formik.handleChange}
          minRows={8}
          multiline
          color="primary"
          autoFocus={isEdited}
          sx={{
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': { borderColor: theme.palette.primary.main }
            }
          }}
          error={formik.touched.content && Boolean(formik.errors.content) && formik.isValid}
          helperText={formik.touched.content && formik.errors.content}
        />
        {formik.isSubmitting && <LinearProgress />}
        <Box sx={{ display: 'flex' }}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ display: 'block', textTransform: 'capitalize', width: '100%' }}
          >
            Submit Review
          </Button>
          {isEdited && (
            <Button
              variant="contained"
              color="inherit"
              sx={{
                display: 'block',
                textTransform: 'capitalize',
                width: '100%',
                backgroundColor: theme.palette.grey[100],
                color: theme.text.primary
              }}
              onClick={handleButtonCancelClick}
            >
              Cancel
            </Button>
          )}
          {isEdited && (
            <Button
              variant="contained"
              color="error"
              sx={{
                display: 'block',
                textTransform: 'capitalize',
                width: '100%'
              }}
              onClick={handleButtonDeleteClick}
            >
              Delete
            </Button>
          )}
        </Box>
      </form>
    </Box>
  )
}

export default React.memo(ProductCardReviewForm)
