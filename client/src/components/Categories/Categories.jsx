import React, { useState, useCallback, useMemo, useEffect } from 'react'
import Slider from 'rc-slider'
import SubCategory from './SubCategories'
import 'rc-slider/assets/index.css'

const { createSliderWithTooltip } = Slider
const Range = createSliderWithTooltip(Slider.Range)
const { Handle } = Slider
export const Categories = ({
  data,
  handleChange,
  priceValue,
  handleSlider,
  handleFilterButton
}) => {
  const categoriesFiltered = data.filter(item => item.level === 0)
  return (
    <div className="categories">
      <h3 className="category-header">Categories</h3>
      <div className="category-container">
        <ul className="categories-list">
          {categoriesFiltered.map(item => (
            <SubCategory key={item.id} handleChange={handleChange} item={item} data={data} />
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
          <span className="price-span">Price:</span> {`$${priceValue[0]}-$${priceValue[1]}`}
        </h3>
      </div>
      <button onClick={(()=>handleFilterButton(priceValue))} className="filter">Filter</button>
    </div>
  );
};
