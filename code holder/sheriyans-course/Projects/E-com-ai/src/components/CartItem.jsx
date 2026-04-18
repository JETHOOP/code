// src/components/CartItem.js
import React from 'react';
import { useShop } from '../context/ShopContext';

const CartItem = ({ item }) => {
    const { updateQuantity, removeFromCart } = useShop();

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p>${item.price.toFixed(2)}</p>
            </div>
            <div className="cart-item-controls">
                <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                >
                    Remove
                </button>
            </div>
            <div className="cart-item-total">
                ${(item.price * item.quantity).toFixed(2)}
            </div>
        </div>
    );
};

export default CartItem;