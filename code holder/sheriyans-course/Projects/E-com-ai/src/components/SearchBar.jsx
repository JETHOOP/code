// src/components/SearchBar.js
import React from 'react';
import { useShop } from '../context/ShopContext';

const SearchBar = () => {
    const { searchTerm, setSearchTerm, selectedCategory, setSelectedCategory } = useShop();

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="category-select"
            >
                <option value="all">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="sports">Sports</option>
                <option value="accessories">Accessories</option>
            </select>
        </div>
    );
};

export default SearchBar;