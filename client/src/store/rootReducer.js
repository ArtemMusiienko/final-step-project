import { combineReducers } from '@reduxjs/toolkit'
import counterReducer from './counterExample/reducer'
import authReducer from './auth/reducer'
import messageReducer from './message/reducer'

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
  message: messageReducer
})

export default rootReducer
