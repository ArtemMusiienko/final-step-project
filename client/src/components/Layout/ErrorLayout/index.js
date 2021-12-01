import React from 'react'
import Container from '@mui/material/Container'
import Header from '../Header'
import Footer from '../Footer'
import './Layout.scss'
import {Outlet} from 'react-router-dom'

const Layout = () => (
  <Container maxWidth="xl">
    <Header />
    <Outlet/>
    <Footer />
  </Container>
)

export default Layout
