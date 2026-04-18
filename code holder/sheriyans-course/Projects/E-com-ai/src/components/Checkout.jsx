// src/components/Checkout.js
import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';

const Checkout = ({ onClose }) => {
    const { cart, getCartTotal, clearCart } = useShop();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        zipCode: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would normally process the payment
        alert('Order placed successfully!');
        clearCart();
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="checkout" onClick={(e) => e.stopPropagation()}>
                <h2>Checkout</h2>
                <button className="close-btn" onClick={onClose}>×</button>

                <div className="checkout-content">
                    <div className="order-summary">
                        <h3>Order Summary</h3>
                        {cart.map(item => (
                            <div key={item.id} className="order-item">
                                <span>{item.name} x {item.quantity}</span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                        <div className="order-total">
                            <strong>Total:</strong>
                            <strong>${getCartTotal().toFixed(2)}</strong>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="checkout-form">
                        <h3>Shipping Information</h3>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                        <div className="form-row">
                            <input
                                type="text"
                                name="city"
                                placeholder="City"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="zipCode"
                                placeholder="ZIP Code"
                                value={formData.zipCode}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <h3>Payment Information</h3>
                        <input
                            type="text"
                            name="cardNumber"
                            placeholder="Card Number"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            required
                        />
                        <div className="form-row">
                            <input
                                type="text"
                                name="expiryDate"
                                placeholder="MM/YY"
                                value={formData.expiryDate}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="cvv"
                                placeholder="CVV"
                                value={formData.cvv}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="place-order-btn">
                            Place Order
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;