/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import { useSelector } from 'react-redux'
import ProductCardReviewForm from './ProductCardReviewsForm'
import ProductCardAllReviews from './ProductCardAllReviews'

const ProductCardReviews = () => {
  const { isLoggedIn, user } = useSelector(state => state.auth)
  const { productReviews } = useSelector(state => state.reviews)
  const [isLogin, setIsLogin] = useState(false)
  const [userId, setUserId] = useState([])
  useEffect(() => {
    if (user !== null) {
      const decodedJwt = jwt_decode(user)
      setUserId(decodedJwt.id)
    }
    setIsLogin(isLoggedIn)
  }, [isLoggedIn, user])

  const checkUserReview = () => {
    // eslint-disable-next-line no-underscore-dangle
    const userReview = productReviews.filter(review => review.customer._id === userId)
    if (userReview.length) {
      return false
    }
    return true
  }
  return (
    <>
      <ProductCardAllReviews />
      {isLogin && checkUserReview() && <ProductCardReviewForm />}
    </>
  )
}
export default React.memo(ProductCardReviews)
