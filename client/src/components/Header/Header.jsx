import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'

const Header = () => (
  <>
    <div>
      <NavLink to="cart">Cart</NavLink>
    </div>
    <div>
      <NavLink to="favorites">Favorites</NavLink>
    </div>
    <div>
      <NavLink to="/">Home</NavLink>
    </div>
  </>
)

export default Header
