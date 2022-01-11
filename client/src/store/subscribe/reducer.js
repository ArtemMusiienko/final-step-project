/* eslint-disable no-underscore-dangle */
import { createSlice } from '@reduxjs/toolkit'
import { setSubscriber, addNewSubscriber, updateSubscriber } from './actions'

const subscriberSlice = createSlice({
  name: 'subscriber',
  initialState: [],
  reducers: {
    removeSubscriberFromState: (state, action) => []
  },
  extraReducers: {
    [setSubscriber.fulfilled]: (state, action) => action.payload,
    [addNewSubscriber.fulfilled]: (state, action) => action.payload,
    [updateSubscriber.fulfilled]: (state, action) => action.payload
  }
})

const { reducer, actions } = subscriberSlice

export const { removeSubscriberFromState } = actions
export default reducer
