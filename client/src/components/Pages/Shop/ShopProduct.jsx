import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  SvgIcon,
  Typography
} from '@mui/material'
import Box from '@mui/material/Box'
import { ReactComponent as frame } from '../../../assets/frame.svg'
import { ReactComponent as cart } from '../../../assets/cart.svg'
import { ReactComponent as heart } from '../../../assets/heart.svg'
import { addProduct } from '../../../store/basket/basketSlise'

const ShopProduct = ({ productId }) => {
  const { products } = useSelector(state => state.products)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [product, setProduct] = useState(
    // eslint-disable-next-line no-underscore-dangle
    products.filter(productData => productData._id === productId)
  )
  const createPath = () => {
    const parseId = product[0].categories.split('-').reverse()
    return `${parseId[0]}${product[0].productUrl}`
  }
  const handleClick = () => {
    navigate(createPath())
  }
  const addProductToCartClick = () => {
    const data = {
      // eslint-disable-next-line no-underscore-dangle
      product: product[0]._id,
      cartQuantity: 1
    }
    dispatch(addProduct(data))
  }
  const discount = Math.floor(
    ((product[0].previousPrice - product[0].currentPrice) / product[0].previousPrice) * 100
  )
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
        <CardMedia
          component="img"
          height="140"
          image={product[0].imageUrls[0]}
          alt="green iguana"
        />
        {product[0].previousPrice && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              minWidth: 80,
              backgroundColor: '#46a358',
              textAlign: 'center'
            }}
          >
            <Typography variant="body1" sx={{ color: 'white', fontSize: 16, fontWeight: 500 }}>
              {discount}% OFF
            </Typography>
          </Box>
        )}
        <CardContent>
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
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: 'center' }}>
        <IconButton onClick={handleClick}>
          <SvgIcon component={frame} viewBox="0 0 20 20" fontSize="small" />
        </IconButton>
        <IconButton onClick={addProductToCartClick}>
          <SvgIcon component={cart} viewBox="0 0 20 20" fontSize="small" />
        </IconButton>
        <IconButton>
          <SvgIcon component={heart} viewBox="0 0 20 20" fontSize="small" />
        </IconButton>
      </CardActions>
    </Card>
  )
}
export default ShopProduct
