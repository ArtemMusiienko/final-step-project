import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NumberFormat from 'react-number-format'
import InputAdornment from '@mui/material/InputAdornment'
import Select from 'react-select'
import { Typography, Grid, TextField, IconButton, Button, LinearProgress } from '@mui/material'
import { Formik, Form, useFormik } from 'formik'
import { useTheme } from '@mui/styles'
import * as Yup from 'yup'
import Box from '@mui/material/Box'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { authPersonalUpdate, authNewPassword } from '../../api/auth'
import { getCustomer } from '../../api/customer'

const FORM_VALIDATION = Yup.object().shape({
  login: Yup.string()
    .matches(/^[a-zA-Z0-9]+$/, 'Allowed characters for login is a-z, A-Z, 0-9.')
    .min(3, 'Login must be between 3 and 10 characters')
    .max(10, 'Login must be between 3 and 10 characters')
    .required('Login is required field'),
  firstName: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+$/, 'Allowed characters for First Name is a-z, A-Z, а-я, А-Я.')
    .min(2, 'First Name must be between 2 and 25 characters.')
    .max(25, 'First Name must be between 2 and 25 characters.')
    .required('First Name is required.'),
  lastName: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+$/, 'Allowed characters for Last Name is a-z, A-Z, а-я, А-Я.')
    .min(2, 'First Name must be between 2 and 25 characters.')
    .max(25, 'First Name must be between 2 and 25 characters.')
    .required('Last Name is required.'),
  email: Yup.string().email('Invalid email').required('Email is required.'),
  mobile: Yup.string()
    .min(10, 'Phone number must be 10 characters')
    .required('Phone number is required.')
})

const FORM_VALIDATION2 = Yup.object().shape({
  password: Yup.string()
    .password()
    .minSymbols(0)
    .min(7, 'Password must be between 7 and 30 characters')
    .max(30, 'Password must be between 7 and 30 characters')
    .minLowercase(5)
    .required('Password is required field'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
})
const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={values => {
        onChange({
          target: {
            name: props.name,
            value: values.value
          }
        })
      }}
      format="+38 (###) ###-####"
      allowEmptyFormatting
      mask="_"
    />
  )
})

