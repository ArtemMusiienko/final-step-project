import React, { useEffect, useState, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import NumberFormat from 'react-number-format'
import Select from 'react-select'
import { Button, Typography, Grid, TextField } from '@mui/material'
import { Formik, Form, useFormik } from 'formik'
import { useTheme } from '@mui/styles'
import * as Yup from 'yup'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import { userLogin, userRegister } from '../../store/auth/actions'
import { authPersonalUpdate } from '../../api/auth'
import { getCustomer } from '../../api/customer'

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
  email: Yup.string().email('Invalid email').required('Email is required.')
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
  const [submiting, setSubmitting] = useState(false)
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      country: 'Ukraine',
      city: 'Kyiv',
      address: '',
      postal: '',
      email: '',
      login: '',
      password: ''
    },
    validationSchema: FORM_VALIDATION,
    onSubmit: values => {
      const { login, password, firstName, lastName, country, city, address, postal, email } = values
      authPersonalUpdate(
        login,
        password,
        firstName,
        lastName,
        country,
        city,
        address,
        postal,
        email
      )
    }
  })
  useEffect(() => {
    async function fetchData() {
      const {
        email: loggedInUserEmail,
        password,
        postal,
        address,
        city,
        country,
        firstName,
        lastName,
        login
      } = await getCustomer()
      formik.setFieldValue('email', loggedInUserEmail)
      formik.setFieldValue('password', password)
      formik.setFieldValue('postal', postal)
      formik.setFieldValue('address', address)
      formik.setFieldValue('city', city)
      formik.setFieldValue('country', country)
      formik.setFieldValue('firstName', firstName)
      formik.setFieldValue('lastName', lastName)
      formik.setFieldValue('login', login)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    // / eslint-disable-next-line react-hooks/exhaustive-deps
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
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ display: 'block', textTransform: 'capitalize' }}
              >
                Save Change
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </form>
  )
}
