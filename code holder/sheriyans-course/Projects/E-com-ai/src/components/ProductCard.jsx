// src/components/ProductCard.js
import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import ProductDetail from './ProductDetail';

const ProductCard = ({ product }) => {
    const { addToCart } = useShop();
    const [showDetail, setShowDetail] = useState(false);

    const handleAddToCart = (e) => {
        e.stopPropagation();
        addToCart(product);
    };

    return (
        <>
            <div className="product-card" onClick={() => setShowDetail(true)}>
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">${product.price.toFixed(2)}</p>
                    <p className="product-category">{product.category}</p>
                    <button
                        className="add-to-cart-btn"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>

            {showDetail && (
                <ProductDetail
                    product={product}
                    onClose={() => setShowDetail(false)}
                />
            )}
        </>
    );
};

export default ProductCard;