/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react'
import { Link, useLocation, useMatch } from 'react-router-dom'
import './Products.scss'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import { Tabs, Toolbar, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import Pagination from '@mui/material/Pagination'
import ShopProduct from './ShopProduct'
import ShopCategories from './ShopCategories'
import ShopProductPanel from './ShopProductPanel'
import { Categories } from '../../Categories/Categories'
import usePagination from './Pagination'

const StyledTabs = styled(Tabs)({
  fontSize: 15,
  '& .MuiTabs-indicator': {
    height: 2
  }
})

const StyledTab = styled(props => <Tab disableRipple {...props} />)(({ theme }) => {
  return {
    textTransform: 'capitalize',
    fontWeight: 300,
    fontSize: 15,
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

export const Shop = () => {
  const { products } = useSelector(state => state.products)
  const [data, setData] = useState(products)
  const [currentValue, setValue] = useState([0, 100])
  const [page, setPage] = useState(1)
  const match = useMatch(useLocation().pathname)
  const activeTab = () => {
    let currentTab = false
    if (match.pathnameBase === '/shop' || match.pathnameBase === '/shop/sale') {
      currentTab = match?.pathnameBase
    }
    return currentTab
  }
  const handleChangeCategory = categoryName => {
    const filterByCategory = products.filter(product => product.categories === categoryName)
    setData(filterByCategory)
    setValue([0, 100])
  }

  const PER_PAGE = 9

  const count = Math.ceil(data.length / PER_PAGE)
  const DATA = usePagination(data, PER_PAGE)

  const handleChange = (e, p) => {
    setPage(p)
    DATA.jump(p)
  }
  const handleFilterButton = (start, end) => {
    const dataMapped = data.filter(item => item.currentPrice >= start && item.currentPrice <= end)
    setData(dataMapped.filter(item => item !== undefined))
  }

  return (
    <div>
      <Toolbar sx={{ display: { xs: 'none', md: 'block' } }} />
      <Grid container columnSpacing={5}>
        <Grid
          item
          container
          md={4}
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            backgroundColor: '#FBFBFB'
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, fontSize: 18, color: 'text.primary', marginTop: '15px' }}
          >
            Categories
          </Typography>
          <ShopCategories />
        </Grid>
        <Grid item container xs={12} md={8}>
          <Box sx={{ width: '100%' }}>
            <StyledTabs value={activeTab()}>
              <StyledTab label="All products" value="/shop" to="/shop" component={Link} />
              <StyledTab label="Sale" value="/shop/sale" to="/shop/sale" component={Link} />
            </StyledTabs>
            <ShopProductPanel />
          </Box>
        </Grid>
      </Grid>
      {/* <div className="catalog-wrapper">
        <Categories
          currentValue={currentValue}
          setValue={setValue}
          handleFilterButton={handleFilterButton}
          handleChange={handleChangeCategory}
        />
        {DATA.currentData().length === 0 && (
          <h1 style={{ fontSize: '30px' }}>Sorry! We have no such item</h1>
        )}
        <div className="products-grid">
          <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 2, sm: 8, md: 12 }}>
            {DATA.currentData().map(item => (
              <Grid key={item._id} item xs={2} sm={4} md={4}>
                <ShopProduct productId={item._id} />
              </Grid>
            ))}
          </Grid>
          <Pagination
            count={count}
            size="large"
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
            style={{ marginTop: '20px' }}
          />
        </div>
      </div> */}
    </div>
  )
}

export default Shop
