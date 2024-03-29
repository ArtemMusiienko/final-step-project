import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Divider, AppBar, Box, Toolbar, IconButton, Drawer, Container, Link } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import Logo from '../Logo'
import HeaderTabs from './HeaderTabs'
import CartBage from '../CartBage'
import SearchButton from '../SearchButton'
import LoginModal from '../LoginModal'
import LogoutModal from '../LogoutModal'
import HeaderNavigationMobile from './HeaderNavigationMobile'

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
    linkName: 'News',
    path: '/newsInfo'
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
        position: { xs: 'fixed', md: 'sticky' },
        '&.MuiPaper-root&.MuiAppBar-root': { paddingRight: '0 !important' }
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          display: { xs: 'flex', sm: 'none' },
          justifyContent: 'center'
        }}
      >
        <Logo />
      </Toolbar>
      <Toolbar disableGutters sx={{ padding: { xs: '0 16px', sm: '0 24px', md: 0 } }}>
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
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Box component="nav" sx={{ width: '100%', flexShrink: { sm: 0 } }} aria-label="nav-menu">
            <Drawer
              component="div"
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true
              }}
              SlideProps={{
                timeout: 400
              }}
              sx={{
                '& .MuiDrawer-paper': {
                  boxSizing: 'border-box',
                  width: { xs: '100%', sm: '70%' },
                  overflow: 'hidden'
                }
              }}
            >
              <Container>
                <HeaderNavigationMobile
                  mobileOpen={mobileOpen}
                  handleDrawerToggle={handleDrawerToggle}
                />
                <Divider sx={{ margin: '15px 0' }} />
                <Box sx={{ marginLeft: '5px' }}>
                  {isLoggedIn ? (
                    <>
                      <Link
                        sx={{ color: 'text.secondary', paddingTop: '10px', paddingRight: '10px' }}
                        to="/account"
                        component={RouterLink}
                        onClick={() => handleDrawerToggle()}
                      >
                        <ManageAccountsIcon />
                      </Link>
                      <LogoutModal handleDrawerToggle={handleDrawerToggle} />
                    </>
                  ) : (
                    <LoginModal handleDrawerToggle={handleDrawerToggle} />
                  )}
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  {pages.map(page => (
                    <Link
                      sx={{ textDecoration: 'none', padding: '6px 8px' }}
                      key={page.linkName}
                      component={RouterLink}
                      to={page.path}
                      onClick={handleDrawerToggle}
                    >
                      {page.linkName}
                    </Link>
                  ))}
                </Box>
              </Container>
            </Drawer>
          </Box>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', sm: 'flex', md: 'none', justifyContent: 'center' }
          }}
        >
          <Logo />
        </Box>
        <HeaderTabs pages={pages} />
        <Box
          sx={{
            flex: { md: '0 0 22%' },
            flexGrow: { xs: 1, sm: 0 },
            justifyContent: 'space-between',
            display: 'flex'
          }}
        >
          <SearchButton />
          <CartBage />
          {isLoggedIn ? (
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Link
                sx={{ color: 'text.secondary', paddingTop: '10px', paddingRight: '10px' }}
                to="/account"
                component={RouterLink}
              >
                <ManageAccountsIcon />
              </Link>
              <LogoutModal />
            </Box>
          ) : (
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <LoginModal />
            </Box>
          )}
        </Box>
      </Toolbar>
      <Divider />
    </AppBar>
  )
}
export default React.memo(Header)
