import { createAsyncThunk } from '@reduxjs/toolkit'
import { getSlider } from '../../api/slider'

export const setSlider = createAsyncThunk('slider/fetchSlider', async () => {
  const data = await getSlider()
  return data
})
