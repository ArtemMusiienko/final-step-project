import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './auth/reducer'
import messageReducer from './message/reducer'
import catalogReducer from './catalog/reducer'
import basketReducer from './buscet/buscetSlise'
import productReducer from './products/reducer'
const rootReducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
  catalog: catalogReducer,
  basket: basketReducer,
  product: productReducer
})

export default rootReducer
