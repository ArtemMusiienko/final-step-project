import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useLocation } from 'react-router-dom'
import useMediaQuery from '@mui/material/useMediaQuery'
import Grid from '@mui/material/Grid'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { Divider, Button, Fab, Rating, Tab } from '@mui/material'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import StarIcon from '@mui/icons-material/Star'
import AddIcon from '@mui/icons-material/Add'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import RemoveIcon from '@mui/icons-material/Remove'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import ImageGallery from 'react-image-gallery'
import InstagramIcon from '@mui/icons-material/Instagram'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import './image-gallery.scss'
import { Box } from '@mui/system'
import BreadcrumbsComponent from '../../BreadcrumbsComponent/BreadcrumbsComponent'

const StyledTab = styled(Tab)(({ theme }) => {
  return {
    '&.Mui-selected': {
      color: '#46A358'
    }
  }
})

const ProductCard = ({ productId = '61b3a05853200b15dc1f7fcb' }, props) => {
  const { products } = useSelector(state => state.products)
  const location = useLocation()
  const params = useParams()
  const [product, setProduct] = useState(
    // eslint-disable-next-line no-underscore-dangle
    products.filter(productData => productData.productUrl === `/${params.productUrl}`)
  )
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  const [quantity, setQuantity] = useState(1)
  const [value, setValue] = useState('1')
  const valueStars = 3.5
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

  const decreaseHandleClick = () => {
    if (quantity === 1) {
      return
    }
    setQuantity(quantity - 1)
  }

  const increaseHandleClick = () => {
    setQuantity(quantity + 1)
  }
  return (
    <Box>
      <BreadcrumbsComponent location={location} />
      <Grid container columnSpacing={{ xs: 1, sm: 3, md: 5 }} columns={16} mt={2}>
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
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
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
              </div>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Rating
                  name="text-feedback"
                  value={valueStars}
                  readOnly
                  precision={0.5}
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                <Box sx={{ ml: 2 }}>19 Customer Review</Box>
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
            <Grid item container spacing={2} mt={1} mb={3}>
              <Grid item>
                <Fab
                  color="primary"
                  size="small"
                  aria-label="add"
                  sx={{ boxShadow: 'none' }}
                  onClick={decreaseHandleClick}
                >
                  <RemoveIcon />
                </Fab>
                <Typography
                  variant="body2"
                  color="initial"
                  sx={{ fontSize: '20px', margin: '0 15px' }}
                >
                  {quantity}
                </Typography>
                <Fab
                  color="primary"
                  size="small"
                  aria-label="add"
                  sx={{ boxShadow: 'none' }}
                  onClick={increaseHandleClick}
                >
                  <AddIcon />
                </Fab>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ boxShadow: 'none', fontWeight: 'bold' }}
                >
                  Buy Now
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ marginLeft: '5px', boxShadow: 'none', fontWeight: 'bold' }}
                >
                  Add to cart
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{
                    marginLeft: '5px',
                    boxShadow: 'none',
                    fontWeight: 'bold',
                    padding: '5px',
                    minWidth: '40px'
                  }}
                >
                  <FavoriteBorderIcon />
                </Button>
              </Grid>
            </Grid>
            <Box sx={{ display: 'flex' }} mb={1}>
              <Typography variant="body2" sx={{ color: '#A5A5A5', marginRight: '5px' }}>
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
          </Box>
        </Grid>
        <Grid item xs={16}>
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <StyledTab label="Product Description" value="1" />
                  <StyledTab label="Reviews(19)" value="2" />
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
              <TabPanel value="2">Reviews</TabPanel>
            </TabContext>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProductCard
