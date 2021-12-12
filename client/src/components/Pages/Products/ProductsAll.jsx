import React, { useEffect, useState } from 'react'
import './Products.scss'
import Grid from '@mui/material/Grid'
import axios from 'axios'
import Product from './Product'
import { Categories } from '../../Categories/Categories'

export const ProductsAll = () => {
  const [fulldata, setFullData] = useState([])
  const [data, setData] = useState([])
  const [catalog, setCatalog] = useState([])
  const [category, setCategory] = useState()
  const [priceValue, setPriceValue] = useState([0, 100])
  const handleSlider = value => {
    setPriceValue(value)
  }
  const useGetProducts = () => {
    useEffect(() => {
      axios.get('http://localhost:5000/api/products').then(products => {
        setData(products.data)
        setFullData(products.data)
      })
    }, [])
  }
  const useGetCatalog = () => {
    useEffect(() => {
      axios.get('http://localhost:5000/api/catalog').then(catalogItem => {
        setCatalog(catalogItem.data)
      })
    }, [])
  }
  const handleChange = (categoryName, price) => {
    axios
      .get(`http://localhost:5000/api/products/filter?categories=${categoryName}`)
      .then(categoryItem => {
        setData(categoryItem.data.products)
      })
  }
  const handleFilterButton = price => {
    const dataForFilter = data
    setData(
      dataForFilter.filter(
        itemFilter => itemFilter.currentPrice >= price[0] && itemFilter.currentPrice <= price[1]
      )
    )
    console.log(price)
    console.log(data.length)
  }
  return (
    <div className="catalog-wrapper">
      {useGetProducts()}
      {useGetCatalog()}
      <Categories
        data={catalog}
        handleFilterButton={handleFilterButton}
        priceValue={priceValue}
        handleSlider={handleSlider}
        handleChange={handleChange}
      />
      <div className="products-grid">
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {data.map(item => (
            <Grid key={item.id} item xs={2} sm={4} md={4}>
              <Product
                name={item.name}
                currentPrice={item.currentPrice}
                previousPrice={item.previousPrice}
                categories={item.categories}
                imageUrls={item.imageUrls}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default ProductsAll
