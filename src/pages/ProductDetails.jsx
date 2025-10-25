import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p style={{ textAlign: 'center', padding: '2rem' }}>Product not found.</p>;
  }

  return (
    <div className="product-detail container">
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p className="price">${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;