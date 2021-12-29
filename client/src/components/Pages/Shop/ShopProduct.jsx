import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  IconButton,
  Rating,
  SvgIcon,
  Typography
} from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import Box from '@mui/material/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import Image from 'material-ui-image'
import { ReactComponent as frame } from '../../../assets/frameIcon.svg'
import { ReactComponent as cart } from '../../../assets/cartIcon.svg'
import { ReactComponent as heart } from '../../../assets/heartIcon.svg'
import { addToCart } from '../../../store/cart/basketSlise'
import AddToFavoritesButton from '../../AddToFavoritesButton/AddToFavoritesButton'

const ShopProduct = ({ productId }) => {
  const { products } = useSelector(state => state.products)
  const { allReviews } = useSelector(state => state.reviews)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [product, setProduct] = useState(
    // eslint-disable-next-line no-underscore-dangle
    products.filter(productData => productData._id === productId)
  )
  const [valueStars, setValueStars] = useState(0)
  useEffect(() => {
    setValueStars(countRating())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allReviews])
  const countRating = () => {
    // eslint-disable-next-line no-underscore-dangle
    const reviewsForCurrentProduct = allReviews.filter(review => review.product._id === productId)
    const totalRating = reviewsForCurrentProduct.reduce(
      (accum, currentValue) => accum + currentValue.rating,
      0
    )
    return totalRating / reviewsForCurrentProduct.length
  }
  const createPath = () => {
    const parseId = product[0].categories.split('-').reverse()
    return `${parseId[0]}${product[0].productUrl}`
  }
  const handleClick = () => {
    navigate(createPath())
  }
  const discount = Math.floor(
    ((product[0].previousPrice - product[0].currentPrice) / product[0].previousPrice) * 100
  )
  const addProductToCartClick = props => {
    dispatch(addToCart(product))
  }
  return (
    <Card
      sx={{
        maxWidth: { xs: '100%', sm: '100%', md: 250 },
        maxHeight: 500,
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <CardActionArea
        onClick={handleClick}
        sx={{
          display: 'flex',
          flexGrow: 1,
          justifyContent: 'flex-start',
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}
      >
        <Image
          src={product[0].imageUrls[0]}
          style={{ width: '100%', color: '#46A358' }}
          cover
          imageStyle={{ width: 'inherit', height: '100%' }}
          color="#f5f5f5"
          loading={<CircularProgress color="inherit" />}
        />
        {product[0].previousPrice && product[0].quantity > 0 && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              minWidth: '50%',
              backgroundColor: '#46a358',
              textAlign: 'center'
            }}
          >
            <Typography variant="body1" sx={{ color: 'white', fontSize: 14, fontWeight: 500 }}>
              {discount}% OFF
            </Typography>
          </Box>
        )}
        {product[0].quantity < 5 && product[0].quantity > 0 && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              minWidth: '50%',
              backgroundColor: '#46a358',
              textAlign: 'center'
            }}
          >
            <Typography variant="body1" sx={{ color: 'white', fontSize: 14, fontWeight: 700 }}>
              LIMITED
            </Typography>
          </Box>
        )}
        {product[0].quantity <= 0 && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              width: '100%',
              backgroundColor: 'red',
              textAlign: 'center'
            }}
          >
            <Typography variant="body1" sx={{ color: 'white', fontSize: 14, fontWeight: 700 }}>
              CURRENTLY UNAVAILABLE
            </Typography>
          </Box>
        )}
        <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <div>
            <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: 16, color: '#46A358' }}>
              {`$${product[0].currentPrice.toFixed(2)}`}
            </Typography>
            {product[0].previousPrice && (
              <Typography
                variant="body2"
                ml={1}
                sx={{
                  fontSize: 16,
                  textDecoration: 'line-through',
                  color: '#CBCBCB'
                }}
              >
                {`$${product[0].previousPrice.toFixed(2)}`}
              </Typography>
            )}
          </div>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontSize: 16, textTransform: 'capitalize', fontWeight: 'bold' }}
          >
            {product[0].name}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexGrow: 1,
              alignItems: 'flex-end',
              justifyContent: 'center'
            }}
          >
            <Rating
              name="text-feedback"
              value={valueStars}
              readOnly
              precision={0.5}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: 'center' }}>
        <IconButton onClick={handleClick}>
          <SvgIcon component={frame} viewBox="0 0 20 20" fontSize="small" />
        </IconButton>
        <IconButton onClick={() => addProductToCartClick(product)}>
          <SvgIcon component={cart} viewBox="0 0 20 20" fontSize="small" />
        </IconButton>
        <AddToFavoritesButton id={productId} />
      </CardActions>
    </Card>
  )
}
export default ShopProduct
