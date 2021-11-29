import React from 'react'
import './NotFound.scss'
import { Link } from 'react-router-dom'
import background from '../../../assets/image/error.gif'

const NotFound = () => (
  <div className="not-found">
    <Link to="/">
      <img src={background} className="background" alt="background" />
    </Link>
  </div>
)

export default NotFound
