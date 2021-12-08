import React from 'react'

export const Categories = ({ data }) => {
  const categoriesMapped = data.map(item => item.categories)
  const categories = {}
  for (let i = 0; i < categoriesMapped.length; ++i) {
    const a = categoriesMapped[i]
    if (categories[a] !== undefined) ++categories[a]
    else categories[a] = 1
  }

  const categoriesNumberHandler = key => {
    let number = 0
    for (let i = 0; i <= categoriesMapped.length; i++) {
      if (categoriesMapped[i] === key) {
        number += 1
      }
    }
    return number
  }
  return (
    <div className="categories">
      <h3 className="category-header">Categories</h3>
      <div className="category-container">
        <ul className="categories-list">
          {Object.keys(categories).map(key => (
            <li className="categories-item" key={key}>
              {key}
              <span className="categories-number">({categoriesNumberHandler(key)})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
