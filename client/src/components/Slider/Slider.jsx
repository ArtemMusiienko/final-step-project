import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, height } from '@mui/system'
import { Typography, Button, CardMedia, Avatar } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import { Link } from 'react-router-dom'

const Slider = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('/slides').then(slides => {
      setData(slides.data)
    })
  }, [])

  return (
    <Box style={{ background: '#FBFBFB', marginTop: 12, marginBottom: 46 }}>
      <Carousel>
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
    </Box>
  )
}
const Item = ({ title, description, name, imageUrl, htmlContent }) => (
  <Box style={{ display: 'flex', height: 450, marginRight: 123, marginLeft: 40 }}>
    <Box style={{ marginTop: 68 }}>
      <Typography
        style={{
          marginLeft: 20,
          color: 'black',
          fontSize: 14,
          fontFamily: 'Cera Pro',
          fontWeight: 500
        }}
      >
        {title}
      </Typography>
      <Typography
        style={{
          marginLeft: 20,
          color: 'black',
          fontSize: 70,
          fontWeight: 900,
          fontFamily: 'Cera Pro'
        }}
      >
        Let’s Make a Better <span style={{ color: '#46A358' }}>Planet</span>
      </Typography>
      <Typography style={{ marginLeft: 20, color: 'black' }}>{htmlContent}</Typography>
      <Link to="/shop" style={{ textDecoration: ' none' }}>
        <Button style={{ marginTop: 88, marginLeft: 20, background: '#46A358', color: 'white' }}>
          Shop Now
        </Button>
      </Link>
    </Box>
    <Box>
      <Avatar variant="square" src={imageUrl} style={{ height: 450, width: 290 }} />
    </Box>
  </Box>
)
export default Slider
