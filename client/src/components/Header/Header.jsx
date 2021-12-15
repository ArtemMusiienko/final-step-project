import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Divider, AppBar, Box, Toolbar, IconButton, Typography, Drawer } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Logo from '../Logo'
import HeaderTabs from './HeaderTabs'
import CartBage from '../CartBage'
import SearchButton from '../SearchButton'
import LoginModal from '../LoginModal/LoginModal'
import LogoutModal from '../LogoutModal'

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
  const [mobileOpen, setMobileOpen] = useState(false)
  const { isLoggedIn } = useSelector(state => state.auth)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <AppBar
      color="secondary"
      sx={{
        boxShadow: 'none',
        zIndex: theme => theme.zIndex.drawer + 1,
        position: { xs: 'fixed', md: 'static' }
      }}
    >
      <Toolbar disableGutters>
        <Box sx={{ flex: '0 0 20%', display: { xs: 'none', md: 'flex' } }}>
          <Logo />
        </Box>
        <Box sx={{ flex: '0 0 15%', display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="menu-navigation"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleDrawerToggle}
            color="primary"
          >
            <MenuIcon />
          </IconButton>
          <Box component="nav" sx={{ width: '100%', flexShrink: { sm: 0 } }} aria-label="nav-menu">
            <Drawer
              component="div"
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
              sx={{
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: { xs: '100%', sm: '70%' } }
              }}
            >
              <Toolbar />
              <Typography variant="body1" color="initial">
                Categories
              </Typography>
              <Divider />
              <Typography variant="body1" color="initial">
                Login
              </Typography>
              <Typography variant="body1" color="initial">
                Plant Care
              </Typography>
              <Typography variant="body1" color="initial">
                Blogs
              </Typography>
            </Drawer>
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', justifyContent: 'center' } }}>
          <Logo />
        </Box>
        <HeaderTabs pages={pages} />
        <Box
          sx={{
            flex: { xs: '0 0 30%', md: '0 0 22%' },
            justifyContent: { xs: 'space-evenly', md: 'space-between' },
            display: 'flex'
          }}
        >
          <SearchButton />
          <CartBage />
          {isLoggedIn ? <LogoutModal /> : <LoginModal />}
        </Box>
      </Toolbar>
      <Divider />
    </AppBar>
  )
}
export default Header
