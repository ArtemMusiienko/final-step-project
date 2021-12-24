/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react'
import { Link as RouterLink, useLocation, useMatch } from 'react-router-dom'
import { styled, useTheme } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import { Tabs, Typography } from '@mui/material'
import ShopCategories from './ShopCategories'
import ShopProductPanel from './ShopProductPanel'
import BreadcrumbsComponent from '../../BreadcrumbsComponent/BreadcrumbsComponent'

const StyledTabs = styled(Tabs)(({ theme }) => {
  return {
    fontSize: 15,
    marginBottom: 10,
    backgroundColor: theme.palette.grey[100],
    '& .MuiTabs-indicator': {
      height: 2
    }
  }
})

const StyledTab = styled(props => <Tab disableRipple {...props} />)(({ theme }) => {
  return {
    textTransform: 'capitalize',
    fontWeight: 300,
    fontSize: 15,
    color: theme.palette.text.primary,
    '&:hover': {
      color: '#46A358',
      opacity: 1
    },
    '&.Mui-selected': {
      fontWeight: theme.typography.fontWeightBold
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff'
    }
  }
})

export const Shop = () => {
  const theme = useTheme()
  const location = useLocation()
  const [isResetExpanded, setIsResetExpanded] = useState(true)
  const match = useMatch(useLocation().pathname)
  const activeTab = () => {
    let currentTab = false
    if (match.pathnameBase === '/shop' || match.pathnameBase === '/shop/sale') {
      currentTab = match?.pathnameBase
    }
    return currentTab
  }
  const onResetExpandedClick = currentState => {
    setIsResetExpanded(prevState => {
      if (prevState !== currentState) {
        return !prevState
      }
      return prevState
    })
  }
  return (
    <div>
      <BreadcrumbsComponent location={location} />
      <Grid container columnSpacing={5}>
        <Grid
          item
          container
          md={4}
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            backgroundColor: theme.palette.grey[100]
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, fontSize: 18, color: 'text.primary', marginTop: '15px' }}
          >
            Categories
          </Typography>
          <ShopCategories resetExpanded={isResetExpanded} onResetExpanded={onResetExpandedClick} />
        </Grid>
        <Grid item container xs={12} md={8}>
          <Box sx={{ width: '100%' }}>
            <StyledTabs value={activeTab()}>
              <StyledTab
                label="All products"
                value="/shop"
                to="/shop"
                component={RouterLink}
                onClick={() => onResetExpandedClick(true)}
              />
              <StyledTab
                label="Sale"
                value="/shop/sale"
                to="sale"
                component={RouterLink}
                onClick={() => onResetExpandedClick(true)}
              />
            </StyledTabs>
          </Box>
          <ShopProductPanel />
        </Grid>
      </Grid>
    </div>
  )
}

export default Shop
