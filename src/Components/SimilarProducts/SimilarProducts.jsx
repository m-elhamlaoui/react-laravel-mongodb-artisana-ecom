import React from 'react';
import './SimilarProducts.css';
import { FaStar, FaRegStar } from "react-icons/fa";


const Products = ({ products }) => {
  return (
    <section className="products-container">
      <h2>Our Products</h2>
      {products.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.imageUrl} alt={product.name} />
          <p className="product-name">{product.name}</p>
          <p className="product-price">${product.price.toFixed(2)}</p>

          {/* Rating Section */}
          <div className="product-rating">
            {Array(Math.floor(product.rating)) // Fill stars based on rating
              .fill(<FaStar key={Math.random()} />)}
            {Array(5 - Math.floor(product.rating)) // Fill empty stars
              .fill(<FaRegStar key={Math.random()} />)}
          </div>

          {/* Reviews Section */}
          <p className="product-reviews">
            {product.reviews} {product.reviews === 1 ? 'review' : 'reviews'}
          </p>

          {/* Additional Information (optional) */}
          <ul className="product-details">
            {product.tags && (
              <li>
                <b>Tags:</b> {product.tags.join(', ')}
              </li>
            )}
            <li><b>Category:</b> {product.category}</li>
            {product.colorOptions && (
              <li>
                <b>Color Options:</b> {product.colorOptions.join(', ')}
              </li>
            )}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Products;
