import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NumberFormat from 'react-number-format'
import InputAdornment from '@mui/material/InputAdornment'
import Select from 'react-select'
import { Typography, Grid, TextField, IconButton, Button } from '@mui/material'
import { Formik, Form, useFormik } from 'formik'
import { useTheme } from '@mui/styles'
import * as Yup from 'yup'
import Box from '@mui/material/Box'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

const FORM_VALIDATION = Yup.object().shape({
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
  country: Yup.string().required('Country is required.'),
  city: Yup.string().required('City is required.'),
  address: Yup.string().required('Address is required.'),
  postal: Yup.string().min(5, 'Zip code must be 5 characters').required('Zip code is required.'),
  email: Yup.string().email('Invalid email').required('Email is required.'),
  mobile: Yup.string()
    .min(10, 'Phone number must be 10 characters')
    .required('Phone number is required.'),
  notes: Yup.string(),
  password: Yup.string(),
  passwordConf: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
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
const NumberFormatIndexCustom = React.forwardRef(function NumberFormatIndexCustom(props, ref) {
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
      format="#####"
      allowEmptyFormatting
      mask="-"
    />
  )
})
const cities = [
  {
    value: 'Kyiv'
  },
  {
    value: 'Kharkiv'
  },
  {
    value: 'Lviv'
  },
  {
    value: 'Dnipro'
  }
]

export const AccountPersonal = () => {
  const dispatch = useDispatch()
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
      firstName: '',
      lastName: '',
      country: 'Ukraine',
      city: 'Kyiv',
      address: '',
      postal: '',
      email: '',
      mobile: ''
    },
    validationSchema: FORM_VALIDATION,
    onSubmit: async value => {}
  })
  return (
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
                label="First Name"
                type="firstName"
                id="firstName"
                name="firstName"
                placeholder="Name"
                InputLabelProps={{
                  shrink: true
                }}
                fullWidth
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
                id="email"
                name="email"
                placeholder="example@gmail.com"
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

            <Grid item xs={12} sm={6}>
              <TextField
                type={isShowPassword ? 'text' : 'password'}
                label="Current Password"
                name="password"
                size="small"
                color="primary"
                style={{ width: '100%', marginBottom: '15px' }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
                name="passwordConf"
                size="small"
                color="primary"
                style={{ width: '100%', marginBottom: '15px' }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.errors.passwordConf) && formik.touched.passwordConf}
                helperText={formik.touched.passwordConf && formik.errors.passwordConf}
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
            <Button
              variant="contained"
              color="primary"
              onClick={formik.handleSubmit}
              sx={{ display: 'block', textTransform: 'capitalize' }}
            >
              Save Change
            </Button>
          </Grid>
        </Box>
      </Box>
    </form>
  )
}