export const AccountPersonal = () => {
  const dispatch = useDispatch()
  const [isEdited, setIsEdited] = useState(false)
  const [isEdited2, setIsEdited2] = useState(false)
  const [message, setMessage] = useState('')
  const theme = useTheme()
  const [isShowPassword, setIsShowPassword] = useState(false)
  const handleClickShowPassword = () => {
    setIsShowPassword(!isShowPassword)
  }
  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  const formik = useFormik({
    initialValues: {
      login: '',
      firstName: '',
      lastName: '',
      email: '',
      mobile: ''
    },
    validationSchema: FORM_VALIDATION,

    onSubmit: async values => {
      const { login, firstName, lastName, email, mobile } = values
      const newDataUser = {
        login,
        firstName,
        lastName,
        email,
        mobile
      }
      await authPersonalUpdate(newDataUser)
        .then(response => {
          setIsEdited(false)
          console.log(response)
        })
        .catch(error => console.log(error))
    }
  })
  const formik2 = useFormik({
    initialValues: {
      password: '',
      newPassword: '',
      passwordConf: ''
    },
    validationSchema: FORM_VALIDATION2,

    onSubmit: values => {
      const { password, newPassword } = values
      authNewPassword(password, newPassword)
    }
  })
  useEffect(() => {
    async function fetchData() {
      const { email: loggedInUserEmail, login, firstName, lastName, mobile } = await getCustomer()
      if (login) {
        formik.setFieldValue('login', login)
      }
      if (loggedInUserEmail) {
        formik.setFieldValue('email', loggedInUserEmail)
      }
      if (firstName) {
        formik.setFieldValue('firstName', firstName)
      }
      if (lastName) {
        formik.setFieldValue('lastName', lastName)
      }
      if (mobile) {
        formik.setFieldValue('mobile', mobile)
      }
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            display: 'flex',
            columnGap: '60px',
            rowGap: '15px',
            flexDirection: { xs: 'column', md: 'row' }
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'text.primary',
                marginBottom: '15px'
              }}
            >
              Personal Information
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Login"
                  type="login"
                  id="login"
                  name="login"
                  placeholder="Login"
                  InputLabelProps={{
                    shrink: true
                  }}
                  fullWidth
                  disabled
                  required
                  size="small"
                  value={formik.values.login}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.errors.login) && formik.touched.login}
                  helperText={formik.touched.login && formik.errors.login}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': { borderColor: theme.palette.primary.main }
                    },
                    '& .MuiFormLabel-asterisk': {
                      color: theme.palette.error.main
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  type="firstName"
                  id="firstName"
                  name="firstName"
                  placeholder="Name"
                  InputLabelProps={{
                    shrink: true
                  }}
                  fullWidth
                  disabled={!isEdited}
                  required
                  size="small"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.errors.firstName) && formik.touched.firstName}
                  helperText={formik.touched.firstName && formik.errors.firstName}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': { borderColor: theme.palette.primary.main }
                    },
                    '& .MuiFormLabel-asterisk': {
                      color: theme.palette.error.main
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  type="lastName"
                  id="lastName"
                  name="lastName"
                  placeholder="Surname"
                  InputLabelProps={{
                    shrink: true
                  }}
                  fullWidth
                  disabled={!isEdited}
                  required
                  size="small"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.errors.lastName) && formik.touched.lastName}
                  helperText={formik.touched.lastName && formik.errors.lastName}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': { borderColor: theme.palette.primary.main }
                    },
                    '& .MuiFormLabel-asterisk': {
                      color: theme.palette.error.main
                    }
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email address"
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  InputLabelProps={{
                    shrink: true
                  }}
                  fullWidth
                  disabled
                  required
                  size="small"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.errors.email) && formik.touched.email}
                  helperText={formik.touched.email && formik.errors.email}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': { borderColor: theme.palette.primary.main }
                    },
                    '& .MuiFormLabel-asterisk': {
                      color: theme.palette.error.main
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone Number"
                  id="mobile"
                  name="mobile"
                  InputLabelProps={{
                    shrink: true
                  }}
                  fullWidth
                  disabled={!isEdited}
                  required
                  size="small"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.errors.mobile) && formik.touched.mobile}
                  helperText={formik.touched.mobile && formik.errors.mobile}
                  InputProps={{
                    inputComponent: NumberFormatCustom
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': { borderColor: theme.palette.primary.main }
                    },
                    '& .MuiFormLabel-asterisk': {
                      color: theme.palette.error.main
                    }
                  }}
                />
              </Grid>
              {formik.isSubmitting && <LinearProgress />}
              {isEdited ? (
                <Grid item container xs={12}>
                  <Grid item xs={12} sm={6}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={!(formik.isValid && formik.dirty)}
                      sx={{ display: 'block', textTransform: 'capitalize' }}
                    >
                      Save Change
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ display: 'block', textTransform: 'capitalize' }}
                      onClick={() => setIsEdited(false)}
                    >
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              ) : (
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ display: 'block', textTransform: 'capitalize' }}
                    onClick={() => setIsEdited(true)}
                  >
                    Edit
                  </Button>
                </Grid>
              )}
            </Grid>
          </Box>
        </Box>
      </form>
      <form onSubmit={formik2.handleSubmit}>
        <Box
          sx={{
            display: 'flex',
            columnGap: '60px',
            rowGap: '15px',
            flexDirection: { xs: 'column', md: 'row' }
          }}
        >
          <Box sx={{ flexGrow: 1, marginTop: '15px' }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  type={isShowPassword ? 'text' : 'password'}
                  label="Current Password"
                  name="password"
                  size="small"
                  required
                  disabled={!isEdited2}
                  color="primary"
                  value={formik2.values.password}
                  style={{ width: '100%', marginBottom: '15px' }}
                  onChange={formik2.handleChange}
                  onBlur={formik2.handleBlur}
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
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type={isShowPassword ? 'text' : 'password'}
                  label="New Password"
                  name="newPassword"
                  size="small"
                  required
                  disabled={!isEdited2}
                  color="primary"
                  value={formik2.values.newPassword}
                  style={{ width: '100%', marginBottom: '15px' }}
                  onChange={formik2.handleChange}
                  onBlur={formik2.handleBlur}
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
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type={isShowPassword ? 'text' : 'password'}
                  label="Confirm Password"
                  required
                  name="passwordConf"
                  size="small"
                  color="primary"
                  disabled={!isEdited2}
                  style={{ width: '100%', marginBottom: '15px' }}
                  onChange={formik2.handleChange}
                  onBlur={formik2.handleBlur}
                  error={Boolean(formik2.errors.passwordConf) && formik2.touched.passwordConf}
                  helperText={formik2.touched.passwordConf && formik2.errors.passwordConf}
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
              </Grid>
              {formik2.isSubmitting && <LinearProgress />}
              {isEdited2 ? (
                <Grid item container xs={12}>
                  <Grid item xs={12} sm={6}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={!(formik2.isValid && formik2.dirty)}
                      sx={{ display: 'block', textTransform: 'capitalize' }}
                    >
                      Save Change
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ display: 'block', textTransform: 'capitalize' }}
                      onClick={() => setIsEdited2(false)}
                    >
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              ) : (
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ display: 'block', textTransform: 'capitalize' }}
                    onClick={() => setIsEdited2(true)}
                    disabled
                  >
                    Edit
                  </Button>
                </Grid>
              )}
            </Grid>
          </Box>
        </Box>
      </form>
    </>
  )
}
