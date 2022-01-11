/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useTheme } from '@mui/material/styles'
import Image from 'material-ui-image'
import { Box, Fab, IconButton, SvgIcon } from '@mui/material'
import CircularProgress from '@material-ui/core/CircularProgress'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { ReactComponent as deleteIcon } from '../../../assets/deleteIcon.svg'

const CartCard = ({
  productFromCart,
  decreaseHandleClick,
  increaseHandleClick,
  handleDeleteIconClick
}) => {
  const theme = useTheme()
  const [product, setProduct] = useState(productFromCart)
  const { products: productsAll } = useSelector(state => state.products)
  const [errorMessage, setErrorMessage] = useState('')
  useEffect(() => {
    const currentProduct = productsAll.find(
      productOnStock => productOnStock._id === productFromCart.product._id
    )
    if (productFromCart.cartQuantity > currentProduct.quantity) {
      setErrorMessage(`Sorry on stock available only ${currentProduct.quantity} pcs`)
    }
  }, [productsAll])
  useEffect(() => {
    setProduct(productFromCart)
    const currentProduct = productsAll.find(
      productOnStock => productOnStock._id === productFromCart.product._id
    )
    if (productFromCart.cartQuantity > currentProduct.quantity) {
      setErrorMessage(`Sorry on stock available only ${currentProduct.quantity} pcs`)
      return null
    }
    setErrorMessage('')
    return null
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productFromCart])
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#FBFBFB',
          margin: '5px 0',
          columnGap: { xs: '5px', sm: '15px' },
          fontSize: { xs: '0.7rem', sm: '1rem' }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            columnGap: '5px',
            maxWidth: { xs: '55%', sm: '40%' },
            width: '100%'
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
            <Box color={theme.text.primary} sx={{ fontWeight: 600, textTransform: 'capitalize' }}>
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
            flexGrow: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            columnGap: '5px'
          }}
        >
          <Box sx={{ minWidth: { xs: 0, sm: '20%' }, display: { xs: 'none', sm: 'block' } }}>
            {`$${product.product.currentPrice.toFixed(2)}`}
          </Box>
          <Box
            sx={{
              minWidth: { xs: '40%', sm: '30%' },
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <Fab
              color="primary"
              size="small"
              aria-label="add"
              sx={{
                boxShadow: 'none',
                width: { xs: '20px', sm: '30px' },
                height: { xs: '20px', sm: '30px' },
                minHeight: { xs: '20px', sm: '30px' }
              }}
              onClick={() => decreaseHandleClick(product.product._id)}
            >
              <RemoveIcon />
            </Fab>
            <Box>{product.cartQuantity}</Box>
            <Fab
              color="primary"
              size="small"
              aria-label="add"
              sx={{
                boxShadow: 'none',
                width: { xs: '20px', sm: '30px' },
                height: { xs: '20px', sm: '30px' },
                minHeight: { xs: '20px', sm: '30px' }
              }}
              onClick={() => increaseHandleClick(product.product._id)}
            >
              <AddIcon />
            </Fab>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              columnGap: '5px',
              minWidth: { xs: '45%', sm: '40%' }
            }}
          >
            <Box
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              {`$${(product.cartQuantity * product.product.currentPrice).toFixed(2)}`}
            </Box>
            <Box>
              <IconButton
                sx={{ color: '#FBFBFB', padding: { xs: 0, sm: '10px' } }}
                onClick={() => handleDeleteIconClick(product.product._id)}
              >
                <SvgIcon component={deleteIcon} viewBox="0 0 19 21" fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
      {errorMessage && (
        <Box
          sx={{
            color: theme.palette.error.main,
            margin: '5px 0',
            fontSize: { xs: '0.7rem', sm: '1rem' },
            textAlign: 'center'
          }}
        >
          {errorMessage}
        </Box>
      )}
    </>
  )
}

export default React.memo(CartCard)
