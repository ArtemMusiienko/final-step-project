import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Slide from '@mui/material/Slide'
import { Button } from '@mui/material'

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
      <Button sx={{ color: 'text.primary' }} onClick={handleChange}>
        {slideHeader}
      </Button>
      <Slide
        direction="left"
        in={checked}
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: theme => theme.zIndex.mobileStepper + 1,
          backgroundColor: 'white'
        }}
      >
        <Paper sx={{ m: 1, width: '100%', height: '100%' }} elevation={0}>
          <Box sx={{ width: '100%', height: '100%' }}>
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
          </Box>
        </Paper>
      </Slide>
    </>
  )
}

export default HeaderSlide
