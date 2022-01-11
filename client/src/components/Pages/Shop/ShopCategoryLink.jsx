import React, { useEffect, useState } from 'react'
import { Link as RouterLink, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useTheme } from '@mui/material/styles'
import { Link } from '@mui/material'

const ShopCategoryLink = ({ category }) => {
  const theme = useTheme()
  const params = useParams()
  const { products } = useSelector(state => state.products)
  const [categoryName, setCategoryName] = useState(category.id.split('-').reverse()[0])
  const [numberOfProducts, setNumberOfProducts] = useState(0)
  useEffect(() => {
    const currentProductList = products.filter(product => product.categories === category.id)
    setNumberOfProducts(currentProductList.length)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products])
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
      {`${category.name} (${numberOfProducts})`}
    </Link>
  )
}

export default React.memo(ShopCategoryLink)
