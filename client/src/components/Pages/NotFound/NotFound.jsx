import React from 'react'
import { Link } from 'react-router-dom'
import background from '../../../assets/image/error.gif'

const NotFound = () => (
  <div className="not-found">
    <Link to="/">
      <img src={background} style={{ width: '100%' }} alt="background" />
    </Link>
  </div>
)

export default React.memo(NotFound)
