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

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route exact path="" element={<Main />} />
      <Route exact path="favorites" element={<Favorites />} />
      <Route exact path="productcard" element={<ProductCard />} />
      <Route exact path="cart" element={<Cart />} />
      <Route exact path="*" element={<NotFound />} />
      <Route exact path="plant-care" element={<PlantCare />} />
    </Route>
  </Routes>
)
export default App
