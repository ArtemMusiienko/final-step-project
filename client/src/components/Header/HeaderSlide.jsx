import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Slide from '@mui/material/Slide'
import { Button, Toolbar } from '@mui/material'

const HeaderSlide = ({ slideHeader, mobileOpen, slideBody, category }) => {
  const [checked, setChecked] = useState(false)
  const handleChange = () => {
    setChecked(prev => !prev)
  }

  useEffect(() => {
    if (!mobileOpen) {
      setChecked(mobileOpen)
    }
  }, [mobileOpen])

  return (
    <>
      <Button
        onClick={handleChange}
        sx={{ color: 'text.primary', '&:hover': { color: theme => theme.palette.primary.main } }}
      >
        {slideHeader}
      </Button>
      <Slide
        direction="left"
        in={checked}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: theme => theme.zIndex.mobileStepper + 1,
          backgroundColor: 'white'
        }}
      >
        <Box sx={{ width: '100%', height: '100%', overflow: 'hidden' }}>
          <Toolbar />
          {category.parentId === 'null' ? (
            <Button
              sx={{ textTransform: 'capitalize', color: 'text.primary' }}
              onClick={handleChange}
            >
              {'<< Main Menu'}
            </Button>
          ) : (
            <Button>{`<< ${category.name}`}</Button>
          )}
          <img
            src={category.imgUrl}
            alt="Plants"
            loading="lazy"
            style={{ width: '100%', display: 'block' }}
          />
          {slideBody}
          <Toolbar />
          <Toolbar />
          <Toolbar />
        </Box>
      </Slide>
    </>
  )
}

export default HeaderSlide
