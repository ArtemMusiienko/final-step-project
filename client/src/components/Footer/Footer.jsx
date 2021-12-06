import React from 'react'
import { Avatar, TextField, Button } from '@mui/material'
import { Box } from '@mui/system'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import FooterTop from './FooterTop'
import FooterMiddle from './FooterMiddle'
import FooterBottom from './FooterBottom'

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
      marginLeft: 23,
      marginTop: 20
    },
    forLastBoxes: {
      marginLeft: 140,
      marginTop: 20
    }
  }
})

const Footer = () => {
  const sizes = useSizes()
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
        <Typography>© 2021 GreenShop. All Rights Reserved.</Typography>
      </Box>
      {/* <Box
        style={{
          height: 250,
          backgroundColor: '#FBFBFB',
          display: 'flex',
          justifyContent: 'space-around'
        }}
      >
        <Box style={{ marginTop: 15, marginBottom: 14 }}>
          <Avatar variant="square" src={cactusFirst} style={{ width: 130, height: 150 }} />
          <Typography variant="h6" style={{ fontSize: 17 }}>
            <b>Garden Care</b>
          </Typography>
          <Typography style={{ fontSize: 14 }}>
            We are an online plant shop offering a <br />
            wide range of cheap and trendy plants.
          </Typography>
        </Box>
        <Box style={{ marginTop: 15, marginBottom: 14 }}>
          <Avatar variant="square" src={cactusSecond} style={{ width: 130, height: 150 }} />
          <Typography variant="h6" style={{ fontSize: 17 }}>
            <b>Plant Renovation</b>
          </Typography>
          <Typography style={{ fontSize: 14 }}>
            We are an online plant shop offering a<br /> wide range of cheap and trendy plants.
          </Typography>
        </Box>
        <Box style={{ marginTop: 15, marginBottom: 14 }}>
          <Avatar variant="square" src={cactusThird} style={{ width: 145, height: 150 }} />
          <Typography variant="h6" style={{ fontSize: 17 }}>
            <b>Watering Graden</b>
          </Typography>
          <Typography style={{ fontSize: 14 }}>
            We are an online plant shop offering a <br /> wide range of cheap and trendy plants.
          </Typography>
        </Box>
        <Box style={{ marginTop: 15, marginBottom: 14 }}>
          <Typography variant="h6" style={{ fontSize: 17, marginBottom: 17 }}>
            {' '}
            <b>Would you like to join newsletters? </b>
          </Typography>
          <TextField variant="outlined" placeholder="Enter your Email" name="msg" id="text" />
          <Button
            variant="square"
            style={{
              color: '#FFFFFF',
              height: 56,
              width: 80,
              backgroundColor: '#46A358'
            }}
          >
            Join
          </Button>
          <Typography
            style={{
              fontSize: 14,
              marginTop: 18
            }}
          >
            We usually post offers and challenges in newsletter.
            <br /> We’re your online houseplant destination. <br />
            We offer a wide range of houseplants and accessories <br />
            shipped directly from our (green)house to yours!{' '}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
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
      <Box style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
        <Typography>© 2021 GreenShop. All Rights Reserved.</Typography>
      </Box> */}
    </Box>
  )
}

export default Footer
