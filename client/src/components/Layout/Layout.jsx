import React from 'react'
import Container from '@mui/material/Container'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import Main from '../Pages/Main'
import './Layout.scss'
import ScrollTop from '../ScrollTop'

const Layout = () => (
  <Container maxWidth="xl">
    <Header />
    <Main />
    <Outlet />
    <Footer />
    <ScrollTop />
  </Container>
)

export default Layout
