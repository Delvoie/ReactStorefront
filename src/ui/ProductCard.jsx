import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { id, title, price, image, category } = product;

  return (
    <div className="product-card">
      {/* future implementation of an add to cart button*/}
      <Link to={`/Cart/${id}`} className="add-btn">
        ☑️
      </Link>
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </Link>
      <p className="price">${price}</p>
      <p>{category}</p>
    </div>
  );
};

export default ProductCard;