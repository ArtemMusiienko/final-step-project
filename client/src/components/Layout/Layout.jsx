import React from 'react'
import Container from '@mui/material/Container'
import { Outlet } from 'react-router-dom'
import { Toolbar } from '@mui/material'
import Header from '../Header'
import Footer from '../Footer'
import './Layout.scss'
import ScrollTop from '../ScrollTop'
import Slider from '../Slider'

const Layout = () => (
  <Container maxWidth="xl">
    <Header />
    <Toolbar sx={{ display: { md: 'none' } }} />
    <Slider />
    <Outlet />
    <Footer />
    <ScrollTop />
  </Container>
)

export default Layout
