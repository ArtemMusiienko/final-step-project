import React from 'react'
import { Button, SvgIcon, Typography, Divider } from '@mui/material'
import { Box } from '@mui/system'
import { ReactComponent as Facebook } from '../../assets/facebookIcon.svg'
import { ReactComponent as Instagram } from '../../assets/instagramIcon.svg'
import { ReactComponent as Twitter } from '../../assets/twitterIcon.svg'
import { ReactComponent as Linkedin } from '../../assets/linkedinIcon.svg'
import { ReactComponent as Union } from '../../assets/unionIcon.svg'
import { ReactComponent as Payment } from '../../assets/paymentIcon.svg'
import FooterShortMenu from './FooterShortMenu'

const FooterBottom = () => {
  const handleClick = () => {
    console.log('click')
  }
  return (
    <Box
      sx={{
        padding: '33px 22px',
        backgroundColor: '#FBFBFB',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: { xs: 'column', sm: 'row' }
      }}
    >
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column'
        }}
      >
        <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: 'text.primary' }}>
          My Account
        </Typography>
        <Typography sx={{ fontSize: '14px', color: 'text.primary' }}>My Account</Typography>
        <Typography sx={{ fontSize: '14px', color: 'text.primary' }}>Our stores</Typography>
        <Typography sx={{ fontSize: '14px', color: 'text.primary' }}>Contact us</Typography>
        <Typography sx={{ fontSize: '14px', color: 'text.primary' }}>Career</Typography>
        <Typography sx={{ fontSize: '14px', color: 'text.primary' }}>Specials</Typography>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column'
        }}
      >
        <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: 'text.primary' }}>
          Help & Guide
        </Typography>
        <Typography sx={{ fontSize: '14px', color: 'text.primary' }}>Help Center</Typography>
        <Typography sx={{ fontSize: '14px', color: 'text.primary' }}>How to Buy</Typography>
        <Typography sx={{ fontSize: '14px', color: 'text.primary' }}>
          Shipping & Delivery
        </Typography>
        <Typography sx={{ fontSize: '14px', color: 'text.primary' }}>Product Policy</Typography>
        <Typography sx={{ fontSize: '14px', color: 'text.primary' }}>How to Return</Typography>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column'
        }}
      >
        <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: 'text.primary' }}>
          Categories
        </Typography>
        <Typography sx={{ fontSize: '14px', color: 'text.primary' }}>House Plants</Typography>
        <Typography sx={{ fontSize: '14px', color: 'text.primary' }}>Potter Plants</Typography>
        <Typography sx={{ fontSize: '14px', color: 'text.primary' }}>Seeds</Typography>
        <Typography sx={{ fontSize: '14px', color: 'text.primary' }}>Small Plants</Typography>
        <Typography sx={{ fontSize: '14px', color: 'text.primary' }}>Accessories</Typography>
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <FooterShortMenu />
      </Box>
      <Divider sx={{ display: { sm: 'none' }, margin: '5px 0' }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: 'text.primary' }}>
          Social Media
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            color="primary"
            variant="outlined"
            onClick={handleClick}
            sx={{ minWidth: '30px', padding: '7px' }}
          >
            <SvgIcon component={Facebook} viewBox="0 0 8 16" />
          </Button>
          <Button
            color="primary"
            variant="outlined"
            onClick={handleClick}
            sx={{ minWidth: '30px', padding: '7px' }}
          >
            <SvgIcon component={Instagram} viewBox="0 0 16 16" />
          </Button>
          <Button
            color="primary"
            variant="outlined"
            onClick={handleClick}
            sx={{ minWidth: '30px', padding: '7px' }}
          >
            <SvgIcon component={Twitter} viewBox="0 0 16 14" />
          </Button>
          <Button
            color="primary"
            variant="outlined"
            onClick={handleClick}
            sx={{ minWidth: '30px', padding: '7px' }}
          >
            <SvgIcon component={Linkedin} viewBox="0 0 16 16" />
          </Button>
          <Button
            color="primary"
            variant="outlined"
            onClick={handleClick}
            sx={{ minWidth: '30px', padding: '7px' }}
          >
            <SvgIcon component={Union} viewBox="0 0 19 14" />
          </Button>
        </Box>
        <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: 'text.primary' }}>
          We accept
        </Typography>
        <Box>
          <SvgIcon
            sx={{ width: '100%', height: '100%' }}
            component={Payment}
            viewBox="0 0 224 26"
          />
        </Box>
      </Box>
    </Box>
  )
}

export default FooterBottom
