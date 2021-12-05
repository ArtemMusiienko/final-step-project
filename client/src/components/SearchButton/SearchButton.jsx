import React, { forwardRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { IconButton } from '@mui/material'
import SearchIcon from './SearchIcon'

const SearchButton = () => (
  <IconButton aria-label="search">
    <SearchIcon viewBox="0 0 20 20" />
  </IconButton>
)

export default SearchButton
