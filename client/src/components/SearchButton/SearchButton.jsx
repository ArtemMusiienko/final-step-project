import React, { forwardRef, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { IconButton, Box } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import SearchIcon from './SearchIcon'
import ShopProductPanel from '../Pages/Shop/ShopProductPanel'
import { addSearch, deleteSearch } from '../../store/serch/searchSlice'

const SearchButton = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  return (
    <div>
      <RouterLink to="/shop">
        <form onChange={e => dispatch(addSearch(e.target.value))}>
          <input type="text" placeholder="find plants ..." />
        </form>
      </RouterLink>
    </div>
  )
}
export default SearchButton
/* <IconButton aria-label="search">
<RouterLink to="/shop">
  <input type="text" placeholder="Find plants ...">
    {' '}
    <SearchIcon viewBox="0 0 20 20" />
  </input>
</RouterLink>
</IconButton> */
