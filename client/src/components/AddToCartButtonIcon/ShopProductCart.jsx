/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import AddToCartButtonIcon from './AddToCartButtonIcon'
import BageProductCart from './BageProductCart'

const ShopProductCart = ({ product }) => {
  const { products } = useSelector(state => state.cart)
  const [cartQuantity, setCartQuantity] = useState(0)
  useEffect(() => {
    const currentProduct = products.filter(
      productFromCart => productFromCart.product._id === product._id
    )
    if (currentProduct.length) {
      setCartQuantity(currentProduct[0].cartQuantity)
    } else {
      setCartQuantity(0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products])
  return cartQuantity > 0 ? (
    <BageProductCart product={product} quantityInCart={cartQuantity} />
  ) : (
    <AddToCartButtonIcon product={product} />
  )
}

export default ShopProductCart
