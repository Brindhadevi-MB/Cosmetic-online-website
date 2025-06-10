// src/components/CategoryFilter.jsx
import React from 'react';
import './CategoryFilter.css';

const categories = ['All', 'Skincare', 'Makeup', 'Haircare', 'Fragrance'];

const CategoryFilter = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="category-filter">
      {categories.map((cat) => (
        <button
          key={cat}
          className={selectedCategory === cat ? 'active' : ''}
          onClick={() => onSelectCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
