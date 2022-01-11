import React, { useState } from 'react'
import { Box } from '@mui/system'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route } from 'react-router'
import { AccountBilling } from './AccountBilling'
import { AccountPersonal } from './AccountPersonal'

export const Account = () => {
  const theme = useTheme()
  const [showPersonal, setShowPersonal] = useState(true)
  const [showBilling, setShowBilling] = useState(false)
  const handleCategory = () => {
    setShowPersonal(!showPersonal)
    setShowBilling(!showBilling)
  }
  const { isLoggedIn } = useSelector(state => state.auth)
  if (!isLoggedIn) {
    ;<Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Navigate to="/shop" />} />
  }
  return (
    <Grid container columnSpacing={5} sx={{ paddingBottom: '15px' }}>
      <Grid
        item
        md={4}
        sx={{
          display: { md: 'flex' },
          flexDirection: 'column',
          paddingTop: '15px',
          paddingBottom: '15px'
        }}
      >
        <Box
          sx={{
            backgroundColor: theme.palette.grey[100],
            paddingLeft: '15px',
            paddingRight: '15px'
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, fontSize: 18, color: 'text.primary', marginTop: '15px' }}
          >
            My Account
          </Typography>

          <Typography
            sx={{
              color: showPersonal ? theme.palette.primary.main : theme.text.primary,
              cursor: 'pointer',
              fontWeight: showPersonal ? 400 : 700,
              '&:hover': {
                color: theme.palette.primary.main,
                opacity: 1
              }
            }}
            onClick={() => handleCategory()}
          >
            Personal information
          </Typography>

          <Typography
            sx={{
              color: showBilling ? theme.palette.primary.main : theme.text.primary,
              cursor: 'pointer',
              fontWeight: showBilling ? 400 : 700,
              '&:hover': {
                color: theme.palette.primary.main,
                opacity: 1
              }
            }}
            onClick={() => handleCategory()}
          >
            Billing information
          </Typography>
        </Box>
      </Grid>
      <Grid item container xs={12} md={8}>
        {showPersonal && <AccountPersonal />}
        {showBilling && <AccountBilling />}
      </Grid>
    </Grid>
  )
}

export default React.memo(Account)
