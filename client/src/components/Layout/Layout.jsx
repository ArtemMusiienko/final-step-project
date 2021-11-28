import React from 'react'
import Container from '@mui/material/Container'
import Header from '../Header'
import Footer from '../Footer'
import './Layout.scss'
import ProductsAll from './Products/ProductsAll'

const Layout = ({ children }) => (
  <Container maxWidth="xl">
    <Header />
    {children}
    <ProductsAll />
    <Footer />
  </Container>
)

export default Layout
