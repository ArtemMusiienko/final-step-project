import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@mui/material'

const HeaderNavMobLink = ({ category, handleDrawerToggle }) => {
  const path = () => {
    const pathArray = category.id.split('-')
    const path1 = pathArray.reverse()[0]
    return `/shop/${path1}`
  }
  const handleClick = () => {
    handleDrawerToggle()
  }
  return (
    <Link
      sx={{ textDecoration: 'none', padding: '6px 8px' }}
      component={RouterLink}
      to={path()}
      onClick={handleClick}
    >
      {category.name}
    </Link>
  )
}

export default HeaderNavMobLink
