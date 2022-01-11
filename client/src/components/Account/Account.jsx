import React from 'react'
import { Box } from '@mui/system'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import { AccountBilling } from './AccountBilling'
import { AccountPersonal } from './AccountPersonal'

export const Account = () => {
  const theme = useTheme()
  return (
    <Grid container columnSpacing={5}>
      <Grid
        item
        md={4}
        sx={{
          display: { md: 'flex' },
          flexDirection: 'column'
        }}
      >
        <Box sx={{ backgroundColor: theme.palette.grey[100], paddingLeft: '15px' }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, fontSize: 18, color: 'text.primary', marginTop: '15px' }}
          >
            My Account
          </Typography>
          <Typography
            id="transition-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontSize: 14, fontWeight: 400, color: 'text.primary' }}
          >
            Account Details
          </Typography>
          <Typography
            id="transition-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontSize: 14, fontWeight: 400, color: 'text.primary' }}
          >
            Billing Address
          </Typography>
        </Box>
      </Grid>
      <Grid item container xs={12} md={8}>
        <AccountPersonal />
        <AccountBilling />
      </Grid>
    </Grid>
  )
}
