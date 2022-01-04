/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
import React, { useRef, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useLocation } from 'react-router-dom'
import useMediaQuery from '@mui/material/useMediaQuery'
import Grid from '@mui/material/Grid'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { Divider, Button, Rating, Tab } from '@mui/material'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import StarIcon from '@mui/icons-material/Star'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import ImageGallery from 'react-image-gallery'
import InstagramIcon from '@mui/icons-material/Instagram'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import './image-gallery.scss'
import { Box } from '@mui/system'
import Link from '@mui/material/Link'
import BreadcrumbsComponent from '../../BreadcrumbsComponent/BreadcrumbsComponent'
import AddToFavoritesButtonProductCard from '../../AddToFavoritesButton/AddToFavoritesButtonProductCard'
import ProductCardReviews from './ProductCardReviews'
import { setProductReviews } from '../../../store/reviews/actions'
import ProductCardCartNavigation from './ProductCardCartNavigation'

const StyledTab = styled(Tab)(({ theme }) => {
  return {
    '&.Mui-selected': {
      color: '#46A358'
    }
  }
})

const ProductCard = props => {
  const { products } = useSelector(state => state.products)
  const { productReviews } = useSelector(state => state.reviews)
  const reviewRef = useRef(null)
  const location = useLocation()
  const params = useParams()
  // const reviewTarget = createRef()
  const [product, setProduct] = useState(
    // eslint-disable-next-line no-underscore-dangle
    products.filter(productData => productData.productUrl === `/${params.productUrl}`)
  )
  const dispatch = useDispatch()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  const [value, setValue] = useState('1')
  const [valueStars, setValueStars] = useState(0)
  const [isDisabled, setIsDisabled] = useState(false)
  useEffect(() => {
    if (product[0].quantity <= 0) {
      setIsDisabled(!isDisabled)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product])
  useEffect(() => {
    setValueStars(countRating())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productReviews])
  useEffect(() => {
    const productId = product[0]._id
    dispatch(setProductReviews({ productId }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products])
  const countRating = () => {
    const totalRating = productReviews.reduce(
      (accum, currentValue) => accum + currentValue.rating,
      0
    )
    return totalRating / productReviews.length
  }
  const images = product[0].imageUrls.map(image => {
    const imgObject = {
      original: `${image}`,
      thumbnail: `${image}`,
      thumbnailLabel: ' '
    }
    return imgObject
  })
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const reviewsHandlClick = () => {
    setValue('2')
    reviewRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <Box>
      <BreadcrumbsComponent location={location} />
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 3, md: 5 }}
        rowSpacing={{ xs: 1, sm: 0 }}
        columns={16}
        mt={2}
      >
        <Grid item container xs={16} md={8}>
          <ImageGallery
            items={images}
            thumbnailPosition={matches ? 'left' : 'bottom'}
            showNav={false}
            showFullscreenButton={false}
            showIndex
            showPlayButton={false}
          />
        </Grid>
        <Grid
          item
          container
          xs={16}
          md={8}
          direction="column"
          sx={{ justifyContent: 'space-between' }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                fontSize: { md: '1.6rem', xs: '1.4rem' },
                textTransform: 'capitalize',
                color: 'text.primary'
              }}
            >
              {product[0].name}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: 18,
                color: 'text.secondary'
              }}
            >
              {product[0].subTitle}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 'bold', fontSize: '1.4rem', color: '#46A358' }}
                >
                  {`$${product[0].currentPrice.toFixed(2)}`}
                </Typography>
                {product[0].previousPrice && (
                  <Typography
                    variant="body2"
                    ml={1}
                    sx={{
                      fontSize: '1.4rem',
                      textDecoration: 'line-through',
                      color: '#CBCBCB'
                    }}
                  >
                    {`$${product[0].previousPrice.toFixed(2)}`}
                  </Typography>
                )}
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column'
                }}
              >
                <Rating
                  name="text-feedback"
                  value={valueStars}
                  readOnly
                  precision={0.5}
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                <Box>
                  <Link component="button" onClick={reviewsHandlClick}>
                    {`${productReviews.length} Customer Reviews`}
                  </Link>
                </Box>
              </Box>
            </Box>
            <Divider light />
            <Box sx={{ display: 'flex' }}>
              <ul>
                {Object.entries(product[0].information)
                  .filter(pair => pair[0] !== 'Description')
                  .map(pair => (
                    <li key={pair[0]}>
                      <Typography variant="body2" sx={{ fontSize: 16, fontWeight: '800' }}>
                        {`${pair[0]}: `}
                      </Typography>
                      <Typography variant="body2" sx={{ fontSize: 16, fontWeight: 'regular' }}>
                        {`${pair[1]}`}
                      </Typography>
                    </li>
                  ))}
              </ul>
            </Box>
            <Divider light />
            <Grid item container mt={2} mb={2} spacing={1} direction="column">
              <ProductCardCartNavigation currentProduct={product[0]} />
            </Grid>
            <Box sx={{ display: 'flex' }} mb={1}>
              <Typography
                variant="body2"
                sx={{ color: '#A5A5A5', marginRight: '5px' }}
                ref={reviewRef}
              >
                SKU:
              </Typography>
              <Typography variant="body2">{product[0].itemNo}</Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Typography variant="body2" sx={{ color: '#A5A5A5', marginRight: '5px' }}>
                Categories:
              </Typography>
              <Typography variant="body2" sx={{ textTransform: 'capitalize' }}>
                {product[0].categories}
              </Typography>
            </Box>
            <Grid item container mt={1} sx={{ alignItems: 'center' }} columnSpacing={1}>
              <Grid item>
                <Typography sx={{ fontSize: '1.1rem', fontWeight: '600' }}>
                  {'Share this products: '}
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ padding: 0, minWidth: 0, boxShadow: 'none' }}
                >
                  <FacebookIcon color="primary" />
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ padding: 0, minWidth: 0, boxShadow: 'none' }}
                >
                  <TwitterIcon color="primary" />
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ padding: 0, minWidth: 0, boxShadow: 'none' }}
                >
                  <InstagramIcon color="primary" />
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ padding: 0, minWidth: 0, boxShadow: 'none' }}
                >
                  <MailOutlineIcon color="primary" />
                </Button>
              </Grid>
            </Grid>
            <Box mt={1}>
              <AddToFavoritesButtonProductCard id={product[0]._id} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={16}>
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <StyledTab label="Product Description" value="1" />
                  <StyledTab label={`Reviews(${productReviews.length})`} value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                {Object.entries(product[0].information)
                  .filter(pair => pair[0] === 'Description')
                  .map(pair => (
                    <Typography
                      key={pair[0]}
                      variant="body1"
                      sx={{ fontSize: 16, fontWeight: 'regular' }}
                    >
                      {`${pair[1]}`}
                    </Typography>
                  ))}
              </TabPanel>
              <TabPanel value="2" sx={{ paddingLeft: 0, paddingRight: 0 }}>
                <ProductCardReviews />
              </TabPanel>
            </TabContext>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProductCard
