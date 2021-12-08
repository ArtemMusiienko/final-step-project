import React from 'react'
import './Products.scss'
import Grid from '@mui/material/Grid'
import Product from './Product'
import { Categories } from '../Categories/Categories'

export const ProductsAll = () => {
  const mockData = [
    {
      name: 'Barberton Daisy',
      currentPrice: 119.0,
      previousPrice: 119.0,
      categories: 'Home',
      imageUrls: ['assets/image1.png']
    },
    {
      name: 'Angel Wing Begonia',
      currentPrice: 169.0,
      previousPrice: 169.0,
      categories: 'Potter plants',
      imageUrls: ['assets/image2.png']
    },
    {
      name: 'African Violet',
      currentPrice: 199.0,
      previousPrice: 229.0,
      categories: 'House',
      imageUrls: ['assets/image3.png']
    },
    {
      name: 'Beach Spider Lily',
      currentPrice: 129.0,
      previousPrice: 129.0,
      categories: 'House',
      imageUrls: ['assets/image4.png']
    },
    {
      name: 'Blushing Bromeliad',
      currentPrice: 139.0,
      previousPrice: 139.0,
      categories: 'House',
      imageUrls: ['assets/image5.png']
    },
    {
      name: 'Aluminum Plant',
      currentPrice: 179.0,
      previousPrice: 279.0,
      categories: 'House',
      imageUrls: ['assets/image6.png']
    },
    {
      name: "Bird's Nest Fern",
      currentPrice: 99.0,
      previousPrice: 99.0,
      categories: 'House',
      imageUrls: ['assets/image7.png']
    },
    {
      name: 'Broadleaf Lady Palm',
      currentPrice: 29.0,
      previousPrice: 59.0,
      categories: 'House',
      imageUrls: ['assets/image8.png']
    },
    {
      name: 'Chinese Evergreen',
      currentPrice: 39.0,
      previousPrice: 39.0,
      categories: 'Seeds',
      imageUrls: ['assets/image9.png']
    }
  ]
  return (
    <>
      <Categories data={mockData} />
      <div className="products-grid">
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {mockData.map(item => (
            <Grid key={Date.now} item xs={2} sm={4} md={4}>
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
    </>
  )
}

export default ProductsAll
