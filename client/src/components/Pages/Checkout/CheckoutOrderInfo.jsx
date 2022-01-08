/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useTheme } from '@mui/material/styles'
import { Divider, Typography } from '@mui/material'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Box } from '@mui/system'
import Image from 'material-ui-image'

const CheckoutOrderInfo = () => {
  const theme = useTheme()
  const { products } = useSelector(state => state.cart)
  const [totalAmount, setTotalAmount] = useState(0)
  useEffect(() => {
    const amount = products.reduce(
      (accum, currentValue) =>
        accum + currentValue.cartQuantity * currentValue.product.currentPrice,
      0
    )
    setTotalAmount(amount)
  }, [products])
  return (
    <>
      <Typography
        variant="body1"
        sx={{
          fontSize: '1.05rem',
          fontWeight: 700,
          color: 'text.primary',
          marginBottom: '5px'
        }}
      >
        Your Order
      </Typography>
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', columnGap: '5px' }}>
          <Typography variant="body1" color={theme.text.primary} sx={{ fontWeight: '500' }}>
            Products
          </Typography>
          <Typography variant="body1" color={theme.text.primary} sx={{ fontWeight: '500' }}>
            Subtotal
          </Typography>
        </Box>
        <Divider sx={{ margin: '10px 0' }} />
        {products.length ? (
          <>
            {products.map(product => (
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
                <Box sx={{ display: 'flex', flexGrow: 1, columnGap: '5px' }}>
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
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    columnGap: '5px',
                    minWidth: '100px'
                  }}
                >
                  <Box>{`(x${product.cartQuantity})`}</Box>
                  <Box sx={{ color: theme.palette.primary.main, paddingRight: '3px' }}>{`($${(
                    product.cartQuantity * product.product.currentPrice
                  ).toFixed(2)})`}</Box>
                </Box>
              </Box>
            ))}
          </>
        ) : (
          <Box sx={{ textAlign: 'center' }}> Cart is empty </Box>
        )}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '5px 0',
            color: 'text.primary'
          }}
        >
          <Box>Subtotal</Box>
          <Box sx={{ fontWeight: 500 }}>{`$${totalAmount.toFixed(2)}`}</Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '5px 0',
            color: 'text.primary'
          }}
        >
          <Box>Shipping</Box>
          <Box sx={{ fontWeight: 500 }}>$0</Box>
        </Box>
        <Divider sx={{ margin: '15px 0' }} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'text.primary'
          }}
        >
          <Box sx={{ fontWeight: 700, color: theme.text.primary }}>Total</Box>
          <Box sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
            {`$${totalAmount.toFixed(2)}`}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default CheckoutOrderInfo
