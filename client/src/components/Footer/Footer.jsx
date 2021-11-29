import React from 'react'
import { Avatar, Paper } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import { display } from '@mui/system'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { flexbox, fontSize, padding, textAlign } from '@mui/system'
import logo from '../Image/sss.jpg'
import './Footer.scss'
import location from '../Image/location.png'
import mail from '../Image/4213413-email-envelope-gmail-google-latter-mail-message_115415.png'
import phone from '../Image/phone-handset_icon-icons.com_48252.png'
import payment from '../../assets/payment.svg'
import faceBook from '../../assets/Facebook.svg'
import instagram from '../../assets/Instagram.svg'
import twitter from '../../assets/Twitter.svg'
import linkid from '../../assets/Linkedin.svg'
import union from '../../assets/Union.svg

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

    },
    forLastSectio: {
      zIndex: 100,
      height: 236,
      backgroundColor: '#FBFBFB',
      display: 'flex',
      justifyContent: 'flex-start',
      fontSize: 18
    },
    forDetails: {
      fontSize: 14,
      marginTop: 16
    },
    forFirsBox: {
      marginLeft: 23
    },
    forLastBoxes: {
      marginLeft: 140
    }
  }
})

const Footer = () => {
  const sizes = useSizes()
  return (
    <>
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
      <Box className={sizes.forLastSectio}>
        <Box className={sizes.forFirsBox}>
          <Typography variant="h6">
            <b>My Account</b>
          </Typography>
          <Typography className={sizes.forDetails}>My Acaunt</Typography>
          <Typography className={sizes.forDetails}>Our Stories</Typography>
          <Typography className={sizes.forDetails}>Contact us</Typography>
          <Typography className={sizes.forDetails}>Career</Typography>
          <Typography className={sizes.forDetails}>Specials</Typography>
        </Box>
        <Box className={sizes.forLastBoxes}>
          <Typography variant="h6">
            {' '}
            <b>Help & Guide </b>
          </Typography>
          <Typography className={sizes.forDetails}>Help Center</Typography>
          <Typography className={sizes.forDetails}>How to Buy</Typography>
          <Typography className={sizes.forDetails}>Shoping & Deliver</Typography>
          <Typography className={sizes.forDetails}>Product Policy</Typography>
          <Typography className={sizes.forDetails}>How to Return</Typography>
        </Box>
        <Box className={sizes.forLastBoxes}>
          <Typography variant="h6">
            <b> Categories </b>
          </Typography>
          <Typography className={sizes.forDetails}>House Plants</Typography>
          <Typography className={sizes.forDetails}>Potter Plants</Typography>
          <Typography className={sizes.forDetails}>Seeds</Typography>
          <Typography className={sizes.forDetails}>Small Plants</Typography>
          <Typography className={sizes.forDetails}>Accessories</Typography>
        </Box>
        <Box className={sizes.forLastBoxes}>
          <Typography variant="h6">
            {' '}
            <b>Social Media </b>
          </Typography>
          <Box style={{ display: 'flex', marginTop: 20 }}>
            <Box
              style={{
                display: 'flex',
                alignItems: 'center',
                height: 30,
                width: 30,
                borderWidth: 1,
                borderColor: 'green',
                borderRadius: 5,
                borderStyle: 'solid'
              }}
            >
              <Avatar
                variant="square"
                src={faceBook}
                style={{
                  marginLeft: 11,
                  height: 16,
                  width: 8
                }}
              />
            </Box>
            <Box
              style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: 10,
                height: 30,
                width: 30,
                borderWidth: 1,
                borderColor: 'green',
                borderRadius: 5,
                borderStyle: 'solid'
              }}
            >
              <Avatar
                variant="square"
                src={instagram}
                style={{ height: 16, width: 16, marginLeft: 7 }}
              />
            </Box>
            <Box
              style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: 10,
                height: 30,
                width: 30,
                borderWidth: 1,
                borderColor: 'green',
                borderRadius: 5,
                borderStyle: 'solid'
              }}
            >
              <Avatar
                variant="square"
                src={twitter}
                style={{ height: 13, width: 16, marginLeft: 7 }}
              />
            </Box>

            <Box
              style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: 10,
                height: 30,
                width: 30,
                borderWidth: 1,
                borderColor: 'green',
                borderRadius: 5,
                borderStyle: 'solid'
              }}
            >
              {' '}
              <Avatar
                variant="square"
                src={linkid}
                style={{ height: 16, width: 16, marginLeft: 7 }}
              />
            </Box>
            <Box
              style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: 10,
                height: 30,
                width: 30,
                borderWidth: 1,
                borderColor: 'green',
                borderRadius: 5,
                borderStyle: 'solid'
              }}
            >
              <Avatar
                variant="square"
                src={union}
                style={{ height: 14, width: 19, marginLeft: 7 }}
              />
            </Box>
          </Box>
          <Typography variant="h6" style={{ marginTop: 20 }}>
            <b>We accept</b>
          </Typography>
          <Avatar
            variant="square"
            src={payment}
            style={{ height: 26, width: 226, marginTop: 20 }}
          />
        </Box>
      </Box>
    </>
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
