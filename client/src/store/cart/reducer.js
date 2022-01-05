/* eslint-disable no-underscore-dangle */
import { createSlice } from '@reduxjs/toolkit'
import {
  setBasket,
  increaseProductFromBasket,
  decreaseProductFromBasket,
  deleteProductFromBasket,
  deleteBasket,
  getBasket,
  updateBasket
} from './actions'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: []
  },
  reducers: {
    addProductToCartForLocalStorage: (state, action) => {
      const { product, cartQuantity } = action.payload
      const newProduct = {
        product,
        cartQuantity
      }
      state.products.push(newProduct)
    },
    deleteProductFromCartForLocalStorage: (state, action) => {
      const { product } = action.payload
      const cartFiltered = state.products.filter(
        productInCart => productInCart.product._id !== product._id
      )
      state.products = [...cartFiltered]
    },
    updateProductInCartForLocalStorage: (state, action) => {
      const { product, cartQuantity } = action.payload
      const newCart = state.products.map(productInCart => {
        if (productInCart.product._id === product._id) {
          productInCart.cartQuantity = cartQuantity
        }
        return productInCart
      })
      state.products = [...newCart]
    },
    increaseQuantityOfProductInCartForLocalstorage: (state, action) => {
      const { product } = action.payload
      const newCart = state.products.map(productInCart => {
        if (productInCart.product._id === product.product._id) {
          productInCart.cartQuantity += 1
        }
        return productInCart
      })
      state.products = [...newCart]
    },
    decreaseQuantityOfProductInCartForLocalstorage: (state, action) => {
      const { product } = action.payload
      const newCart = state.products.map(productInCart => {
        if (productInCart.product._id === product.product._id) {
          productInCart.cartQuantity -= 1
        }
        return productInCart
      })
      state.products = [...newCart]
    },
    deleteCartFromState: (state, action) => {
      const newState = {
        products: []
      }
      return newState
    }
  },
  extraReducers: {
    [setBasket.fulfilled]: (state, action) => action.payload,
    [updateBasket.fulfilled]: (state, action) => action.payload,
    [deleteProductFromBasket.fulfilled]: (state, action) => action.payload,
    [increaseProductFromBasket.fulfilled]: (state, action) => action.payload,
    [decreaseProductFromBasket.fulfilled]: (state, action) => action.payload,
    [deleteBasket.fulfilled]: (state, action) => action.payload,
    [getBasket.fulfilled]: (state, action) => action.payload
  }
})

const { reducer, actions } = cartSlice

export const {
  addProductToCartForLocalStorage,
  deleteProductFromCartForLocalStorage,
  decreaseQuantityOfProductInCartForLocalstorage,
  increaseQuantityOfProductInCartForLocalstorage,
  deleteCartFromState,
  updateProductInCartForLocalStorage
} = actions
export default reducer
