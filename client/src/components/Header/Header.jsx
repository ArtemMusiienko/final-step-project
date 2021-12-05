import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Divider, AppBar, Box, Toolbar, IconButton, Menu, Button, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
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

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null)

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position="static" color="secondary" sx={{ boxShadow: 'none' }}>
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
          <Logo />
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
          sx={{ flexGrow: 0, display: 'flex', justifyContent: 'space-between', minWidth: '220px' }}
        >
          <SearchButton />
          <CartBage />
          <Button variant="contained" startIcon={<ExitToAppIcon />}>
            Login
          </Button>
        </Box>
      </Toolbar>
      <Divider />
    </AppBar>
  )
}
export default Header
