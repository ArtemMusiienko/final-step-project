import React, { useState } from 'react'
import { Button, Paper, SvgIcon, Typography, Grid } from '@mui/material'
import './Checkout.scss'
import { Formik, Form } from 'formik'
import { makeStyles } from '@mui/styles'
import * as Yup from 'yup'
import Radio from '@material-ui/core/Radio'
import { FormControl, FormControlLabel, RadioGroup } from '@material-ui/core'
import Box from '@mui/material/Box'
import { ReactComponent as Payments } from '../../../assets/image/payment-method.svg'
import TextField from '../../FormsUi/Textfield/index'
import CheckoutModal from './CheckoutModal'

const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  country: '',
  city: '',
  street: '',
  appartement: '',
  state: '',
  zip: '',
  email: '',
  phone: '',
  notes: ''
}

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  street: Yup.string().required('Required'),
  appartement: Yup.string(),
  state: Yup.string().required('Required'),
  zip: Yup.number().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.number().integer().typeError('Please enter a valid phone number').required('Required'),
  notes: Yup.string()
})

const useStyle = makeStyles(theme => {
  return {
    root: { flexGrow: 1 },
    gridPage: {
      backgroundColor: '#fffff',
      paddingTop: '36px'
    },
    billingPart: {},
    OrderPart: {},
    formControl: {
      border: '1px solid #EAEAEA',
      width: '321px',
      height: '56px',
      marginTop: '15px',
      borderRadius: '3px'
    },
    form: {},
    radio: {
      color: '#46A358'
    },
    imageIcon: {
      height: '100%'
    },
    iconRoot: {
      textAlign: 'center'
    }
  }
})
const Checkout = () => {
  const classes = useStyle()
  const [modalActive, setModalActive] = useState(false)
  return (
    <>
      <Grid container spacing={2} className={classes.gridPage}>
        <Grid item xs={12} md={8} className={classes.billingPart}>
          <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '20px' }}>
            Billing Billing Address
          </Typography>
          <Paper style={{ boxShadow: 'unset' }}>
            <Formik
              initialValues={{ ...INITIAL_FORM_STATE }}
              validationSchema={FORM_VALIDATION}
              onSubmit={values => {
                console.log(values)
              }}
            >
              <Form className={classes.form}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6">
                      First Name<span style={{ color: 'red' }}>*</span>
                    </Typography>
                    <TextField name="firstName" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6">
                      Last Name<span style={{ color: 'red' }}>*</span>
                    </Typography>
                    <TextField name="lastName" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6">
                      Country / Region<span style={{ color: 'red' }}>*</span>
                    </Typography>
                    <TextField name="country" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6">
                      Town / City<span style={{ color: 'red' }}>*</span>
                    </Typography>
                    <TextField name="city" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6">
                      Street Address<span style={{ color: 'red' }}>*</span>
                    </Typography>
                    <TextField name="street" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6">Appartement,suite</Typography>
                    <TextField name="appartement" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6">
                      State<span style={{ color: 'red' }}>*</span>
                    </Typography>
                    <TextField name="state" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6">
                      Zip<span style={{ color: 'red' }}>*</span>
                    </Typography>
                    <TextField name="zip" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6">
                      Email address<span style={{ color: 'red' }}>*</span>
                    </Typography>
                    <TextField name="email" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6">
                      Phone Number<span style={{ color: 'red' }}>*</span>
                    </Typography>
                    <TextField name="phone" />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    {' '}
                    <FormControlLabel
                      value="ship"
                      control={<Radio style={{ color: '#46A358' }} />}
                      label="Ship to a different address?"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Typography
                      variant="h6"
                      style={{ marginTop: '54px', position: 'relative', left: '0' }}
                    >
                      Order notes(optional)
                    </Typography>
                    <TextField name="notes" multiline rows={6} />
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} className={classes.OrderPart}>
          <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '20px' }}>
            Your Your Order
          </Typography>
          <Paper style={{ boxShadow: 'unset' }}>
            <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '20px' }}>
              Payment Payment Method
            </Typography>
            <FormControl component="fieldset" style={{ marginLeft: '11px' }}>
              <RadioGroup defaultValue="paypal" name="radio-buttons-group">
                <FormControlLabel
                  value="paypal"
                  control={<Radio style={{ color: '#46A358' }} />}
                  label={
                    <Box>
                      <SvgIcon
                        style={{ width: '100%', height: '100%' }}
                        viewBox="0 0 224 26"
                        component={Payments}
                      />
                    </Box>
                  }
                  className={classes.formControl}
                />
                <FormControlLabel
                  value="Direct bank transfer"
                  control={<Radio style={{ color: '#46A358' }} />}
                  label="Direct bank transfer"
                  className={classes.formControl}
                />
                <FormControlLabel
                  value="Cash on delivery"
                  control={<Radio style={{ color: '#46A358' }} />}
                  label="Cash on delivery"
                  className={classes.formControl}
                />
              </RadioGroup>
            </FormControl>
            <Button
              variant="contained"
              onClick={() => setModalActive(true)}
              style={{
                backgroundColor: '#46A358',
                color: '#ffffff',
                width: '321px',
                height: '50px',
                fontWeight: 'bold',
                textTransform: 'initial',
                marginTop: '50px',
                borderRadius: '3px'
              }}
            >
              Place Order
            </Button>
          </Paper>
        </Grid>
      </Grid>
      <CheckoutModal active={modalActive} setActive={setModalActive} />
    </>
  )
}

export default Checkout
