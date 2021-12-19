import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './auth/reducer'
import messageReducer from './message/reducer'
import catalogReducer from './catalog/reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
  catalog: catalogReducer
})

export default rootReducer
