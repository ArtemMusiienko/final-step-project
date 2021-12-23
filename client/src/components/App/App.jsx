import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from '../Layout'
import Favorites from '../Pages/Favorites'
import Cart from '../Pages/Cart'
import ProductCard from '../Pages/ProductCard/ProductCard'
import NotFound from '../Pages/NotFound'
import Main from '../Pages/Main'
import PlantCare from '../Pages/PlantCare'
import checkTerminationToken from '../../services/checkTerminationToken'
import { userLogout } from '../../store/auth/actions'
import { setCatalog } from '../../store/catalog/actions'
import { setProducts } from '../../store/products/actions'
import Shop from '../Pages/Shop/Shop'

const App = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const { pathname } = useLocation()
  useEffect(() => {
    if (user && checkTerminationToken(user)) {
      dispatch(userLogout())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])
  useEffect(() => {
    dispatch(setCatalog())
    dispatch(setProducts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="shop" element={<Shop />}>
          <Route path=":categories" element={<Shop />}>
            <Route path=":subCategories" element={<Shop />}>
              <Route path=":productUrl" element={<ProductCard />} />
            </Route>
          </Route>
          <Route path="cart" element={<Cart />} />
        </Route>
        {/* <Route path="shop/sale" element={<Shop />} />
        <Route path="shop/house" element={<Shop />} />
        <Route path="shop/house/:categories" element={<Shop />} />
        <Route path="shop/outdoors" element={<Shop />} />
        <Route path="shop/seeds" element={<Shop />} />
        <Route path="shop/seeds/:categories" element={<Shop />} />
        <Route path="shop/trees" element={<Shop />} />
        <Route path="shop/trees/:categories" element={<Shop />} /> */}
        <Route path="plant-care" element={<PlantCare />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
export default App
