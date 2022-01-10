import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './auth/reducer'
import messageReducer from './message/reducer'
import catalogReducer from './catalog/reducer'
import cartReducer from './cart/reducer'
import productReducer from './products/reducer'
import wishlistReducer from './wishlist/reducer'
import reviewsReducer from './reviews/reducer'
import searchSlice from './serch/searchSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
  catalog: catalogReducer,
  cart: cartReducer,
  products: productReducer,
  wishlist: wishlistReducer,
  reviews: reviewsReducer,
  search: searchSlice
})

export default rootReducer
