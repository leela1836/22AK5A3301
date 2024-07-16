import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header';
import Footer from './Footer';
import ProductList from './ProductList';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/cart" element={<ProductList />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
