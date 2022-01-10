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
import { userLogin, userRegister } from '../../store/auth/actions'

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
  email: Yup.string().email().required('Email is required'),
  password: Yup.string()
    .password()
    .minSymbols(0)
    .min(7, 'Password must be between 7 and 30 characters')
    .max(30, 'Password must be between 7 and 30 characters')
    .minLowercase(5)
    .required('Password is required field'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
})

const useStyles = makeStyles({
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 7,
    width: '100%'
  }
})

const RegisterForm = ({ onClose, props }) => {
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
    const { firstName, lastName, login, email, password } = values
    dispatch(userRegister({ firstName, lastName, login, email, password })).then(data => {
      if (data.error) {
        setSubmitting(false)
        return
      }
      const loginOrEmail = login
      dispatch(userLogin({ loginOrEmail, password }))
      setSubmitting(false)
      resetForm({})
      onClose()
    })
  }
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        rowGap: 1
      }}
    >
      <Typography
        id="transition-modal-title"
        variant="h6"
        component="h2"
        sx={{ fontSize: 14, fontWeight: 400, color: 'text.primary' }}
      >
        Enter your email and password to register.
      </Typography>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          login: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
        validationSchema={LoginSchema}
        onSubmit={handleFormSubmit}
      >
        {({ submitForm, isSubmitting }) => (
          <Form className={classes.loginForm}>
            <Field
              component={TextField}
              name="firstName"
              type="firstName"
              label="First Name"
              size="small"
              color="primary"
            />
            <Field
              component={TextField}
              name="lastName"
              type="lastName"
              label="Last Name"
              size="small"
              color="primary"
            />
            <Field
              component={TextField}
              name="login"
              type="login"
              label="Login"
              size="small"
              color="primary"
            />
            <Field
              component={TextField}
              name="email"
              type="email"
              label="Email"
              size="small"
              color="primary"
            />
            <Field
              component={TextField}
              type={isShowPassword ? 'text' : 'password'}
              label="Password"
              name="password"
              size="small"
              color="primary"
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
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              size="small"
              color="primary"
            />
            {isSubmitting && <LinearProgress />}
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
              sx={{ display: 'block', textTransform: 'capitalize' }}
            >
              Register
            </Button>
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

export default RegisterForm
