import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { makeStyles, createStyles } from '@mui/styles'
import { useTheme } from '@mui/material/styles'
import { Box } from '@mui/system'
import { useSelector } from 'react-redux'
import Image from 'material-ui-image'
import { Typography, Button } from '@mui/material'
import CircularProgress from '@material-ui/core/CircularProgress'
import Carousel from 'react-material-ui-carousel'

const useStyles = makeStyles(theme =>
  createStyles({
    sliderStyles: {
      backgroundColor: '#FBFBFB',
      [theme.breakpoints.down('sm')]: {
        margin: '16px 0',
        padding: '5px'
      },
      [theme.breakpoints.up('sm')]: {
        margin: '16px 0 30px',
        padding: '15px'
      },
      [theme.breakpoints.up('md')]: {
        margin: '16px 0 50px',
        padding: '20px 60px'
      }
    }
  })
)

const Slider = props => {
  const classes = useStyles(props)
  const slider = useSelector(state => state.slider)
  const [data, setData] = useState(slider)
  useEffect(() => {
    setData(slider)
  }, [slider])

  return (
    <Carousel className={classes.sliderStyles}>
      {data.map((item, i) => (
        <Item
          key={item.id}
          item={item}
          title={item.title}
          description={item.description}
          name={item.name}
          imageUrl={item.imageUrl}
          htmlContent={item.htmlContent}
        />
      ))}
    </Carousel>
  )
}

const Item = ({ title, description, name, imageUrl, htmlContent }) => {
  const theme = useTheme()
  const navigate = useNavigate()
  const handleCheckoutClick = () => {
    window.scrollTo({ top: 0 })
    navigate('/shop')
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          rowGap: '10px',
          width: '60%'
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 500,
            fontSize: { xs: 11, sm: '1rem', md: '1.2rem' }
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: 20, sm: 30, md: 50, lg: 70 },
            fontWeight: 800
          }}
        >
          Let’s Make a Better <span style={{ color: theme.palette.primary.main }}>Planet</span>
        </Typography>
        <Typography variant="body1" sx={{ fontSize: { xs: 10, sm: 14, md: '1rem' } }}>
          {htmlContent}
        </Typography>
        <Button
          variant="contained"
          sx={{ textTransform: 'capitalize', boxShadow: 'none', width: 100 }}
          onClick={handleCheckoutClick}
        >
          Shop Now
        </Button>
      </Box>
      <Box sx={{ width: '40%', alignSelf: 'center' }}>
        <Image
          src={imageUrl}
          style={{
            width: '100%',
            color: theme.palette.primary.main,
            objectFit: 'contain'
          }}
          color="inherit"
          imageStyle={{ display: 'block' }}
          loading={<CircularProgress color="inherit" />}
        />
      </Box>
    </Box>
  )
}

export default Slider
