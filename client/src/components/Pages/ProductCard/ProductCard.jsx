import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import { makeStyles } from '@mui/styles'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { Divider, Button, Fab, Rating, ToggleButtonGroup, ToggleButton, Tab } from '@mui/material'
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

const productData = {
  enabled: true,
  name: 'Barberton Daisy',
  currentPrice: 119,
  previousPrice: 250,
  categories: 'Potter Plants',
  imageUrls: [
    'https://prestashop.templatemela.com/PRSADD12/PRS300/img/p/2/0/9/209-home_default.jpg',
    'https://prestashop.templatemela.com/PRSADD12/PRS300/img/p/2/2/2/222-home_default.jpg',
    'https://prestashop.templatemela.com/PRSADD12/PRS300/img/p/2/2/3/223-home_default.jpg',
    'https://prestashop.templatemela.com/PRSADD12/PRS300/img/p/2/2/5/225-home_default.jpg'
  ],
  quantity: 100,
  _id: '5da463678cca382250dd7bc7',
  productUrl: '/barberton',
  sizes: ['S', 'M', 'L', 'XL'],
  shortDescription:
    'The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.',
  fullDescription:
    'The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.',
  itemNo: '291759',
  tags: ['Home', 'Garden', 'Plants'],
  date: '2019-10-14T12:00:39.679Z',
  __v: 0
}

const useStyles = makeStyles({
  productName: {
    fontWeight: 'bold',
    fontSize: '1.8rem'
  },
  priceSection: {
    fontWeight: 'bold',
    fontSize: '1.4rem',
    color: '#46A358'
  },
  prevPriceSection: {
    fontSize: '1.4rem',
    textDecoration: 'line-through',
    color: '#CBCBCB'
  }
})

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => {
  return {
    '& .MuiToggleButtonGroup-grouped': {
      margin: theme.spacing(0.5),
      minWidth: '36px',
      height: '36px',
      lineHeight: '18px',
      border: '1px solid #EAEAEA',
      fontWeight: 'bold',
      color: '#727272',
      fontSize: '18px',
      '&.Mui-disabled': {
        border: '1px solid transparent'
      },
      '&:not(:first-of-type)': {
        borderRadius: '50%',
        border: '1px solid #EAEAEA'
      },
      '&:first-of-type': {
        borderRadius: '50%',
        border: '1px solid #EAEAEA'
      }
    }
  }
})

const StyledToggleButton = styled(ToggleButton)(({ theme }) => {
  return {
    '&.Mui-selected': {
      color: '#46A358'
    }
  }
})
const StyledTab = styled(Tab)(({ theme }) => {
  return {
    '&.Mui-selected': {
      color: '#46A358'
    }
  }
})

const ProductCard = props => {
  const [size, setSize] = useState('S')
  const [quantity, setQuantity] = useState(1)
  const [value, setValue] = useState('1')
  const classes = useStyles(props)
  const valueStars = 3.5
  const images = productData.imageUrls.map(image => {
    const imgObject = {
      original: `${image}`,
      thumbnail: `${image}`,
      thumbnailLabel: ' ',
      description: ' '
    }
    return imgObject
  })
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleSizeChange = (event, newSize) => {
    if (newSize !== null) {
      setSize(newSize)
    }
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
    <Grid container columnSpacing={7} columns={16}>
      <Grid item container xs={16} sm={8} columnSpacing={2}>
        <ImageGallery
          items={images}
          thumbnailPosition="left"
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
        sm={8}
        direction="column"
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography variant="h5" className={classes.productName}>
            {productData.name}
          </Typography>
        </Grid>
        <Grid item container sx={{ justifyContent: 'space-between' }}>
          <Grid item>
            <Typography variant="body1" className={classes.priceSection}>
              {`$${productData.currentPrice.toFixed(2)}`}
            </Typography>
            {productData.previousPrice && (
              <Typography variant="body1" className={classes.prevPriceSection} ml={1}>
                {`$${productData.previousPrice.toFixed(2)}`}
              </Typography>
            )}
          </Grid>
          <Grid item>
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
          </Grid>
        </Grid>
        <Grid item mt={1}>
          <Divider light />
        </Grid>
        <Grid item mt={2}>
          <Typography sx={{ fontSize: '1.1rem', fontWeight: '600' }}>Short Description:</Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ fontWeight: '300' }}>{productData.shortDescription}</Typography>
        </Grid>
        <Grid item mt={2}>
          <Typography sx={{ fontSize: '1.1rem', fontWeight: '600' }}>Size:</Typography>
        </Grid>
        {productData.sizes && (
          <Grid item>
            <StyledToggleButtonGroup
              size="small"
              exclusive
              value={size}
              onChange={handleSizeChange}
              aria-label="size"
            >
              {productData.sizes.map(sizeElem => (
                <StyledToggleButton key={sizeElem} value={sizeElem} aria-label={`size-${sizeElem}`}>
                  {sizeElem}
                </StyledToggleButton>
              ))}
            </StyledToggleButtonGroup>
          </Grid>
        )}
        <Grid item container spacing={2} mt={1} mb={3}>
          <Grid item>
            <Fab
              color="secondary"
              size="small"
              aria-label="add"
              sx={{ boxShadow: 'none' }}
              onClick={decreaseHandleClick}
            >
              <RemoveIcon />
            </Fab>
            <Typography variant="body1" color="initial" sx={{ fontSize: '20px', margin: '0 15px' }}>
              {quantity}
            </Typography>
            <Fab
              color="secondary"
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
              color="secondary"
              sx={{ boxShadow: 'none', fontWeight: 'bold' }}
            >
              Buy Now
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              sx={{ marginLeft: '5px', boxShadow: 'none', fontWeight: 'bold' }}
            >
              Add to cart
            </Button>
            <Button
              variant="outlined"
              color="secondary"
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
        <Grid item>
          <Typography variant="body1" sx={{ color: '#A5A5A5' }}>
            {'SKU: '}
          </Typography>
          <Typography>{productData.itemNo}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" sx={{ color: '#A5A5A5' }}>
            {'Categories: '}
          </Typography>
          <Typography>{productData.categories}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" sx={{ color: '#A5A5A5' }}>
            {'Tags: '}
          </Typography>
          <Typography>{productData.tags}</Typography>
        </Grid>
        <Grid item container mt={1} sx={{ alignItems: 'center' }} columnSpacing={1}>
          <Grid item>
            <Typography variant="body2" sx={{ fontSize: '1.1rem', fontWeight: '600' }}>
              {'Share this products: '}
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              sx={{ padding: 0, minWidth: 0, boxShadow: 'none' }}
            >
              <FacebookIcon color="secondary" />
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ padding: 0, minWidth: 0, boxShadow: 'none' }}
            >
              <TwitterIcon color="secondary" />
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ padding: 0, minWidth: 0, boxShadow: 'none' }}
            >
              <InstagramIcon color="secondary" />
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ padding: 0, minWidth: 0, boxShadow: 'none' }}
            >
              <MailOutlineIcon color="secondary" />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={16}>
        <Box sx={{ width: '100%', typography: 'body2' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <StyledTab label="Product Description" value="1" />
                <StyledTab label="Reviews(19)" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">Product Description</TabPanel>
            <TabPanel value="2">Reviews</TabPanel>
          </TabContext>
        </Box>
      </Grid>
    </Grid>
  )
}

export default ProductCard
