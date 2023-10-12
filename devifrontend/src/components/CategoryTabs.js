// src/components/CategoryTabs.js
import React from 'react';

const CategoryTabs = ({ categories, activeCategory, onCategoryChange }) => {

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <>
      <h2  className='deviborder'>My Works</h2><br /><br /><br />
      <ul className="nav nav-tabs">
      {categories.map((category) => (
        <li className="nav-item" key={category}>
          <button
            className={`nav-link catlink ${category === activeCategory ? 'active' : ''}`}
            onClick={() => onCategoryChange(category)}
          >
            {capitalizeFirstLetter(category)}
          </button>
        </li>
      ))}
    </ul>
    </>
    
  );
};

export default CategoryTabs;
