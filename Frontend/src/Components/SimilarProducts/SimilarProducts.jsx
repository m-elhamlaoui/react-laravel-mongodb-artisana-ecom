import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from '../../api/axios';
import './SimilarProducts.css';
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    // Fetch categories from your backend API
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`/api/categories/${categoryId}`); // Use backticks here
        console.log('Response:', response.data);
        if (response.status === 200) {
          setProducts(response.data.products.products);
        } else {
          console.error('Failed to fetch products:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };
  
    fetchCategories();
  }, [categoryId]); 
  return (
    <div className="products-wrapper"> {/* Parent container */}
      <h2 className="titre">Our Products</h2> {/* Title */}
      <section className="products-container">
         {/* Products container */}
        {products.map(product => (
          <Link to="/productinfos">
          <div className="product" key={product._id}>
            <img src={product.imageUrl} alt={product.name} />
            <p className="product-name">{product.name}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>

            {/* Rating Section */}
            <div className="product-rating">
              {Array(Math.floor(product.rating)).fill(<FaStar key={Math.random()} />)}
              {Array(5 - Math.floor(product.rating)).fill(<FaRegStar key={Math.random()} />)}
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
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Products;
