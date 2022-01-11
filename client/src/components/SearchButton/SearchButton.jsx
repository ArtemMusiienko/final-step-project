/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Fuse from 'fuse.js'
import { useTheme, styled, alpha } from '@mui/material/styles'
import { IconButton } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import { useSelector, useDispatch } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close'
import { addSearch, resetSearch, setSearch, setResult } from '../../store/search/searchSlice'

const Search = styled('div')(({ theme }) => {
  return {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#FBFBFB',
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.04)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  }
})

const SearchIconWrapper = styled('div')(({ theme }) => {
  return {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'grey'
  }
})

const StyledInputBase = styled(InputBase)(({ theme }) => {
  return {
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch'
        }
      },
      [theme.breakpoints.up('md')]: {
        width: '12ch',
        '&:focus': {
          width: '12ch'
        }
      }
    }
  }
})

const SearchButton = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { products } = useSelector(state => state.products)
  const search = useSelector(state => state.search.search)
  const dispatch = useDispatch()
  const theme = useTheme()
  useEffect(() => {
    const result = products
    dispatch(setSearch(result))
  }, [products])
  useEffect(() => {
    searchData(search)
  }, [search])
  const searchData = pattern => {
    const options = {
      // isCaseSensitive: false,
      // includeScore: false,
      // shouldSort: true,
      // includeMatches: false,
      // findAllMatches: false,
      // minMatchCharLength: 1,
      // location: 1,
      threshold: 0.3,
      // distance: 100,
      // useExtendedSearch: false,
      // ignoreLocation: false,
      // ignoreFieldNorm: false,
      // fieldNormWeight: 1,
      keys: ['name', 'subTitle', 'categories']
    }
    if (!pattern) {
      dispatch(setResult(products))
      return
    }

    const fuse = new Fuse(products, options)
    const result = fuse.search(pattern)
    const matches = []
    if (!result.length) {
      dispatch(setResult([]))
    } else {
      result.forEach(({ item }) => {
        matches.push(item)
      })
      dispatch(setResult(matches))
    }
  }
  useEffect(() => {
    if (location.pathname !== '/shop') {
      window.scrollTo({ top: 0 })
      navigate('/shop')
    }
  }, [search])
  const handleChange = event => {
    dispatch(addSearch(event.target.value))
  }
  const handleClickResetSearch = () => {
    dispatch(resetSearch())
  }

  const handleMouseDownReset = event => {
    event.preventDefault()
  }
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon sx={{ color: theme.palette.text.main }} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleChange}
        value={search}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="reset search"
              onClick={handleClickResetSearch}
              onMouseDown={handleMouseDownReset}
              edge="end"
              size="small"
              sx={{ marginRight: '5px' }}
            >
              {search && <CloseIcon />}
            </IconButton>
          </InputAdornment>
        }
      />
    </Search>
  )
}
export default SearchButton
