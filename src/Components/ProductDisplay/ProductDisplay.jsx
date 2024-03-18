import React from 'react';
import './ProductDisplay.css'; 
import { FaStar, FaRegStar } from "react-icons/fa";
import { useState } from 'react';
import p1 from '../Assets/p1.png';

const ProductDisplay = () => {
 
    const image1 = p1;
    const image2 = p1;
    const name = 'Product Name';
    const price = 19.99;
    const rating = 4.5;
    const reviews = '120';
    const tags = ['modern', 'classic'];
    const category = 'Tapestry';
    const colorOptions = ['red', 'blue', 'green'];
    const images = [image1, image2, p1, p1]; 


  const [selectedColor, setSelectedColor] = useState(colorOptions[0]); // Initialize selected color
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Initialize current image index

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="product-display">
      <div className="pd-left">
        <img
          className="pd-main-img"
          src={images[currentImageIndex]}
          alt={name}
        />
        <div className="pd-thumbnails">
          {images.map((imageUrl, index) => (
            <img
              key={index}
              className={`pd-thumb ${index === currentImageIndex ? 'active' : ''}`}
              src={imageUrl}
              alt="Product Thumbnail"
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      </div>
      <div className="pd-right">
        <h1>{name}</h1>
        <div className="pd-right-tags">
          {tags.map((tag) => (
            <span className="pd-tag" key={tag}>{tag}</span>
          ))}
        </div>
        <div className="pd-right-category">
          <p>Category: {category}</p>
        </div>
        <div className="pd-right-price">
          <span>${price.toFixed(2)}</span>
        </div>
        <div className="pd-right-color">
          <p>Color:</p>
          <select value={selectedColor} onChange={handleColorChange}>
            {colorOptions.map((color) => (
              <option key={color} value={color}>{color}</option>
            ))}
          </select>
        </div>
        <div className="pd-right-star">
          {[...Array(Math.floor(rating))].map((_, i) => (
            <FaStar key={i} />
          ))}
          {[...Array(5 - Math.floor(rating))].map((_, i) => (
            <FaRegStar key={i} />
          ))}
          <p>({reviews} reviews)</p>
        </div>
      </div>
      <div className="button-container">
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDisplay;