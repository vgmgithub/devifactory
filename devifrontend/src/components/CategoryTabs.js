// src/components/CategoryTabs.js
import React from 'react';

const CategoryTabs = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <>
      <h2  className='deviborder'>My Works</h2><br />
      <ul className="nav nav-tabs">
      {categories.map((category) => (
        <li className="nav-item" key={category}>
          <button
            className={`nav-link ${category === activeCategory ? 'active' : ''}`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
    </>
    
  );
};

export default CategoryTabs;
