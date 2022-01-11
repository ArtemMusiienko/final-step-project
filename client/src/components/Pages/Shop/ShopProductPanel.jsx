/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react'
import { Grid, Pagination } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import useMediaQuery from '@mui/material/useMediaQuery'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Zoom from '@mui/material/Zoom'
import ShopProduct from './ShopProduct'
import usePagination from './Pagination'

const ShopProductPanel = () => {
  const result = useSelector(state => state.search.result)
  const { products } = useSelector(state => state.products)
  const [productList, setProductList] = useState(result)
  const [productsOnPage, setProductsOnPage] = useState(9)
  const [page, setPage] = useState(1)
  const location = useLocation()
  const params = useParams()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: -100
  })
  const handleClick = event => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  useEffect(() => {
    setProductList(result)
  }, [result])
  useEffect(() => {
    setPage(1)
    productsPerPages.jump(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productList])
  useEffect(() => {
    if (matches) {
      setProductsOnPage(9)
    } else {
      setProductsOnPage(8)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matches])
  useEffect(() => {
    if (location.pathname === '/shop') {
      setProductList(result)
      return
    }
    if (params.categories) {
      if (params.categories === 'sale') {
        const dataProduct = products.filter(product => product.previousPrice)
        setProductList(dataProduct)
        return
      }
      setProductList(filteredProducts())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, products])
  const filteredProducts = () => {
    const category = params.categories
    return products.filter(product => {
      const productParse = product.categories.split('-').reverse()
      return productParse[0] === category
    })
  }
  const paginationPages = () => Math.ceil(productList.length / productsOnPage)
  const productsPerPages = usePagination(productList, productsOnPage)
  const handleChange = (e, p) => {
    handleClick()
    setPage(p)
    productsPerPages.jump(p)
  }
  return (
    <Grid item container spacing={{ xs: 2, md: 2 }}>
      {productList.length ? (
        productsPerPages.currentData().map(product => (
          <Grid key={product._id} item xs={6} sm={4} md={4}>
            <ShopProduct productId={product._id} />
          </Grid>
        ))
      ) : (
        <Grid
          container
          sx={{
            color: 'grey !important',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '2rem'
          }}
        >
          Not found result
        </Grid>
      )}
      <Grid container sx={{ display: 'flex', justifyContent: 'center' }} mt={2}>
        <Zoom in={trigger}>
          <Pagination
            count={paginationPages()}
            defaultPage={1}
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
          />
        </Zoom>
      </Grid>
    </Grid>
  )
}

export default React.memo(ShopProductPanel)
