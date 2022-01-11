import { createSlice } from '@reduxjs/toolkit'
import { setCatalog } from './actions'

const initialState = {
  catalog: []
}

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  extraReducers: {
    [setCatalog.fulfilled]: (state, action) => {
      state.catalog = action.payload
    }
  }
})

const { reducer } = catalogSlice
export default reducer
