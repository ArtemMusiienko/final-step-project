import React, { useState } from 'react'
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import { Typography } from '@mui/material'

const useStyle = makeStyles(theme => {
  return {
    box: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px',
      width: '321px',
      marginLeft: '157px'
    },
    normalText: {
      fontWeight: 500,
      fontSize: '18px',
      color: '#3D3D3D'
    },
    thinText: {
      fontWeight: 'normal',
      fontSize: '15px',
      color: '#3D3D3D'
    },
    boldText: {
      fontWeight: 'bold',
      fontSize: '16px',
      color: '#3D3D3D'
    }
  }
})
const CheckoutTotal = () => {
  const classes = useStyle()
  const [totalAmount, setTotalAmount] = useState(0)

  return (
    <>
      <Box className={classes.box}>
        <Typography className={classes.thinText}>Subtotal</Typography>
        <Typography className={classes.normalText}>Sum</Typography>
      </Box>
      <Box className={classes.box}>
        <Typography className={classes.thinText}>Coupon Discount</Typography>
        <Typography className={classes.thinText}>(-) 00.00</Typography>
      </Box>
      <Box className={classes.box}>
        <Typography className={classes.thinText}>Shipping</Typography>
        <Typography className={classes.normalText}>Sum</Typography>
      </Box>
      <Box className={classes.box}>
        <Typography className={classes.boldText}>Total</Typography>
        <Typography style={{ color: '#46A358' }} className={classes.boldText}>
          order total
        </Typography>
      </Box>
    </>
  )
}
export default CheckoutTotal
