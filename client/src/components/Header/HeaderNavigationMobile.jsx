import React from 'react'
import { Toolbar, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import HeaderSlide from './HeaderSlide'
import HeaderNavMobLink from './HeaderNavMobLink'

const HeaderNavigationMobile = ({ mobileOpen, handleDrawerToggle }) => {
  const { catalog } = useSelector(state => state.catalog)
  const maxLevel = Math.max(...[...new Set(catalog.map(category => category.level))])
  const createCatalog = (
    level = 0,
    parentId = 'null',
    currentCatalog = catalog,
    maximumLevel = maxLevel
  ) => {
    let currentLevel = level
    if (currentLevel <= maximumLevel) {
      currentLevel += 1
      return currentCatalog
        .filter(category => category.parentId === parentId)
        .map(category => {
          const cheackChilds = currentCatalog.some(element => element.parentId === category.id)
          if (!cheackChilds) {
            return (
              <div key={category.id}>
                <HeaderNavMobLink category={category} handleDrawerToggle={handleDrawerToggle} />
              </div>
            )
          }
          return (
            <div key={category.id}>
              <HeaderSlide
                slideHeader={category.name}
                slideBody={createCatalog(currentLevel, category.id)}
                mobileOpen={mobileOpen}
                category={category}
              />
            </div>
          )
        })
    }
    return null
  }
  return (
    <Box
      sx={{
        position: 'relative',
        bgcolor: theme => (theme.palette.mode === 'light' ? 'grey.100' : 'grey.900')
      }}
    >
      <Toolbar sx={{ display: { sm: 'none' } }} />
      <Toolbar />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute'
        }}
      />
      {createCatalog()}
    </Box>
  )
}

export default HeaderNavigationMobile
