// src/components/Header.js
import React from 'react';
import { useShop } from '../context/ShopContext';
import SearchBar from './SearchBar';

const Header = () => {
    const { getCartItemsCount, setIsCartOpen } = useShop();
    const cartCount = getCartItemsCount();

    return (
        <header className="header">
            <div className="header-content">
                <h1 className="logo">ShopEasy</h1>
                <SearchBar />
                <button
                    className="cart-button"
                    onClick={() => setIsCartOpen(true)}
                >
                    Cart ({cartCount})
                </button>
            </div>
        </header>
    );
};

export default Header;