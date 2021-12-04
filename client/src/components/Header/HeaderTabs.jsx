import React from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import { Link, useLocation, useMatch, matchPath } from 'react-router-dom'

const HeaderTabs = () => {
  const useCheackPath = () => {
    const path = useLocation().pathname.split('/')
    let location = ''
    if (path[1] === '') {
      location = '/*'
    }
    if (path[1] === 'shop') {
      location = '/shop/*'
    }
    if (path[1] === 'plant-care') {
      location = '/plant-care/*'
    }
    if (path[1] === 'blogs') {
      location = '/blogs/*'
    }
    return location
  }
  const match = useMatch(useCheackPath())
  let currentTab = ''
  if (match) {
    currentTab = match.pathnameBase
  } else currentTab = false
  return (
    <Tabs value={currentTab}>
      <Tab label="Home" value="/" to="/" component={Link} />
      <Tab label="Shop" value="/shop" to="/shop" component={Link} />
      <Tab label="Plant Care" value="/plant-care" to="/plant-care" component={Link} />
      <Tab label="Blogs" value="/blogs" to="/blogs" component={Link} />
    </Tabs>
  )
}

export default HeaderTabs
