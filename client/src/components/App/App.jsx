import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from '../Layout'
import Favorites from '../Pages/Favorites'
import Cart from '../Pages/Cart'
import ProductCard from '../Pages/ProductCard/ProductCard'
import NotFound from '../Pages/NotFound'
import './App.scss'
import Main from '../Pages/Main'
import PlantCare from '../Pages/PlantCare'
import checkTerminationToken from '../../services/checkTerminationToken'
import { userLogout } from '../../store/auth/actions'
import ProductsAll from '../Pages/Products/ProductsAll'
const App = () => {
  const [path, setPath] = useState(useLocation())
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const { pathname } = useLocation()
  if (pathname !== path) {
    if (user && checkTerminationToken(user)) {
      dispatch(userLogout())
    }
    setPath(pathname)
  }
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Main />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="productcard" element={<ProductCard />} />
        <Route path="shop" element={<ProductsAll />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
        <Route path="plant-care" element={<PlantCare />} />
      </Route>
    </Routes>
  )
}
export default App
