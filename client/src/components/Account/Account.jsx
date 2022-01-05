/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@mui/styles'
import Typography from '@mui/material/Typography'
import { Button, IconButton, LinearProgress } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-mui'
import * as Yup from 'yup'
import YupPassword from 'yup-password'
import { Box } from '@mui/system'
import MuiPhoneNumber from 'material-ui-phone-number'
import axios from 'axios'

YupPassword(Yup)
const LoginSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+$/, 'Allowed characters for First Name is a-z, A-Z, а-я, А-Я.')
    .min(2, 'First Name must be between 2 and 25 characters.')
    .max(25, 'First Name must be between 2 and 25 characters.')
    .required('First Name is required.'),
  lastName: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+$/, 'Allowed characters for Last Name is a-z, A-Z, а-я, А-Я.')
    .min(2, 'Last Name must be between 2 and 25 characters.')
    .max(25, 'Last Name must be between 2 and 25 characters.')
    .required('Last Name is required.'),
  login: Yup.string()
    .matches(/^[a-zA-Z0-9]+$/, 'Allowed characters for login is a-z, A-Z, 0-9.')
    .min(3, 'Login must be between 3 and 10 characters')
    .max(10, 'Login must be between 3 and 10 characters')
    .required('Login is required field'),
  email: Yup.string().email().required('Email is required.'),
  password: Yup.string()
    .password()
    .minSymbols(0)
    .min(7, 'Password must be between 7 and 30 characters')
    .max(30, 'Password must be between 7 and 30 characters')
    .minLowercase(5),
  newPassword: Yup.string()
    .password()
    .minSymbols(0)
    .min(7, 'Password must be between 7 and 30 characters')
    .max(30, 'Password must be between 7 and 30 characters')
    .minLowercase(5),
  confirmPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
  phoneNumber: Yup.string().matches(
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
    'Phone number is not valid'
  )
})

const useStyles = makeStyles({
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10,
    width: '100%'
  }
})

export const Account = ({ onClose, props }) => {
  const classes = useStyles(props)
  const [isShowPassword, setIsShowPassword] = useState(false)
  const dispatch = useDispatch()
  const { message } = useSelector(state => state.message)
  const handleClickShowPassword = () => {
    setIsShowPassword(!isShowPassword)
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }
  const handleFormSubmit = (values, { setSubmitting, resetForm }) => {
    const { firstName, lastName, login, email, newPassword, phoneNumber } = values
    axios.put('/customers', values)
  }
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '20px' }}
    >
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          newPassword: '',
          phoneNumber: ''
        }}
        validationSchema={LoginSchema}
        onSubmit={handleFormSubmit}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              sx={{ fontSize: 14, fontWeight: 400, color: 'text.primary' }}
            >
              Personal Infromation
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ flex: '50%', maxWidth: '417px' }}>
                <Field
                  component={TextField}
                  name="firstName"
                  type="firstName"
                  label="First Name"
                  size="small"
                  color="primary"
                  style={{ width: '100%', marginBottom: '15px' }}
                />

                <Field
                  component={TextField}
                  name="login"
                  type="login"
                  label="Login"
                  size="small"
                  color="primary"
                  style={{ width: '100%', marginBottom: '15px' }}
                />
                <Field
                  component={TextField}
                  name="email"
                  type="email"
                  label="Email"
                  size="small"
                  color="primary"
                  style={{ width: '100%', marginBottom: '15px' }}
                />

                <Field
                  component={TextField}
                  type={isShowPassword ? 'text' : 'password'}
                  label="Current Password"
                  name="password"
                  size="small"
                  color="primary"
                  style={{ width: '100%', marginBottom: '15px' }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {isShowPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                <Field
                  component={TextField}
                  type={isShowPassword ? 'text' : 'password'}
                  label="New Password"
                  name="newPassword"
                  size="small"
                  color="primary"
                  style={{ width: '100%', marginBottom: '15px' }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {isShowPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                <Field
                  component={TextField}
                  type={isShowPassword ? 'text' : 'password'}
                  label="Confirm Password"
                  name="confirmPassword"
                  size="small"
                  color="primary"
                  style={{ width: '100%', marginBottom: '15px' }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {isShowPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />

                {isSubmitting && <LinearProgress />}
                <Button
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  onClick={submitForm}
                  sx={{ display: 'block', textTransform: 'capitalize' }}
                >
                  Save Change
                </Button>
              </Box>
              <Box sx={{ flex: '50%', maxWidth: '417px', marginLeft: '40px' }}>
                <Field
                  component={TextField}
                  name="lastName"
                  type="lastName"
                  label="Last Name"
                  size="small"
                  color="primary"
                  style={{ width: '100%', marginBottom: '15px' }}
                />
                <Field
                  component={TextField}
                  name="phoneNumber"
                  type="phoneNumber"
                  label="Phone Number"
                  size="small"
                  color="primary"
                  style={{ width: '100%', marginBottom: '15px' }}
                />
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
      <Typography
        id="transition-modal-title"
        variant="h6"
        component="h5"
        sx={{ fontSize: 14, fontWeight: 800, color: 'red', textAlign: 'center' }}
      >
        {message}
      </Typography>
    </Box>
  )
}

export default Account
