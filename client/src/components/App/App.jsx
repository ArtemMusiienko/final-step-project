import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Favorites from '../Pages/Favorites'
import Cart from '../Pages/Cart'
import ProductCard from '../Pages/ProductCard/ProductCard'
import NotFound from '../Pages/NotFound'
import './App.scss'
import Main from '../Pages/Main'
import PlantCare from '../Pages/PlantCare'
import ProductsAll from '../Pages/Products/ProductsAll'

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Main />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="shop" element={<ProductsAll />} />
      <Route path="productcard" element={<ProductCard />} />
      <Route path="cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
      <Route path="plant-care" element={<PlantCare />} />
    </Route>
  </Routes>
)
export default App
