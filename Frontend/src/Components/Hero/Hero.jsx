import React from 'react';
import { useState,useEffect } from 'react';
import axios from '../../api/axios';
import './Hero.css';
import morocco from '../Assets/Morocco.mp4';
import potteryImage from '../Assets/poterie.png';
import foodImage from '../Assets/food.png';
import cosmeticImage from '../Assets/cosmetic.png';
import clothingImage from '../Assets/clothes.png';
import decorationImage from '../Assets/decoration.png';
import accessoriesImage from '../Assets/accessories.png';
import man from '../Assets/man.png';
import woman from '../Assets/woman.png'
import woman2 from '../Assets/woman2.png'
import logo from '../Assets/logo.png'
import instagram from '../Assets/instagram_icon.png'
import pinterest from '../Assets/pinterest_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'
import { Link } from "react-router-dom";

export const Hero = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // Fetch categories from your backend API
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/categories');
        console.log('Response:', response.data);
        if (response.status === 200) {
          setCategories(response.data.categories);
        } else {
          console.error('Failed to fetch categories:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching categories:', error.message);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <div className="video-container">
        <video autoPlay loop muted className="background-video">
          <source src={morocco} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content-container">
        <div className="overlay-text">
          <div>Preserving Tradition,</div>
          <div>Empowering Artisans &</div>
          <div>Sharing Moroccan Culture with the World.</div>
        </div>
      </div>

      {/* Categories */}
      <div className='CategorySection'>
        <p>Explore our shop's products and infuse your life with the vibrant Moroccan essence.</p>
        <br ></br>
      </div>
        
        <h1 className='categories-p'>Categories</h1>
      <Link to="/products">
      <div className="category-container">
      {categories.map(category => (
          <Link key={category._id} to={`/products/${category._id}`}>
          <div className="category">
            <img src={category.image_url} alt={category.name} />
          </div>
            <h3 className='h3-categorie'>{category.name}</h3>
        </Link>
        ))}
      </div>
      </Link>

      

      <div className="section-container">
        <div className='moroccan'>
          <p>Legacy Crafters: Moroccan Artisans Crafting with Heart, Emotion, and Tradition</p>
        </div>
        <div className="subsection">
          <img src={man} alt="Image 1" />
          <p>Si Eyachi, a master potter from Safi, Morocco, has dedicated over 40 years to his craft, shaping clay into stunning works of art. His love for pottery is evident in every piece he creates, as each one tells a story of his passion and dedication. Si Eyachi's hands move with the skill and precision of someone who has spent a lifetime perfecting his art, yet his eyes still light up with excitement every time he sits down at his wheel. For him, pottery is more than just a job; it's a way of life, a connection to his heritage, and a way to express his creativity and emotions. Through his work, Si Eyachi preserves a centuries-old tradition while adding his own unique touch, ensuring that his legacy will endure for generations to come.</p>
        </div>
        <div className="subsection">
          <img src={woman} alt="Image 2" />
          <p>Lala Fatna, a cherished figure in Agadir, embodies the essence of Moroccan tradition through her craft of making argan oil and amlou. Passed down through her family for generations, this legacy has become her life's passion. In her humble home, she skillfully presses the argan nuts and roasts almonds to perfection, infusing each product with a piece of her heritage. Beyond providing for her family, Lala Fatna imparts the values of dedication and respect for tradition to her children, ensuring that the legacy of her craft continues to flourish in their care.</p>
        </div>
        <div className="subsection">
          <img src={woman2} alt="Image 3" />
          <p>Lala Menana, an 80-year-old artisan from Ouarzazate, has dedicated her life to crafting Zrabi, traditional Moroccan rugs, since the tender age of 20. With each knot and stitch, she weaves not just threads but stories of her heritage and love for her craft. Her hands, weathered by years of dedication, move with a grace that only experience can bring. For Lala Menana, Zrabi-making is more than a skill; it's a spiritual connection to her ancestors and a testament to the traditions that have shaped her life. Though time may have passed, her passion remains undimmed, a beacon of inspiration for future generations to cherish and carry forward.</p>
        </div>
      </div>

      
      
        <footer>
            <div class="footer-container">
                <div class="social-icons">
                    <a href=""><img src={instagram} alt="Instagram"/></a>
                    <a href=""><img src={pinterest} alt="Pinterest"/></a>
                    <a href=""><img src={whatsapp} alt="WhatsApp"/></a>
                </div>
             </div>
             <div class="copyright">
                &copy; 2024 Qdam Rbah. All rights reserved.
            </div>
        </footer>

    </div>
  );
};

export default Hero;

