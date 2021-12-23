/* eslint-disable no-underscore-dangle */
import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import ShopProduct from './ShopProduct'

const ShopProductPanel = () => {
  const { products } = useSelector(state => state.products)
  const location = useLocation()
  console.log(location)
  const [productList, setProductList] = useState([])
  const splitLocation = () => location.pathname.split('/')
  const filterProduct = product => product.categories.split('-')[0]
  useEffect(() => {
    if (location.pathname === '/shop') {
      setProductList(products)
    }
    if (location.pathname === '/shop/sale') {
      const dataProduct = products.filter(product => product.previousPrice)
      setProductList(dataProduct)
    }
    if (location.pathname === '/shop/house') {
      const dataProduct = products.filter(product => {
        const filterParam = filterProduct(product)
        if (splitLocation().some(element => element === filterParam)) {
          return product
        }
        return null
      })
      setProductList(dataProduct)
    }
    if (location.pathname === '/shop/outdoors') {
      const dataProduct = products.filter(product => {
        const filterParam = filterProduct(product)
        if (splitLocation().some(element => element === filterParam)) {
          return product
        }
        return null
      })
      setProductList(dataProduct)
    }
    if (location.pathname === '/shop/seeds') {
      const dataProduct = products.filter(product => {
        const filterParam = filterProduct(product)
        if (splitLocation().some(element => element === filterParam)) {
          return product
        }
        return null
      })
      setProductList(dataProduct)
    }
    if (location.pathname === '/shop/trees') {
      const dataProduct = products.filter(product => {
        const filterParam = filterProduct(product)
        if (splitLocation().some(element => element === filterParam)) {
          return product
        }
        return null
      })
      setProductList(dataProduct)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, products])
  return (
    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 2, sm: 8, md: 12 }}>
      {productList.map(product => (
        <Grid key={product._id} item xs={2} sm={4} md={4}>
          <ShopProduct productId={product._id} />
        </Grid>
      ))}
    </Grid>
  )
}

export default ShopProductPanel
