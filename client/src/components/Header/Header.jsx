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
import { Avatar, Button } from '@mui/material'
import Container from '@mui/material/Container'
import { makeStyles } from '@mui/styles'
import Logo from '../Image/sss.jpg'

const useStyle = makeStyles(theme => {
  return {
    root: { flexGrow: 1 },
    menuButtons: {
      marginRight: theme.spacing(1)
    },
    title: {
      flexGrow: 1
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
      <AppBar position="fixed" color="primary">
        <Container position="fixed">
          <Toolbar>
            <Avatar src={Logo} style={{ width: 35, height: 35 }} className={classes.menuButtons} />
            <Typography variant="h6" style={{ color: '#46A358' }} className={classes.title}>
              {' '}
              GREENSHOP{' '}
            </Typography>
            <Box>
              <Button variant="contained" style={{ backgroundColor: '#46A358', color: '#ffffff' }}>
                {' '}
                Login{' '}
              </Button>
            </Box>
            {auth && (
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
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Header
