import { combineReducers } from '@reduxjs/toolkit'
import counterReducer from './counterExample/reducer'

const rootReducer = combineReducers({
  counter: counterReducer
})

export default rootReducer
