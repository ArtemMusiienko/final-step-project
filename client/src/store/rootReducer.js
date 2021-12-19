import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './auth/reducer'
import messageReducer from './message/reducer'
import basketReducer from './buscet/buscetSlise'

const rootReducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
  basket: basketReducer
})

export default rootReducer
