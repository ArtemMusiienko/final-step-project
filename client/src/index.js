import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import axios from 'axios'
import './index.scss'
import App from './components/App'
import { store, persistor } from './store/store'
import theme from './theme'

axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT
axios.interceptors.request.use(
  config => {
    if (!config.headers.Authorization) {
      const token = store.getState().auth.user || ''
      if (token) {
        config.headers.Authorization = token
      }
    }

    return config
  },
  error => Promise.reject(error)
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
