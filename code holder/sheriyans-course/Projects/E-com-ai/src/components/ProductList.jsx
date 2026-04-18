// src/components/ProductList.js
import React from 'react';
import { useShop } from '../context/ShopContext';
import ProductCard from './ProductCard';

const ProductList = () => {
    const { filteredProducts } = useShop();

    if (filteredProducts.length === 0) {
        return (
            <div className="no-products">
                <p>No products found matching your criteria.</p>
            </div>
        );
    }

    return (
        <div className="product-list">
            {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;