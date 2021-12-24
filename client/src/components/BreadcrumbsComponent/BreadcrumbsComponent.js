import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Toolbar, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import Link from '@mui/material/Link'
import Breadcrumbs from '@mui/material/Breadcrumbs'

const BreadcrumbsComponent = ({ location }) => {
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
          >
            {element}
          </Link>
        )
      }
      if (index === path.length - 1) {
        return (
          <Typography color="text.primary" key={element}>
            {element}
          </Typography>
        )
      }
      const currentPath = path.slice(0, index + 1).join('/')
      return (
        <Link underline="hover" key={element} component={RouterLink} to={`/${currentPath}`}>
          {element}
        </Link>
      )
    })
  }
  return (
    <Toolbar>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        {createBreadcrumbs()}
      </Breadcrumbs>
    </Toolbar>
  )
}

export default BreadcrumbsComponent
