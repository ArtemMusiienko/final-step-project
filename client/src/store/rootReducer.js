import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './auth/reducer'
import messageReducer from './message/reducer'
import catalogReducer from './catalog/reducer'
import cartReducer from './cart/reducer'
import productReducer from './products/reducer'
import wishlistReducer from './wishlist/reducer'
import reviewsReducer from './reviews/reducer'
import searchSlice from './search/searchSlice'
import sliderReducer from './slider/reducer'
import subscriberReducer from './subscribe/reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
  catalog: catalogReducer,
  cart: cartReducer,
  products: productReducer,
  wishlist: wishlistReducer,
  reviews: reviewsReducer,
  slider: sliderReducer,
  subscriber: subscriberReducer,
  search: searchSlice
})

export default rootReducer
