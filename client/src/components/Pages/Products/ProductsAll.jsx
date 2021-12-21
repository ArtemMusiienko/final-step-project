import React, { useEffect, useState } from 'react'
import './Products.scss'
import Grid from '@mui/material/Grid'
import axios from 'axios'
import Pagination from '@mui/material/Pagination'
import Product from './Product'
import { Categories } from '../../Categories/Categories'
import usePagination from './Pagination'

export const ProductsAll = () => {
  const [data, setData] = useState([])
  const [dataFull, setDataFull] = useState([])
  const [catalog, setCatalog] = useState([])
  const [category, setCategory] = useState()
  const [currentValue, setValue] = useState([0, 100])
  const [page, setPage] = useState(1)
  const useGetProducts = () => {
    useEffect(() => {
      axios.get('/products').then(products => {
        setData(products.data)
        setDataFull(products.data)
      })
    }, [])
  }

  const useGetCatalog = () => {
    useEffect(() => {
      axios.get('/catalog').then(catalogItem => {
        setCatalog(catalogItem.data)
      })
    }, [])
  }

  const handleChangeCategory = (categoryName, price) => {
    axios.get(`/products/filter?categories=${categoryName}`).then(categoryItem => {
      setData(categoryItem.data.products)
      setDataFull(categoryItem.data.products)
      setValue([0, 100])
    })
  }

  const PER_PAGE = 9

  const count = Math.ceil(data.length / PER_PAGE)
  const DATA = usePagination(data, PER_PAGE)

  const handleChange = (e, p) => {
    setPage(p)
    DATA.jump(p)
  }
  const handleFilterButton = (start, end) => {
    setData(dataFull)
    /* eslint-disable */
    const dataMapped = dataFull.map((item) => {
      if (item.currentPrice >= start && item.currentPrice <= end) {
        return item;
      }
      return;
    });
    setData(dataMapped.filter((item) => item !== undefined));
  };

  return (
    <>
      <div className="catalog-wrapper">
        {useGetProducts()}
        {useGetCatalog()}
        <Categories
          data={catalog}
          currentValue={currentValue}
          setValue={setValue}
          handleFilterButton={handleFilterButton}
          handleChange={handleChangeCategory}
        />
        {DATA.currentData().length === 0 && (
          <h1 style={{ fontSize: "30px" }}>Sorry! We have no such item</h1>
        )}
        <div className="products-grid">
          <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 2, sm: 8, md: 12 }}>
            {DATA.currentData().map((item) => (
         
              <Grid key={item._id} item xs={2} sm={4} md={4}>
                <Product
                  name={item.name}
                  currentPrice={item.currentPrice}
                  previousPrice={item.previousPrice}
                  categories={item.categories}
                  imageUrls={item.imageUrls}
                />
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
            style={{ marginTop: "20px" }}
          />
        </div>
      </div>
    </>
  );
};

export default ProductsAll;


