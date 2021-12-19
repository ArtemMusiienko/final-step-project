import { createAsyncThunk } from '@reduxjs/toolkit'
import { getCatalog } from '../../api/catalog'

export const setCatalog = createAsyncThunk('catalog/fetchCatalog', async () => {
  const data = await getCatalog()
  return data
})
