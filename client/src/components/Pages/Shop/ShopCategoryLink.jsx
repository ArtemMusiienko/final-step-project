import React, { useState } from 'react'
import { Link as RouterLink, useParams } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import { Link } from '@mui/material'

const ShopCategoryLink = ({ category }) => {
  const theme = useTheme()
  const params = useParams()
  const [categoryName, setCategoryName] = useState(category.id.split('-').reverse()[0])
  const createPath = () => {
    const parseId = category.id.split('-')
    const path = parseId.filter(id => id !== category.parentId)
    if (category.parentId === 'null') {
      return '/shop'
    }
    return path.join('/')
  }
  return (
    <Link
      sx={{
        textDecoration: 'none',
        color: params.categories === categoryName ? theme.palette.primary.main : 'text.primary',
        fontWeight: params.categories === categoryName ? 400 : 300,
        '&:hover': { color: theme.palette.primary.main }
      }}
      component={RouterLink}
      to={createPath()}
    >
      {category.name}
    </Link>
  )
}

export default ShopCategoryLink
