/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  Button,
  TextField,
  Typography,
  LinearProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText
} from '@mui/material'
import Backdrop from '@mui/material/Backdrop'
import { Box } from '@mui/system'
import { useTheme } from '@mui/styles'
import { getCustomer } from '../../api/customer'
import { addNewSubscriber, updateSubscriber } from '../../store/subscribe/actions'
import { addSubscriber } from '../../api/subscribe'

const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required.')
})

const FooterSubscribe = () => {
  const subscriber = useSelector(state => state.subscriber)
  const { isLoggedIn } = useSelector(state => state.auth)
  const theme = useTheme()
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)
  const [message, setMessage] = useState('')
  const dispatch = useDispatch()
  useEffect(() => {
    if (subscriber.enabled) {
      setIsSubscribed(subscriber.enabled)
      return null
    }
    async function fetchData() {
      if (subscriber.email) {
        const { email: loggedInUserEmail } = await getCustomer()
        formik.setFieldValue('email', loggedInUserEmail)
      }
      return null
    }
    fetchData()
    setIsSubscribed(false)
    return null
  }, [subscriber])
  useEffect(() => {
    async function fetchData() {
      if (isLoggedIn) {
        const { email: loggedInUserEmail } = await getCustomer()
        formik.setFieldValue('email', loggedInUserEmail)
      }
    }
    fetchData()
    if (!isLoggedIn) {
      formik.setFieldValue('email', '')
    }
  }, [isLoggedIn])
  const handleUnsubscribeClick = () => {
    setMessage('You unsubsribed')
    setOpenDialog(true)
    dispatch(updateSubscriber())
  }
  const descriptionElementRef = useRef(null)
  const handleClose = () => {
    setOpenDialog(false)
    setMessage('')
  }
  useEffect(() => {
    if (openDialog) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [openDialog])
  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: FORM_VALIDATION,
    onSubmit: async value => {
      const { email } = value
      if (isLoggedIn) {
        if (subscriber.email) {
          dispatch(updateSubscriber(email))
          setMessage('You subscribed on news')
          setOpenDialog(true)
          formik.resetForm()
          formik.setSubmitting(false)
          return null
        }
        await dispatch(addNewSubscriber(email)).then(() => {
          setMessage('You subscribed on news')
          setOpenDialog(true)
          formik.resetForm()
          formik.setSubmitting(false)
        })
        return null
      }
      const newSubscriber = {
        email,
        letterSubject: 'Welcome To GreenShop Subscribers',
        letterHtml:
          "<!DOCTYPE html><html lang='en'> <head> <meta charset='UTF-8' /> <meta name='viewport' content='width=device-width, initial-scale=1.0' /> <meta http-equiv='X-UA-Compatible'content='ie=edge' />   <title>Document</title> <style> td { padding: 20px 50px; background-color:yellow; color: blueviolet;   font-size: 20px; } </style> </head> <h1>Thank you for subscribing</h1> <body></html>"
      }
      await addSubscriber(newSubscriber)
      setMessage('You subscribed on news')
      setOpenDialog(true)
      formik.resetForm()
      formik.setSubmitting(false)
      return null
    }
  })
  return (
    <>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <DialogContent>
          <DialogContentText id="dialog-description" ref={descriptionElementRef} tabIndex={-1}>
            {`${message}`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
      {isSubscribed ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            rowGap: '15px',
            padding: '0 23px'
          }}
        >
          <Box sx={{ fontSize: '13px', color: '#727272' }}>
            You subscribed on our news. If you want to unsubscribe, use the following button
          </Box>
          <Button
            variant="contained"
            sx={{
              flexGrow: 0,
              display: 'block',
              textTransform: 'capitalize'
            }}
            size="small"
            onClick={handleUnsubscribeClick}
          >
            Unsubscribe
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '15px',
            justifyContent: 'space-between',
            padding: '0 23px'
          }}
        >
          <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: 'bold' }}>
            Would you like to join newsletters?
          </Typography>
          {formik.isSubmitting && <LinearProgress />}
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ display: 'flex' }}>
              <TextField
                label="Email"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                InputLabelProps={{
                  shrink: true
                }}
                fullWidth
                required
                size="small"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.errors.email) && formik.touched.email}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': { borderColor: theme.palette.primary.main }
                  },
                  '& .MuiFormLabel-asterisk': {
                    color: theme.palette.error.main
                  }
                }}
              />
              <Button
                type="submit"
                variant="contained"
                disabled={formik.isSubmitting || formik.values.email === ''}
                sx={{
                  flexGrow: 0,
                  display: 'block',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  textTransform: 'capitalize',
                  padding: '0 26px'
                }}
                size="small"
              >
                Join
              </Button>
            </Box>
            {formik.touched.email && formik.errors.email && (
              <Box sx={{ color: '#d32f2f', fontSize: '0.75rem', margin: '4px 14px 0' }}>
                {formik.errors.email}
              </Box>
            )}
          </form>
          <Typography
            sx={{
              fontSize: '13px',
              color: '#727272'
            }}
          >
            We usually post offers and challenges in newsletter. We’re your online houseplant
            destination. We offer a wide range of houseplants and accessories shipped directly from
            (green)house to yours!
          </Typography>
        </Box>
      )}
    </>
  )
}
export default FooterSubscribe
