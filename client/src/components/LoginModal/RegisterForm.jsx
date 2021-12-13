/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import Typography from '@mui/material/Typography'
import { Button, IconButton, LinearProgress, Link } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-mui'
import * as Yup from 'yup'
import YupPassword from 'yup-password'
import { Box } from '@mui/system'

YupPassword(Yup)
const LoginSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field ')
    .min(2, 'Must be not less than 2 characters')
    .required('First Name is required field'),
  lastName: Yup.string()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field ')
    .min(2, 'Must be not less than 2 characters')
    .required('Last Name is required field'),
  login: Yup.string()
    .min(3, 'Must be not less than 3 characters')
    .required('Login is required field'),
  email: Yup.string().email().required('Email is required field'),
  password: Yup.string().password().required('Password is required field'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
})

const useStyles = makeStyles({
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10,
    width: '100%'
  }
})

const RegisterForm = ({ onClose, props }) => {
  const classes = useStyles(props)
  const [isShowPassword, setIsShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setIsShowPassword(!isShowPassword)
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }
  const handleFormSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      console.log(values)
      setSubmitting(false)
      resetForm({})
      onClose()
    }, 1500)
  }
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '5px',
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
              Rejister
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

export default RegisterForm
