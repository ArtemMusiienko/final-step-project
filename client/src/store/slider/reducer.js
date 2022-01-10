import { createSlice } from '@reduxjs/toolkit'
import { setSlider } from './actions'

const sliderSlice = createSlice({
  name: 'slider',
  initialState: [],
  extraReducers: {
    [setSlider.fulfilled]: (state, action) => action.payload
  }
})

const { reducer } = sliderSlice
export default reducer
