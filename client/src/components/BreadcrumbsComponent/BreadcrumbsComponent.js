import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Toolbar, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import Link from '@mui/material/Link'
import Breadcrumbs from '@mui/material/Breadcrumbs'

const BreadcrumbsComponent = ({ location }) => {
  const { catalog } = useSelector(state => state.catalog)
  const { products } = useSelector(state => state.products)
  const createBreadcrumbs = () => {
    const path = location.pathname.split('/').filter(elem => elem !== '')
    return path.map((element, index) => {
      if (index === 0) {
        return (
          <Link
            underline="hover"
            key={element}
            sx={{
              textTransform: 'capitalize'
            }}
            component={RouterLink}
            to={`/${element}`}
            onClick={() => window.scrollTo({ top: 0 })}
          >
            {element}
          </Link>
        )
      }
      if (index === path.length - 1) {
        return (
          <Typography color="text.primary" key={element}>
            {findCorrectNameOfLink(element)}
          </Typography>
        )
      }
      const currentPath = path.slice(0, index + 1).join('/')
      return (
        <Link
          underline="hover"
          key={element}
          component={RouterLink}
          to={`/${currentPath}`}
          onClick={() => window.scrollTo({ top: 0 })}
        >
          {findCorrectNameOfLink(element)}
        </Link>
      )
    })
  }
  const findCorrectNameOfLink = pathName => {
    if (catalog.length) {
      const matchLinksFromCatalog = catalog.filter(elem => elem.id.includes(pathName))
      if (matchLinksFromCatalog.length) {
        const nameOfLink = matchLinksFromCatalog.filter(
          elem => elem.id.split('-').reverse()[0] === pathName
        )
        return nameOfLink[0].name
      }
      const productLink = products.filter(product => product.productUrl === `/${pathName}`)
      if (productLink.length) {
        return productLink[0].name
      }
      return pathName
    }
    return null
  }
  return (
    <Toolbar>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{ textTransform: 'capitalize' }}
      >
        {createBreadcrumbs()}
      </Breadcrumbs>
    </Toolbar>
  )
}

export default BreadcrumbsComponent
