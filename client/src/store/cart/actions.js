/* eslint-disable no-underscore-dangle */
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  createCart,
  updateCart,
  addProductToCart,
  deleteProductFromCart,
  getCart,
  deleteCart,
  decreaseProductQuantityFromCart
} from '../../api/cart'

export const setBasket = createAsyncThunk('cart/fetchSetCart', async (_, thunkAPI) => {
  const currentCartProducts = await thunkAPI.getState().cart.products
  if (!currentCartProducts.length) {
    let data = await getCart()
    if (data === null) {
      data = createCart()
    }
    return data
  }
  const cartFromDataBase = await getCart()
  if (cartFromDataBase === null) {
    const newCart = currentCartProducts.map(product => {
      const productForRequest = {
        product: product.product._id,
        cartQuantity: product.cartQuantity
      }
      return productForRequest
    })
    const data = await updateCart(newCart)
    return data
  }
  const newProducts = currentCartProducts.filter(product => {
    const matchProduct = cartFromDataBase.products.some(
      dataBaseProduct => dataBaseProduct.product._id === product.product._id
    )
    if (!matchProduct) {
      return product
    }
    return null
  })
  const updateQuantitiesInCart = cartFromDataBase.products.map(product => {
    currentCartProducts.forEach(productInCart => {
      if (productInCart.product._id === product.product._id) {
        product.cartQuantity += productInCart.cartQuantity
      }
    })
    return product
  })
  const newDataForUpdatingCart = [...updateQuantitiesInCart, ...newProducts]
  const newCart = newDataForUpdatingCart.map(product => {
    const productForRequest = {
      product: product.product._id,
      cartQuantity: product.cartQuantity
    }
    return productForRequest
  })
  const data = await updateCart(newCart)
  return data
})

export const updateBasket = createAsyncThunk(
  'cart/updateCart',
  async ({ product, cartQuantity }, thunkAPI) => {
    const currentCartProducts = await thunkAPI.getState().cart.products
    const cheackProductInCart = currentCartProducts.some(
      productInCart => productInCart.product._id === product._id
    )
    if (cheackProductInCart) {
      const newCart = currentCartProducts.map(productInCart => {
        if (productInCart.product._id === product._id) {
          return {
            product: productInCart.product._id,
            cartQuantity: cartQuantity
          }
        }
        const productForRequest = {
          product: productInCart.product._id,
          cartQuantity: productInCart.cartQuantity
        }
        return productForRequest
      })
      const data = await updateCart(newCart)
      return data
    }
    const newCart = currentCartProducts.map(productInCart => {
      const productForRequest = {
        product: productInCart.product._id,
        cartQuantity: productInCart.cartQuantity
      }
      return productForRequest
    })
    const currentProduct = {
      product: product._id,
      cartQuantity
    }
    newCart.push(currentProduct)
    const data = await updateCart(newCart)
    return data
  }
)

export const increaseProductFromBasket = createAsyncThunk(
  'cart/fetchIncreaseProductFromCar',
  async ({ productId }) => {
    const data = await addProductToCart(productId)
    return data
  }
)

export const decreaseProductFromBasket = createAsyncThunk(
  'cart/fetchDecreaseProductFromCart',
  async ({ productId }) => {
    const data = await decreaseProductQuantityFromCart(productId)
    return data
  }
)

export const deleteProductFromBasket = createAsyncThunk(
  'cart/fetchDeleteProductFromCart',
  async ({ productId }) => {
    const data = await deleteProductFromCart(productId)
    return data
  }
)

export const deleteBasket = createAsyncThunk('cart/fetchDeleteBasket', async () => {
  const data = await deleteCart()
  return data
})

export const getBasket = createAsyncThunk('cart/fetchGetCart', async () => {
  const data = await getCart()
  return data
})
