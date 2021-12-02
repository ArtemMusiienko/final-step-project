import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Favorites from '../Pages/Favorites'
import Cart from '../Pages/Cart'
import ProductCard from '../Pages/ProductCard/ProductCard'
import NotFound from '../Pages/NotFound'
import './App.scss'
import Main from '../Pages/Main'

const App = () => (
  <Layout>
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/favorites" element={<Favorites />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/productcard" element={<ProductCard />} />
      <Route exact path="*" element={<NotFound />} />
    </Routes>
  </Layout>
)
export default App
