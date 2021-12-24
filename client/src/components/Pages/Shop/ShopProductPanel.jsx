/* eslint-disable no-underscore-dangle */
import { Grid, Pagination } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import useMediaQuery from '@mui/material/useMediaQuery'
import ShopProduct from './ShopProduct'
import usePagination from './Pagination'

const ShopProductPanel = () => {
  const { products } = useSelector(state => state.products)
  const [productList, setProductList] = useState([])
  const [productsOnPage, setProductsOnPage] = useState(9)
  const [page, setPage] = useState(1)
  const location = useLocation()
  const params = useParams()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      setProductList(products)
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
    setPage(p)
    productsPerPages.jump(p)
  }
  return (
    <Grid item container spacing={{ xs: 2, md: 2 }}>
      {productsPerPages.currentData().map(product => (
        <Grid key={product._id} item xs={6} sm={4} md={4}>
          <ShopProduct productId={product._id} />
        </Grid>
      ))}
      <Grid container sx={{ display: 'flex', justifyContent: 'center' }} mt={2}>
        <Pagination
          count={paginationPages()}
          defaultPage={1}
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  )
}

export default ShopProductPanel
