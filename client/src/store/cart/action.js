import {createAsyncThunk} from '@reduxjs/toolkit'
import {createCart} from "../../api/cart";
import {setMessage} from "../message/reducer";

export const cartCreate = createAsyncThunk(
  'cart/create',
  async ({customerId, products}, thunkAPI) => {
    try {
      const cart = await createCart(customerId, products)
      return {cart}
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

