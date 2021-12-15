import { createAsyncThunk } from '@reduxjs/toolkit'
import { authLogin, authLogout, authRegister } from '../../api/auth'
import { setMessage } from '../message/reducer'

export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ loginOrEmail, password }, thunkAPI) => {
    try {
      const data = await authLogin(loginOrEmail, password)
      return { user: data }
    } catch (error) {
      const message =
        error.response.data.password ||
        error.response.data.loginOrEmail ||
        error.message ||
        error.password ||
        error.toString()
      thunkAPI.dispatch(setMessage(message))
      return thunkAPI.rejectWithValue()
    }
  }
)

export const userLogout = createAsyncThunk('auth/logout', async () => {
  await authLogout()
})

export const userRegister = createAsyncThunk(
  'auth/register',
  async ({ firstName, lastName, login, email, password }, thunkAPI) => {
    try {
      const response = await authRegister(firstName, lastName, login, email, password)
      thunkAPI.dispatch(setMessage(response.data.message))
      return response.data
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      thunkAPI.dispatch(setMessage(message))
      return thunkAPI.rejectWithValue()
    }
  }
)
