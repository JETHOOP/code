// src/components/Cart.js
import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = () => {
    const { cart, getCartTotal, isCartOpen, setIsCartOpen } = useShop();
    const [showCheckout, setShowCheckout] = useState(false);

    if (!isCartOpen) return null;

    return (
        <div className="cart-overlay" onClick={() => setIsCartOpen(false)}>
            <div className="cart" onClick={(e) => e.stopPropagation()}>
                <div className="cart-header">
                    <h2>Your Cart</h2>
                    <button className="close-btn" onClick={() => setIsCartOpen(false)}>×</button>
                </div>

                {cart.length === 0 ? (
                    <p className="empty-cart">Your cart is empty</p>
                ) : (
                    <>
                        <div className="cart-items">
                            {cart.map(item => (
                                <CartItem key={item.id} item={item} />
                            ))}
                        </div>

                        <div className="cart-footer">
                            <div className="cart-total">
                                <strong>Total:</strong>
                                <span>${getCartTotal().toFixed(2)}</span>
                            </div>
                            <button
                                className="checkout-btn"
                                onClick={() => setShowCheckout(true)}
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>

            {showCheckout && <Checkout onClose={() => setShowCheckout(false)} />}
        </div>
    );
};

export default Cart;