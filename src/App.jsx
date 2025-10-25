import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import NotFoundPage from './pages/NotFoundPage';
import Header from './ui/Header';
import Footer from './ui/Footer';

const appTitle = "Lucas' Store";

const App = () => {
  return (
    <div>
      <Header appTitle={appTitle} />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </main>
      <Footer appTitle={appTitle} />
    </div>
  );
};

export default App;