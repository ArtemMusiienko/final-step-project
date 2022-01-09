import React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Link, useLocation, useMatch } from 'react-router-dom'
import { Box } from '@mui/system'

const DefaultTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    height: '3px'
  }
})

const DefaultTab = styled(props => <Tab disableRipple {...props} />)(({ theme }) => {
  return {
    textTransform: 'capitalize',
    fontWeight: theme.typography.fontWeightRegular,
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

const HeaderTabs = ({ pages }) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  const useCheackPath = () => {
    const path = useLocation().pathname.split('/')
    const isValidPage = pages.some(page => page.path === `/${path[1]}`)
    if (isValidPage) {
      return `/${path[1]}/*`
    }
    return '/*'
  }
  const match = useMatch(useCheackPath())
  let currentTab = false
  if (match && matches) {
    currentTab = match?.pathnameBase
  }
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center' } }}>
      <DefaultTabs value={currentTab}>
        {pages.map(page => (
          <DefaultTab
            key={page.path}
            label={page.linkName}
            value={page.path}
            to={page.path}
            component={Link}
            onClick={() => window.scrollTo({ top: 0 })}
          />
        ))}
      </DefaultTabs>
    </Box>
  )
}

export default HeaderTabs
