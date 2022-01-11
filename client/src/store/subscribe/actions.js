/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getCustomer } from '../../api/customer'
import { addSubscriber, updateSubscriberByEmail, getSubscriber } from '../../api/subscribe'

export const setSubscriber = createAsyncThunk('subscriber/fetchSubscriber', async () => {
  const customer = await getCustomer()
  const data = await getSubscriber(customer.email)
  return data
})

export const addNewSubscriber = createAsyncThunk(
  'subscriber/fetchAddNewSubscriber',
  async email => {
    const newSubscriber = {
      email,
      letterSubject: 'Welcome To GreenShop Subscribers',
      letterHtml:
        "<!DOCTYPE html><html lang='en'> <head> <meta charset='UTF-8' /> <meta name='viewport' content='width=device-width, initial-scale=1.0' /> <meta http-equiv='X-UA-Compatible'content='ie=edge' />   <title>Document</title> <style> td { padding: 20px 50px; background-color:yellow; color: blueviolet;   font-size: 20px; } </style> </head> <h1>Thank you for subscribing</h1> <body></html>"
    }
    const data = await addSubscriber(newSubscriber)
    return data.subscriber
  }
)

export const updateSubscriber = createAsyncThunk(
  'subscriber/fetchUpdateSubscriber',
  async (email, thunkAPI) => {
    const subscriber = await thunkAPI.getState().subscriber
    let data = ''
    if (subscriber.enabled) {
      const newSubscriber = {
        enabled: false,
        letterSubject: 'You unsubscribed',
        letterHtml: '<p>We will glad to see you again!</p>'
      }
      data = await updateSubscriberByEmail(subscriber.email, newSubscriber)
      return data.subscriber
    }
    const newSubscriber = {
      enabled: true,
      letterSubject: 'Welcome back',
      letterHtml: '<p>We are glad to see you!</p>'
    }
    data = await updateSubscriberByEmail(email, newSubscriber)
    return data.subscriber
  }
)
