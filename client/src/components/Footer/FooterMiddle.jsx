import React from 'react'
import { AppBar, SvgIcon, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Logo from '../Logo'
import { ReactComponent as Location } from '../../assets/locationIcon.svg'
import { ReactComponent as Message } from '../../assets/messageIcon.svg'
import { ReactComponent as Calling } from '../../assets/callingIcon.svg'

const FooterMiddle = () => (
  <Box>
    <AppBar position="static" sx={{ boxShadow: 'none', backgroundColor: 'rgba(70, 163, 88, 0.1)' }}>
      <Toolbar
        disableGutters
        sx={{
          padding: '10px 23px',
          justifyContent: { xs: 'space-between', md: 'flex-start' },
          flexDirection: { xs: 'column', sm: 'row' }
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <Logo />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', paddingLeft: { xs: 0, md: '20px' } }}>
            <Box>
              <SvgIcon
                sx={{ width: '100%', height: '100%', fill: 'none', minWidth: 14, minHeight: 18 }}
                component={Location}
                viewBox="0 0 14 18"
              />
            </Box>
            <Typography
              color="initial"
              sx={{
                fontSize: '14px',
                color: 'text.primary',
                maxWidth: { sm: '200px' },
                marginLeft: '5px'
              }}
            >
              70 West Buckingham Ave. Farmingdale, NY 11735
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', paddingLeft: { xs: 0, md: '20px' } }}>
            <Box>
              <SvgIcon
                sx={{ width: '100%', height: '100%', fill: 'none', minWidth: 18, minHeight: 18 }}
                component={Message}
                viewBox="0 0 18 18"
              />
            </Box>
            <Typography
              variant="body2"
              color="initial"
              sx={{ fontSize: '14px', color: 'text.primary', maxWidth: '200px', marginLeft: '5px' }}
            >
              contact@greenshop.com
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexGrow: 1,
              paddingLeft: { xs: 0, md: '20px' }
            }}
          >
            <Box>
              <SvgIcon
                sx={{ width: '100%', height: '100%', fill: 'none', minWidth: 19, minHeight: 19 }}
                component={Calling}
                viewBox="0 0 19 19"
              />
            </Box>
            <Typography
              variant="body2"
              color="initial"
              sx={{ fontSize: '14px', color: 'text.primary', maxWidth: '200px', marginLeft: '5px' }}
            >
              +88 01911 717 490
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
)

export default React.memo(FooterMiddle)
