import React from 'react';
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

export const Hero = () => {
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
      </div>
      <div className="category-container">
        <a href="/pottery" className="category">
          <img src={potteryImage} alt="Pottery" />
        </a>
        <a href="/food" className="category">
          <img src={foodImage} alt="Food" />
        </a>
        <a href="/cosmetic" className="category">
          <img src={cosmeticImage} alt="Cosmetic" />
        </a>
        <a href="/clothing" className="category">
          <img src={clothingImage} alt="Clothing" />
        </a>
        <a href="/decoration" className="category">
          <img src={decorationImage} alt="Decoration" />
        </a>
        <a href="/accessories" className="category">
          <img src={accessoriesImage} alt="Accessories" />
        </a>
      </div>

      

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

