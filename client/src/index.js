import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import axios from 'axios'
import './index.scss'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
            <ToastContainer />
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
