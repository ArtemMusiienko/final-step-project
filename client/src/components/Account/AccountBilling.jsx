import React, { useEffect, useState, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import NumberFormat from 'react-number-format'
import Select from 'react-select'
import {
  Button,
  SvgIcon,
  Typography,
  Grid,
  TextField,
  LinearProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText
} from '@mui/material'
import { Formik, Form, useFormik } from 'formik'
import { useTheme } from '@mui/styles'
import * as Yup from 'yup'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Backdrop from '@mui/material/Backdrop'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import { ReactComponent as Payments } from '../../assets/image/payment-method.svg'

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
  notes: Yup.string()
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

const SelectCustom = React.forwardRef(function SelectCustom(props, ref) {
  const { onChange, ...other } = props

  return (
    <Select
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
      options={cities}
    />
  )
})

export const AccountBilling = () => {
  const dispatch = useDispatch()
  const [message, setMessage] = useState('')
  const theme = useTheme()
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
            Billing Address
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
                label="Country"
                type="country"
                id="country"
                name="country"
                InputLabelProps={{
                  shrink: true
                }}
                fullWidth
                required
                disabled
                size="small"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.errors.country) && formik.touched.country}
                helperText={formik.touched.country && formik.errors.country}
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
                label="City / Town"
                type="city"
                id="city"
                name="city"
                InputLabelProps={{
                  shrink: true
                }}
                select
                fullWidth
                required
                size="small"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.errors.city) && formik.touched.city}
                helperText={formik.touched.city && formik.errors.city}
                InputProps={{
                  inputComponent: SelectCustom
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': { borderColor: theme.palette.primary.main }
                  },
                  '& .MuiFormLabel-asterisk': {
                    color: theme.palette.error.main
                  }
                }}
              >
                {cities.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Street address"
                type="address"
                id="address"
                name="address"
                placeholder="Vasilkivska, 56a"
                InputLabelProps={{
                  shrink: true
                }}
                fullWidth
                required
                size="small"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.errors.address) && formik.touched.address}
                helperText={formik.touched.address && formik.errors.address}
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
                label="Zip"
                type="postal"
                id="postal"
                name="postal"
                InputLabelProps={{
                  shrink: true
                }}
                fullWidth
                required
                size="small"
                value={formik.values.postal}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.errors.postal) && formik.touched.postal}
                helperText={formik.touched.postal && formik.errors.postal}
                InputProps={{
                  inputComponent: NumberFormatIndexCustom
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
          </Grid>
        </Box>
      </Box>
    </form>
  )
}
