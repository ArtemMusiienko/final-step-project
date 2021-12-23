import React, { useState, useCallback, useMemo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Container from '@material-ui/core/Container'
import Slider from 'rc-slider'
import SubCategory from './SubCategories'
import 'rc-slider/assets/index.css'

const { createSliderWithTooltip } = Slider
const Range = createSliderWithTooltip(Slider.Range)
const { Handle } = Slider

export const Categories = ({ handleChange, currentValue, setValue, handleFilterButton }) => {
  const { catalog } = useSelector(state => state.catalog)
  const [currentCategory, setCurrentCategory] = useState()
  const handleSlider = value => {
    setValue(value)
  }
  const categoriesFiltered = catalog.filter(item => item.level === 0)

  return (
    <Container style={{ marginRight: '30px', maxWidth: '310px', marginLeft: '0' }}>
      <h3 className="category-header">Categories </h3>
      <div className="category-container">
        <ul className="categories-list">
          {categoriesFiltered.map(item => (
            <SubCategory
              setCurrentCategory={setCurrentCategory}
              currentCategory={currentCategory}
              key={item.id}
              handleChange={handleChange}
              item={item}
              data={catalog}
            />
          ))}
        </ul>
      </div>
      <div className="category-price">
        <h3 className="category-price-header">Price Range</h3>
        <Range
          className="range"
          min={0}
          max={500}
          defaultValue={[0, 100]}
          onAfterChange={valueNew => handleSlider(valueNew)}
          tipFormatter={value => `$${value}`}
        />
        <h3 className="category-price-subheader">
          {/* eslint-disable */}
          <span className="price-span">Price:</span> {`$${currentValue[0]}-$${currentValue[1]}`}
        </h3>
      </div>
      <button className="filter" onClick={(()=> handleFilterButton(currentValue[0],currentValue[1]))}>Filter</button>
    </Container>
  );
};
