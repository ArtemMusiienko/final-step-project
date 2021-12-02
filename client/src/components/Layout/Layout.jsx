import React from 'react'
import Container from '@mui/material/Container'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import './Layout.scss'

const Layout = () => (
  <Container maxWidth="xl">
    <Header />
    <Outlet />
    <Footer />
  </Container>
)

export default Layout
