import React from 'react'
import Container from '@mui/material/Container'
import Header from '../Header'
import Footer from '../Footer'
import './Layout.scss'

const Layout = ({ children }) => (
  <Container maxWidth="xl">
    <Header />
    {children}
    <Footer />
  </Container>
)

export default Layout
