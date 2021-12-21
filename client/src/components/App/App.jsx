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
import checkTerminationToken from '../../services/checkTerminationToken'
import { userLogout } from '../../store/auth/actions'
import { setCatalog } from '../../store/catalog/actions'
import ProductsAll from '../Pages/Products/ProductsAll'
import Checkout from '../Pages/Checkout'

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
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
        <Route exact path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App
