import React, { useState } from 'react'
import './Products.scss'

/* eslint-disable */
const Product = ({ name, currentPrice, previousPrice = currentPrice, categories, imageUrls,} )=> {
  const discount = Math.floor(((previousPrice - currentPrice) / previousPrice) * 100)
  const showPreviousPrice = () => {
    if (currentPrice !== previousPrice) {
      if (Number.isInteger(previousPrice)) {
        return `$${previousPrice}.00`
      }
      else {
        return `$${previousPrice}`
      }
    }
  }
  return (
    <div className="product-container" data-id={categories}>
      
      <img width="250" height="250" className="product-image" src={imageUrls[0]} alt="product" />
      <h1 className="product-header">{name}</h1>
      <span className="cur-price">${Number.isInteger(currentPrice)?  `${currentPrice}.00` : currentPrice}</span>

      <span className="prev-price">
       {showPreviousPrice()}
      </span>
      {currentPrice !== previousPrice ? (
        <div className="discount-container">
          <p className="discount-count">{discount}% OFF</p>
        </div>
      ) : null}
      
    </div>
  );
}
export default Product
