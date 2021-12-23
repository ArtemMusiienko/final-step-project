import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@mui/material'

const ShopCategoryLink = ({ category, handleDrawerToggle }) => {
  const path = () => {
    const startPath = ['/shop']
    const pathArray = category.id.split('-')
    return [...startPath, ...pathArray].join('/')
  }
  return (
    <Link sx={{ textDecoration: 'none', padding: '6px 8px' }} component={RouterLink} to={path()}>
      {category.name}
    </Link>
  )
}

export default ShopCategoryLink
