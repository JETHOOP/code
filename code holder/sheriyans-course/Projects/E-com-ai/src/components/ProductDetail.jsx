// src/components/ProductDetail.js
import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';

const ProductDetail = ({ product, onClose }) => {
    const { addToCart } = useShop();
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        addToCart(product, quantity);
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="product-detail" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>×</button>
                <div className="detail-content">
                    <img src={product.image} alt={product.name} className="detail-image" />
                    <div className="detail-info">
                        <h2>{product.name}</h2>
                        <p className="detail-price">${product.price.toFixed(2)}</p>
                        <p className="detail-category">Category: {product.category}</p>
                        <p className="detail-description">{product.description}</p>

                        <div className="quantity-selector">
                            <label>Quantity:</label>
                            <input
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                            />
                        </div>

                        <button className="add-to-cart-btn" onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;