import React from 'react';
const products = [
  { id: 1, name: 'Laptop 1', price: 2236, rating: 4.5 },
  { id: 2, name: 'Laptop 2', price: 1200, rating: 4.0 },
  { id: 3, name: 'Laptop 3', price: 1100, rating: 3.5 },
];

const ProductList = () => {
  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map(product => (
          <product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
