import React from 'react'
import './Products.scss'
import Product from './Product'

const ProductsAll = () => {
  const mockData = [
    {
      name: 'Barberton Daisy',
      currentPrice: 119.0,
      previousPrice: 119.0,
      categories: 'home',
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
      categories: 'house',
      imageUrls: ['assets/image3.png']
    },
    {
      name: 'Beach Spider Lily',
      currentPrice: 129.0,
      previousPrice: 129.0,
      categories: 'house',
      imageUrls: ['assets/image4.png']
    },
    {
      name: 'Blushing Bromeliad',
      currentPrice: 139.0,
      previousPrice: 139.0,
      categories: 'house',
      imageUrls: ['assets/image5.png']
    },
    {
      name: 'Aluminum Plant',
      currentPrice: 179.0,
      previousPrice: 279.0,
      categories: 'house',
      imageUrls: ['assets/image6.png']
    },
    {
      name: "Bird's Nest Fern",
      currentPrice: 99.0,
      previousPrice: 99.0,
      categories: 'house',
      imageUrls: ['assets/image7.png']
    },
    {
      name: 'Broadleaf Lady Palm',
      currentPrice: 29.0,
      previousPrice: 59.0,
      categories: 'house',
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
    <div className="products-section">
      {mockData.map(item => (
        <Product
          name={item.name}
          currentPrice={item.currentPrice}
          previousPrice={item.previousPrice}
          categories={item.categories}
          imageUrls={item.imageUrls}
          key={Date.now}
        />
      ))}
    </div>
  )
}

export default ProductsAll
