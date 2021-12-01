import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import './Header.scss'
import { borders } from '@mui/system'
import { Avatar, Button, ImageList, Paper } from '@mui/material'
import Container from '@mui/material/Container'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import Logo from '../Image/sss.jpg'
import ico from '../Image/clipart3366677.png'
import bascet from '../Image/shopping-cart.png'

const useStyle = makeStyles(theme => {
  return {
    root: { flexGrow: 1 },
    menuButtons: {
      marginRight: theme.spacing(1)
    },
    title: {
      flexGrow: 1
    },
    menuLink: {
      display: 'flex',
      justifyContent: 'center'
    },
    linkStyle: {
      textDecoration: 'none',
      color: '#3D3D3D'
    }
  }
})
const Header = () => {
  const classes = useStyle()
  const [auth, setAuth] = useState(true)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Container position="static">
          <Toolbar>
            <Avatar src={Logo} style={{ width: 35, height: 35 }} className={classes.menuButtons} />
            <Typography variant="h6" style={{ color: '#46A358' }} className={classes.title}>
              {' '}
              GREENSHOP{' '}
            </Typography>
            <Box sx={{ flexGrow: 1 }} className={classes.menuLink}>
              <Typography component="div" sx={{ flexGrow: 1 }} className={classes.menuLink}>
                <NavLink className={classes.linkStyle} to="/">
                  Home
                </NavLink>
              </Typography>
              <Typography component="div" sx={{ flexGrow: 1 }}>
                <NavLink className={classes.linkStyle} to="/cart">
                  Shop
                </NavLink>
              </Typography>
              <Typography component="div" sx={{ flexGrow: 1 }}>
                <NavLink className={classes.linkStyle} to="/plant-care">
                  {' '}
                  Plant Care
                </NavLink>
              </Typography>
              <Typography component="div" sx={{ flexGrow: 1 }}>
                <NavLink className={classes.linkStyle} to="/cart">
                  Blogs
                </NavLink>
              </Typography>
            </Box>
            <Box className={classes.menuLink}>
              <Avatar
                variant="square"
                style={{ height: 24, width: 24, marginRight: 33, marginTop: 5 }}
                src={bascet}
              />
              <Button variant="contained" style={{ backgroundColor: '#46A358', color: '#ffffff' }}>
                {' '}
                <Avatar
                  variant="square"
                  src={ico}
                  style={{ width: 20, height: 20, marginRight: 5 }}
                />
                Login{' '}
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: '#46A358', color: '#ffffff', marginLeft: 5 }}
              >
                {' '}
                <Avatar
                  variant="square"
                  style={{ width: 30, height: 30, marginRight: 5, backgroundColor: '#46A358' }}
                />
                Sign Ap{' '}
              </Button>
            </Box>
            {/* {auth && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )} */}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Header
