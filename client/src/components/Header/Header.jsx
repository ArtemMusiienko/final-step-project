import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Divider,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Button,
  MenuItem,
  Tooltip,
  Typography
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import Logo from '../Logo'
import HeaderTabs from './HeaderTabs'
import CartBage from '../CartBage'
import SearchButton from '../SearchButton'

const pages = [
  {
    linkName: 'Home',
    path: '/'
  },
  {
    linkName: 'Shop',
    path: '/shop'
  },
  {
    linkName: 'Plant Care',
    path: '/plant-care'
  },
  {
    linkName: 'Blogs',
    path: '/blogs'
  }
]

const settings = ['Login', 'Search', 'Dashboard', 'Cart']

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget)
  }

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar position="static" color="secondary" sx={{ boxShadow: 'none' }}>
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
          <Logo />
        </Box>
        <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="primary"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left'
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' }
            }}
          >
            {pages.map(page => (
              <MenuItem key={page.path} onClick={handleCloseNavMenu}>
                <Button component={Link} to={page.path} sx={{ color: 'text.primary' }}>
                  {page.linkName}
                </Button>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', justifyContent: 'center' } }}>
          <Logo />
        </Box>
        <HeaderTabs pages={pages} />
        <Box
          sx={{
            flexGrow: 0,
            justifyContent: 'space-between',
            minWidth: '220px',
            display: { xs: 'none', sm: 'flex' }
          }}
        >
          <SearchButton />
          <CartBage />
          <Button variant="contained" startIcon={<ExitToAppIcon />}>
            Login
          </Button>
        </Box>
        <Box sx={{ display: { sm: 'none' } }}>
          <Tooltip title="Options">
            <Button
              variant="contained"
              aria-label="more-options"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenUserMenu}
              color="primary"
              sx={{ padding: '5px', minWidth: '35px' }}
            >
              <MoreHorizIcon />
            </Button>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map(setting => (
              <MenuItem key={setting} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
      <Divider />
    </AppBar>
  )
}
export default Header
