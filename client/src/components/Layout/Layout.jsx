import React from 'react'
import Container from '@mui/material/Container'
import { Outlet } from 'react-router-dom'
import { Toolbar } from '@mui/material'
import Header from '../Header'
import Footer from '../Footer'
import './Layout.scss'
import ScrollTop from '../ScrollTop'

const Layout = () => (
  <Container maxWidth="xl">
    <Header />
    <Toolbar sx={{ display: { md: 'none' } }} />
    <Outlet />
    <Footer />
    <ScrollTop />
  </Container>
)

export default Layout
