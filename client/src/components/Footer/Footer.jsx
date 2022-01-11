import React from 'react'
import { Box } from '@mui/system'
import Typography from '@mui/material/Typography'
import FooterTop from './FooterTop'
import FooterMiddle from './FooterMiddle'
import FooterBottom from './FooterBottom'

const Footer = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <FooterTop />
    <FooterMiddle />
    <FooterBottom />
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
      <Typography>© 2021 GreenShop. All Rights Reserved.</Typography>
    </Box>
  </Box>
)

export default React.memo(Footer)
