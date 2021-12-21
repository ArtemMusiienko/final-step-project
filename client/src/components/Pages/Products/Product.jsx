import { current } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import './Products.scss'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import frame from '../../../assets/frame.svg'
import shopping from '../../../assets/shopping1.svg'
import heart from '../../../assets/heart1.svg'

/* eslint-disable */
const Product = ({ name, currentPrice, previousPrice = currentPrice, categories, imageUrls }) => {
   const [hover, setHover] = useState(false);
  const discount = Math.floor(((previousPrice - currentPrice) / previousPrice) * 100)
  const showPreviousPrice = () => {
    if (currentPrice !== previousPrice) {
      if (Number.isInteger(previousPrice)) {
        return `$${previousPrice}.00`
      }
      else {
        return `$${previousPrice}`
      }
    }
  }
   
  return (
    <Card
      sx={{ maxWidth: 250, maxHeight: 500, position: "relative" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <CardMedia component="img" height="250" width="250" image={imageUrls[0]} />
      {hover && (
        <div className='hover-container'>
          <img src={shopping} alt="" style={{marginRight:'10px'}} />
          <img src={heart} alt="" style={{marginRight:'10px'}} />
          <img src={frame} alt="" />
        </div>
      )}
      <CardContent>
        <Typography gutterBottom variant="h5">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <span className="cur-price">
            ${Number.isInteger(currentPrice) ? `${currentPrice}.00` : currentPrice}
          </span>
          <span className="prev-price">{showPreviousPrice()}</span>
          {currentPrice !== previousPrice ? (
            <div className="discount-container">
              <p className="discount-count">{discount}% OFF</p>
            </div>
          ) : null}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default Product
