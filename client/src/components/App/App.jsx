import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
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
import Checkout from '../Pages/Checkout'
import Account from '../Account'
import { removeWishlist } from '../../store/wishlist/reducer'
import { setAllReviews } from '../../store/reviews/actions'
import { setWishlist } from '../../store/wishlist/actions'
import { setSlider } from '../../store/slider/actions'
import { deleteCartFromState } from '../../store/cart/reducer'
import News from '../Pages/News'

const App = () => {
  const dispatch = useDispatch()
  const { user, isLoggedIn } = useSelector(state => state.auth)
  const { pathname } = useLocation()
  useEffect(() => {
    if (user && checkTerminationToken(user)) {
      dispatch(userLogout())
      dispatch(removeWishlist())
      dispatch(deleteCartFromState())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(setWishlist())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn])
  useEffect(() => {
    dispatch(setCatalog())
    dispatch(setProducts())
    dispatch(setAllReviews())
    dispatch(setSlider())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="favorites" element={<Favorites />} />
        <Route
          path="account"
          element={
            <RequireAuth redirectTo="/">
              <Account />
            </RequireAuth>
          }
        />
        <Route path="shop/cart" element={<Cart />} />
        <Route path="shop/:categories/:productUrl" element={<ProductCard />} />
        <Route path="shop/checkout" element={<Checkout />} />
        <Route path="shop" element={<Shop />}>
          <Route path=":categories" element={<Shop />} />
        </Route>
        <Route path="plant-care" element={<PlantCare />} />
        <Route path="newsInfo" element={<News />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
const RequireAuth = ({ children, redirectTo }) => {
  const { isLoggedIn } = useSelector(state => state.auth)
  return isLoggedIn ? children : <Navigate to={redirectTo} />
}
export default React.memo(App)
