import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './auth/reducer'
import messageReducer from './message/reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  message: messageReducer
})

export default rootReducer
