import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Switch from '@mui/material/Switch'
import Paper from '@mui/material/Paper'
import Slide from '@mui/material/Slide'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Typography } from '@mui/material'

const icon = (
  <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
    <Box component="svg" sx={{ width: 100, height: 100 }}>
      <Box
        component="polygon"
        sx={{
          fill: theme => theme.palette.common.white,
          stroke: theme => theme.palette.divider,
          strokeWidth: 1
        }}
        points="0,100 50,00, 100,100"
      />
    </Box>
  </Paper>
)

const HeaderSlide = ({ slideHeader, mobileOpen }) => {
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
      <Typography
        sx={{ fontWeight: 'bold' }}
        variant="body1"
        color="initial"
        onClick={handleChange}
      >
        {slideHeader}
      </Typography>
      <Slide
        direction="left"
        in={checked}
        sx={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
      >
        {icon}
      </Slide>
    </>
  )
}

export default HeaderSlide
