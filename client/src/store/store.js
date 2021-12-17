import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './rootReducer'
import checkTerminationToken from '../services/checkTerminationToken'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['message'],
  migrate: state => {
    const token = state.auth.user
    const newState = { ...state }
    if (token) {
      const validation = checkTerminationToken(token)
      if (validation) {
        newState.auth.user = null
        newState.auth.isLoggedIn = false
      }
    }
    return Promise.resolve(newState)
  }
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export const persistor = persistStore(store)
