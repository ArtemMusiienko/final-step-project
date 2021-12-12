import React from 'react'
import Container from '@mui/material/Container'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import './Layout.scss'
import ScrollTop from '../ScrollTop'
import Main from '../Pages/Main'

const Layout = () => (
  <Container maxWidth="xl">
    <Header />
    <Outlet />
    <Main />
    <Footer />
    <ScrollTop />
  </Container>
)

export default Layout
