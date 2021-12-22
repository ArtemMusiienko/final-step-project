import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Button, SvgIcon } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Modal } from '@material-ui/core'
import CloseIcon from '@mui/icons-material/Close'
import { ReactComponent as ThankYou } from '../../../assets/image/thank-you.svg'
import CheckoutProduct from './Components/CheckoutProduct'

const useStyle = makeStyles(theme => {
  return {
    modal: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '578px',
      backgroundColor: 'white',
      boxShadow: 24,
      borderBottom: '10px solid #46A358'
    },
    header: {
      backgroundColor: '#46A3580F',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      padding: 15
    },
    shortInfo: {
      borderTop: '1px solid #46A35833',
      borderBottom: '1px solid #46A35833',
      marginBottom: 18,
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 0',
      '& > *:not(:last-child)': { borderRight: '1px solid #46A35833' }
    },
    shortInfoBox: {
      padding: '0 8px'
    },
    footer: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'center'
    },
    main: {},
    button: {
      backgroundColor: '#46A358',
      color: 'white',
      borderRadius: '5px',
      width: '162px',
      height: '45px',
      fontWeight: 'bold',
      textTransform: 'initial',
      marginBottom: 48,
      '&:hover': { backgroundColor: '#46A358' }
    },
    headerCloseBtn: {
      position: 'absolute',
      top: 15,
      right: 15
    },
    shortInfoTitle: {
      fontWeight: 400,
      color: '#727272',
      fontSize: 14
    },
    shortInfoText: {
      fontWeight: 700,
      color: '#727272'
    },
    productList: {
      borderTop: ' 1px solid #46A35833',
      borderBottom: '1px solid #46A35833',
      margin: '0 42px 0 42px'
    },
    productListTitle: {
      color: '#3D3D3D'
    }
  }
})

const CheckoutModal = ({ active, setActive }) => {
  // useEffect(async () => {
  //   const products = await fetch('http://localhost:5000/api/products')
  //   const productsJson = await products.json()
  //   setProduct(productsJson)
  // },[])
  const classes = useStyle()
  const [product, setProduct] = useState([])
  return (
    <Modal
      open={active}
      onClose={() => setActive(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={classes.modal}>
        <Box className={classes.header}>
          <CloseIcon
            className={classes.headerCloseBtn}
            style={{ color: '#46A358' }}
            onClick={() => setActive(false)}
          />
          <Box>
            <SvgIcon
              viewBox="0 0 80 80"
              style={{ width: '80px', height: '80px', marginTop: '15px' }}
              component={ThankYou}
            />
          </Box>
          <Typography style={{ color: '#727272', marginTop: 15 }}>
            Your order has been received
          </Typography>
        </Box>
        <Box className={classes.main}>
          <Box className={classes.shortInfo}>
            <Box style={{ marginLeft: '42px' }} className={classes.shortInfoBox}>
              <Typography variant="p" className={classes.shortInfoTitle}>
                Order Number
              </Typography>
              {/* <Typography variant='p' className={classes.shortInfoText}></Typography> */}
            </Box>
            <Box className={classes.shortInfoBox}>
              <Typography variant="p" className={classes.shortInfoTitle}>
                Date
              </Typography>
              {/* <Typography variant='p' className={classes.shortInfoText}></Typography> */}
            </Box>
            <Box className={classes.shortInfoBox}>
              <Typography variant="p" className={classes.shortInfoTitle}>
                Total
              </Typography>
              {/* <Typography variant='p' className={classes.shortInfoText}></Typography> */}
            </Box>
            <Box style={{ marginRight: '42px' }} className={classes.shortInfoBox}>
              <Typography variant="p" className={classes.shortInfoTitle}>
                Payment Method
              </Typography>
              {/* <Typography variant='p' className={classes.shortInfoText}></Typography> */}
            </Box>
          </Box>
          <Typography
            variant="p"
            style={{ fontWeight: 'bold', color: '#3D3D3D', marginLeft: '42px' }}
          >
            Order Details
          </Typography>
          {/* <Typography variant='p' className={classes.productListTitle}>Products</Typography> */}
          {/* <Typography variant='p' className={classes.productListTitle}>Qty</Typography> */}
          {/* <Typography variant='p' className={classes.productListTitle}>Subtotal</Typography> */}
          <Box className={classes.productList}>
            {/* {product.map((props)=><CheckoutProduct {...props}/>)} */}
          </Box>
        </Box>
        <Box className={classes.footer}>
          <Typography
            style={{
              color: '#727272',
              padding: '18px 47px 49px 47px',
              fontSize: '14px',
              lineHeight: '22px'
            }}
          >
            Your order is currently being processed. You will receive an order confirmation email
            shortly with the expected delivery date for your items.
          </Typography>
          <Button className={classes.button}>Track your order</Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default CheckoutModal
