import React from 'react';
import { FaStar, FaRegStar } from "react-icons/fa";
import products from '../Assets/products';

const SimilarProducts = ({ similarProducts }) => {
    const filterSimilarProducts = (productId) => {
        // Filter products excluding the current product
        return products.filter((product) => product.id !== productId);
      };
      


    return (
    <div className="similar-products">
      <h2>Similar Products</h2>
      <div className="similar-products-container">
        {similarProducts.map((product) => (
          <div className="similar-product" key={product.name}>
            <img src={product.imageUrl} alt={product.name} />
            <p className="similar-product-name">{product.name}</p>
            <p className="similar-product-price">${product.price.toFixed(2)}</p>
            <div className="similar-product-rating">
              {[...Array(Math.floor(product.rating))].map((_, i) => (
                <FaStar key={i} />
              ))}
              {[...Array(5 - Math.floor(product.rating))].map((_, i) => (
                <FaRegStar key={i} />
              ))}
              <p>({product.reviews} reviews)</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
