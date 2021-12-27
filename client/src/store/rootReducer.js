import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './auth/reducer'
import messageReducer from './message/reducer'
import catalogReducer from './catalog/reducer'
import basketReducer from './basket/basketSlise'
import productReducer from './products/reducer'
import wishlistReducer from './wishlist/reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
  catalog: catalogReducer,
  basket: basketReducer,
  products: productReducer,
  wishlist: wishlistReducer
})

export default rootReducer
