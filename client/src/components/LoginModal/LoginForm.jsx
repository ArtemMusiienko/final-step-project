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
  email: Yup.string().email().required('Required'),
  password: Yup.string().password().required()
})

const useStyles = makeStyles({
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10,
    width: '100%'
  }
})

const LoginForm = ({ onClose, props }) => {
  const classes = useStyles(props)
  // const onSubmit = async (values, {setSubmitting, setErrors, setStatus, resetForm}) => {
  //   try {
  //     await auth.passwordUpdate(values.oldPassword, values.passwordOne)
  //     resetForm({})
  //     setStatus({success: true})
  //   } catch (error) {
  //     setStatus({success: false})
  //     setSubmitting(false)
  //     setErrors({submit: error.message})
  //   }
  // }
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
        Enter your username and password to login.
      </Typography>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={LoginSchema}
        onSubmit={handleFormSubmit}
      >
        {({ submitForm, isSubmitting }) => (
          <Form className={classes.loginForm}>
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
            <Link component="button" underline="none" sx={{ alignSelf: 'flex-end' }}>
              Forgot Password?
            </Link>
            {isSubmitting && <LinearProgress />}
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
              sx={{ display: 'block', textTransform: 'capitalize' }}
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

export default LoginForm
