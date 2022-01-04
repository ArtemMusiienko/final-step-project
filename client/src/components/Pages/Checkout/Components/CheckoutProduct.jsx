/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyle = makeStyles(theme => {
  return {
    container: {
      display: 'grid',
      gridTemplateColumns: 'auto 30px 40px',
      columnGap: '7px',
      alignItems: 'center',
      marginBottom: '10px',
      paddingRight: '10px',
      paddingLeft: '10px',
      backgroundColor: '#FBFBFB'
    },
    image: {
      marginRight: '10px'
    },
    itemName: {
      marginBottom: '8px',
      color: '#3D3D3D',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '18px',
      display: '-webkit-box',
      webkitLineClamp: '2',
      webkitBoxOrient: 'vertical',
      overflow: 'hidden'
    },
    itemNumber: {
      fontWeight: 400,
      fontSize: '14px',
      color: '#727272'
    },
    itemPrice: {
      fontWeight: 700,
      fontSize: '18px',
      color: '#46A358'
    }
  }
})

const CheckoutProduct = ({ url, name, itemNo, cartQuantity, currentPrice }) => {
  const classes = useStyle()
  return (
    <Box className={classes.container} key={itemNo}>
      <img className={classes.image} width="70" height="70" src={url} alt="flower image" />
      <Typography className={classes.itemName}>{name}</Typography>
      <Typography className={classes.itemNumber}>
        <Typography style={{ color: '#A5A5A5' }}>SKU</Typography>
        {itemNo}
      </Typography>
      <Typography className={classes.itemNumber}>(x{cartQuantity})</Typography>
      <Typography className={classes.itemPrice}>{currentPrice * cartQuantity}</Typography>
    </Box>
  )
}
export default CheckoutProduct
