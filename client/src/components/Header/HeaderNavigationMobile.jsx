import React from 'react'
import { Divider, Toolbar, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import HeaderSlide from './HeaderSlide'

const HeaderNavigationMobile = ({ mobileOpen }) => {
  const { catalog } = useSelector(state => state.catalog)
  const containerRef = React.useRef(null)
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
              <Typography
                sx={{ fontStyle: 'italic' }}
                key={category.id}
                variant="body1"
                color="initial"
              >
                {category.name}
              </Typography>
            )
          }
          return (
            <div key={category.id}>
              <HeaderSlide slideHeader={category.name} mobileOpen={mobileOpen} />
              {/* <Typography sx={{ fontWeight: 'bold' }} variant="body1" color="initial">
                {category.name}
              </Typography>
              {createCatalog(currentLevel, category.id)} */}
            </div>
          )
        })
    }
    return null
  }
  return (
    <>
      <Toolbar />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          bgcolor: theme => (theme.palette.mode === 'light' ? 'grey.100' : 'grey.900'),
          overflow: 'hidden'
        }}
      >
        {createCatalog()}
      </Box>
      <Typography variant="body1" color="initial">
        Categories
      </Typography>
      <Divider />
      <Typography variant="body1" color="initial">
        Login
      </Typography>
      <Typography variant="body1" color="initial">
        Plant Care
      </Typography>
      <Typography variant="body1" color="initial">
        Blogs
      </Typography>
    </>
  )
}

export default HeaderNavigationMobile
