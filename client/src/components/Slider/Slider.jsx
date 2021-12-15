import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box } from '@mui/system'
import { Typography, Button, Avatar, CardMedia } from '@mui/material'
import Carousel from 'react-material-ui-carousel'

const Slider = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('/slides').then(slides => {
      setData(slides.data)
    })
  }, [])

  return (
    <Carousel>
      {data.map((item, i) => (
        <Item
          key={item.id}
          item={item}
          title={item.title}
          description={item.description}
          name={item.name}
          imageUrl={item.imageUrl}
        />
      ))}
    </Carousel>
  )
}
const Item = ({ title, description, name, imageUrl }) => (
  <Box>
    <CardMedia image={imageUrl} style={{ height: 450 }}>
      <Typography style={{ marginLeft: 20, color: 'white' }}>{name}</Typography>
      <Typography style={{ marginLeft: 20, color: 'white' }}>{description}</Typography>
      <Typography style={{ marginLeft: 20, color: 'white' }}>{title}</Typography>
      <Button style={{ marginLeft: 20, marginTop: 300, background: 'white' }}>Shop Now</Button>
    </CardMedia>
  </Box>
)
export default Slider
