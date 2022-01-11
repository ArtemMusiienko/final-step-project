import React, { forwardRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import LogoIcon from './LogoIcon'

const LinkBehavior = forwardRef((props, ref) => (
  <RouterLink ref={ref} to="/" {...props} role={undefined} />
))

const LogoButton = styled(props => <Button disableRipple {...props} />)(({ theme }) => {
  return {
    '& .MuiButton-startIcon>*:nth-of-type(1)': {
      fontSize: '35px'
    }
  }
})

const Logo = () => (
  <div>
    <LogoButton
      component={LinkBehavior}
      startIcon={<LogoIcon color="primary" viewBox="0 0 35 35" />}
      sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}
      onClick={() => window.scrollTo({ top: 0 })}
    >
      GREENSHOP
    </LogoButton>
  </div>
)

export default React.memo(Logo)
