import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    search: ''
    // name: ''
  },
  reducers: {
    addSearch(state, action) {
      const plants = state.search + String(action.payload)
      state.search = action.payload
    }
  }
})
export const { addSearch, deleteSearch } = searchSlice.actions
export default searchSlice.reducer
