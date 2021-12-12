import React, { useState } from 'react'
/* eslint-disable */
const SubCategory = ({ item, data, handleChange }) => {
  const [hidden, setHidden] = useState(true);       
  const filter = (main, dataId) => {
    const result = dataId.filter((itemFilter) => itemFilter.parentId === main);
    return result;
  };
  const handleClick = () => {
    setHidden(!hidden);
  };
  const handleClickFilter = (name) => {
    handleChange(name);
  };

  return (
      <li>
      <h2 className="categories-item" onClick={() => handleClick(item.id)}>
        {item.name}
      </h2>
      {hidden ? null : (
        <ul className="subcategories-list">
          {filter(item.id, data).map((subItem) => (
            <li className="subcategories-item" key={subItem.id} onClick={() => handleClickFilter(subItem.id)}>
              {subItem.name}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
export default SubCategory;
