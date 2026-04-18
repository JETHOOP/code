// src/App.js
import React, { useEffect } from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { sampleProducts } from './data/Products';
import './App.css';

const AppContent = () => {
  const { setProducts } = useShop();

  useEffect(() => {
    // Simulate loading products from API
    setProducts(sampleProducts);
  }, [setProducts]);

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <h2>Featured Products</h2>
        <ProductList />
      </main>
      <Cart />
    </div>
  );
};

function App() {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
}

export default App;