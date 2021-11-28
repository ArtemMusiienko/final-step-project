import React from 'react'
import './Products.scss'
/* eslint-disable */
const Product = ({ name, currentPrice, previousPrice, categories, imageUrls }) => {
  const discount = Math.floor(((previousPrice - currentPrice) / previousPrice) * 100)
  return (
    <div className="product-container" data-id={categories}>
      <img width="250" height="250" className="product-image" src={imageUrls} alt="product" />
      <h1 className="product-header">{name}</h1>
      <span className="cur-price">${currentPrice}.00</span>
      <span className="prev-price">
        {currentPrice !== previousPrice ? `$${previousPrice}.00` : null}
      </span>
      {currentPrice !== previousPrice ? (
        <div className="discount-container">
          <p className="discount-count">{discount}% OFF</p>
        </div>
          ) : null}
    </div>
  )
}
export default Product
