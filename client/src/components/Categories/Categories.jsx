import React, { useState } from 'react'
import Slider from 'rc-slider'
import SubCategory from './SubCategories'
import 'rc-slider/assets/index.css'

const { createSliderWithTooltip } = Slider
const Range = createSliderWithTooltip(Slider.Range)
const { Handle } = Slider
/* eslint-disable */
export const Categories = ({ data, handleChange }) => {
  const [value, setValue] = useState([0, 100])
  const handleSlider = value => {
    setValue(value)
  }
  const categoriesFiltered = data.filter(item => item.level === 0)
  console.log(value)
  return (
    <div className="categories">
      <h3 className="category-header">Categories</h3>
      <div className="category-container">
        <ul className="categories-list">
          {categoriesFiltered.map(item => (
            <SubCategory handleChange={handleChange} item={item} data={data} />
          ))}
        </ul>
      </div>
      <div className="category-price">
        <h3 className="category-price-header">Price Range</h3>
        <Range
          className="range"
          min={0}
          max={500}
          defaultValue={[0, 300]}
          onAfterChange={value => handleSlider(value)}
          tipFormatter={value => `$${value}`}
        />
        <h3 className="category-price-subheader">
          <span className="price-span">Price:</span> {`$${value[0]}-$${value[1]}`}
        </h3>
      </div>
      <button className="filter">Filter</button>
    </div>
  )
}
