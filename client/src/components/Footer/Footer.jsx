import React from 'react'
import { Avatar } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { makeStyles } from '@mui/styles'
import { flexbox, fontSize, padding, textAlign } from '@mui/system'
import logo from '../Image/sss.jpg'
import './Footer.scss'
import location from '../Image/location.png'
import mail from '../Image/4213413-email-envelope-gmail-google-latter-mail-message_115415.png'
import phone from '../Image/phone-handset_icon-icons.com_48252.png'

const useSizes = makeStyles(theme => {
  return {
    root: { flexGrow: 1 },
    menuFooter: {
      display: 'flex',
      alignItems: 'center'
    },
    forIco: {
      marginLeft: 23
    },
    forContent: {
      color: 'rgba(61, 61, 61, 1)',
      fontSize: 14,
      marginLeft: 60,
      display: 'flex',
      alignItems: 'center'
    }
  }
})

const Footer = () => {
  const sizes = useSizes()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Box
          className={sizes.menuFooter}
          style={{ backgroundColor: 'rgba(70, 163, 88, 0.1)', height: 88 }}
        >
          <Box className={sizes.menuFooter}>
            <Avatar src={logo} style={{ width: 35, height: 35 }} className={sizes.forIco} />
            <Typography variant="h6" style={{ color: '#46A358', marginLeft: 6, marginTop: 3 }}>
              {' '}
              GREENSHOP{' '}
            </Typography>
          </Box>
          <Typography variant="h6" className={sizes.forContent}>
            <Avatar
              src={location}
              variant="square"
              style={{ width: 30, height: 30, marginRight: 10 }}
            />
            70 West Buckingham Ave.
            <br /> Farmingdale, NY 11735{' '}
          </Typography>
          <Typography variant="h6" className={sizes.forContent}>
            <Avatar
              src={mail}
              variant="square"
              style={{ width: 20, height: 20, marginRight: 10 }}
            />{' '}
            contact@greenshop.com{' '}
          </Typography>
          <Typography variant="h6" className={sizes.forContent}>
            <Avatar
              src={phone}
              variant="square"
              style={{ width: 20, height: 20, marginRight: 10 }}
            />{' '}
            +88 01911 717 490{' '}
          </Typography>
        </Box>
      </AppBar>
    </Box>
  )
}

export default Footer
