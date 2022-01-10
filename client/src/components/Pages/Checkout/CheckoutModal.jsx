/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import date from 'date-and-time'
import { useTheme } from '@mui/styles'
import Box from '@mui/material/Box'
import {
  Button,
  SvgIcon,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material'
import Divider from '@mui/material/Divider'
import CloseIcon from '@mui/icons-material/Close'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import Image from 'material-ui-image'
import useMediaQuery from '@mui/material/useMediaQuery'
import { ReactComponent as ThankYou } from '../../../assets/image/thank-you.svg'

const CheckoutModal = ({ orderReceived }) => {
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const navigate = useNavigate()
  const handleClose = () => {
    setOpen(false)
    window.scrollTo({ top: 0 })
    navigate('/shop')
  }
  useEffect(() => {
    if (orderReceived) {
      setOpen(true)
    }
  }, [orderReceived])
  const descriptionElementRef = useRef(null)
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [open])
  return (
    <Dialog
      open={open}
      fullScreen={fullScreen}
      onClose={handleClose}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      closeAfterTransition
      scroll="body"
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
      sx={{
        padding: 0,
        '& .MuiPaper-root': {
          borderBottom: '10px solid',
          borderColor: theme.palette.primary.main,
          borderRadius: '0'
        }
      }}
    >
      <DialogTitle
        id="alert-dialog-title"
        sx={{
          backgroundColor: 'rgba(70, 163, 88, 0.06)',
          padding: 0,
          border: '1px solid',
          borderColor: theme.palette.divider
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SvgIcon
            viewBox="0 0 80 80"
            style={{ width: '60px', height: '60px', marginTop: '15px' }}
            component={ThankYou}
          />
          <Typography
            variant="body1"
            style={{ color: '#727272', marginTop: 15, fontSize: '1.1rem', marginBottom: '15px' }}
          >
            Your order has been received
          </Typography>
        </Box>
        <Button
          onClick={handleClose}
          size="small"
          sx={{ position: 'absolute', top: '5px', right: '5px', minWidth: '30px' }}
        >
          <CloseIcon sx={{ fontSize: '1.1rem' }} />
        </Button>
      </DialogTitle>
      <DialogContent sx={{ padding: 0 }}>
        <Box
          sx={{
            display: 'flex',
            padding: { xs: '15px', sm: '15px 30px' },
            color: '#727272',
            justifyContent: 'space-between',
            textAlign: 'center'
          }}
        >
          <Box>
            <Box variant="body1" sx={{ fontSize: '0.7rem' }}>
              Order Number
            </Box>
            {orderReceived && (
              <Box sx={{ textAlign: 'center', fontWeight: 700, fontSize: '0.7rem' }}>
                {orderReceived.orderNo}
              </Box>
            )}
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box>
            <Box sx={{ fontSize: '0.7rem' }}>Date</Box>
            {orderReceived && (
              <Box sx={{ textAlign: 'center', fontWeight: 700, fontSize: '0.7rem' }}>
                {date.format(new Date(orderReceived.date), 'D, MMM YYYY')}
              </Box>
            )}
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box>
            <Box sx={{ fontSize: '0.7rem' }}>Total</Box>
            {orderReceived && (
              <Box sx={{ textAlign: 'center', fontWeight: 700, fontSize: '0.7rem' }}>
                {orderReceived.totalSum.toFixed(2)}
              </Box>
            )}
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box>
            <Box sx={{ fontSize: '0.7rem' }}>Payment method</Box>
            {orderReceived && (
              <Box sx={{ textAlign: 'center', fontWeight: 700, fontSize: '0.7rem' }}>
                {orderReceived.paymentInfo}
              </Box>
            )}
          </Box>
        </Box>
        <Divider />
        <Box sx={{ padding: { xs: '15px', sm: '15px 30px' } }}>
          <Box
            sx={{
              fontSize: '1rem',
              fontWeight: 700,
              color: theme.text.primary,
              marginBottom: '5px'
            }}
          >
            Order Details
          </Box>
          <Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                columnGap: '5px',
                fontWeight: 500
              }}
            >
              <Box
                color={theme.text.primary}
                sx={{ fontWeight: '500', maxWidth: { xs: '55%', sm: '40%' }, width: '100%' }}
              >
                Products
              </Box>
              <Box color={theme.text.primary} sx={{ fontWeight: '500' }}>
                Qty
              </Box>
              <Box color={theme.text.primary} sx={{ fontWeight: '500' }}>
                Subtotal
              </Box>
            </Box>
            <Divider sx={{ margin: '10px 0' }} />
            {orderReceived &&
              orderReceived.products.map(product => (
                <Box
                  key={product.product._id}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: theme.palette.grey[100],
                    margin: '5px 0',
                    columnGap: '5px'
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexGrow: 1,
                      columnGap: '5px',
                      maxWidth: { xs: '55%', sm: '40%' }
                    }}
                  >
                    <Box sx={{ width: '70px' }}>
                      <Image
                        src={product.product.imageUrls[0]}
                        style={{ width: '70px', color: '#46A358' }}
                        cover
                        imageStyle={{ width: 'inherit', height: '100%', display: 'block' }}
                        color="#f5f5f5"
                        loading={<CircularProgress color="inherit" />}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1,
                        justifyContent: 'center'
                      }}
                    >
                      <Box
                        color={theme.text.primary}
                        sx={{ fontWeight: 600, textTransform: 'capitalize' }}
                      >
                        {product.product.name}
                      </Box>
                      <Box
                        color={theme.palette.action.disabled}
                        sx={{ fontWeight: 400, textTransform: 'capitalize', fontSize: '0.8rem' }}
                      >
                        {`SKU: ${product.product.itemNo}`}
                      </Box>
                    </Box>
                  </Box>
                  <Box>{`(x ${product.cartQuantity})`}</Box>
                  <Box
                    sx={{
                      color: theme.palette.primary.main,
                      paddingRight: '3px',
                      fontWeight: 700
                    }}
                  >
                    {`$${(product.cartQuantity * product.product.currentPrice).toFixed(2)}`}
                  </Box>
                </Box>
              ))}
            <Box sx={{ paddingLeft: '30%' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
                <Box variant="body1">Shiping</Box>
                <Box variant="body1" sx={{ fontWeight: 500 }}>
                  $0
                </Box>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
                <Box variant="body1" sx={{ color: theme.text.primary, fontWeight: 700 }}>
                  Total
                </Box>
                {orderReceived && (
                  <Box variant="body1" sx={{ color: theme.palette.primary.main, fontWeight: 700 }}>
                    {`$${orderReceived.totalSum.toFixed(2)}`}
                  </Box>
                )}
              </Box>
            </Box>
            <Divider sx={{ margin: '10px 0' }} />
            <Box sx={{ textAlign: 'center', fontSize: '0.8rem', color: '#727272' }}>
              Your order is currently being processed. You will receive an order confirmation email
              shortly with the expected delivery date for your items.
            </Box>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', margin: '20px 0' }}>
        <Button onClick={handleClose} color="primary" variant="contained">
          Continue Shopping
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default CheckoutModal
