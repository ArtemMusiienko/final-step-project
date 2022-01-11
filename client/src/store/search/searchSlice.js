import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    search: '',
    result: []
  },
  reducers: {
    setSearch(state, action) {
      state.result = action.payload
    },
    addSearch(state, action) {
      state.search = action.payload
    },
    setResult(state, action) {
      state.result = action.payload
    },
    resetSearch(state, action) {
      state.search = ''
    }
  }
})
export const { addSearch, resetSearch, setSearch, setResult } = searchSlice.actions
export default searchSlice.reducer
