import React from 'react'
import { Divider, Toolbar, Typography } from '@mui/material'

const HeaderNavigationMobile = () => {
  const a = ''
  return (
    <>
      <Toolbar />
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
