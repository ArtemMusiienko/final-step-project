import React, { forwardRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Button from '@mui/material/Button'
import LogoIcon from './LogoIcon'

const LinkBehavior = forwardRef((props, ref) => (
  <RouterLink ref={ref} to="/" {...props} role={undefined} />
))

const Logo = () => (
  <div>
    <Button
      component={LinkBehavior}
      startIcon={<LogoIcon color="primary" viewBox="0 0 35 35" />}
      sx={{ fontWeight: 'bold' }}
    >
      GREENSHOP
    </Button>
  </div>
)

export default Logo
