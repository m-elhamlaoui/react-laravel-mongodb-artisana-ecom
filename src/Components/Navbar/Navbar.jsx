import React from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'

import cart_icon from '../Assets/cart_icon.png'
import favoris_icon from '../Assets/favoris_icon.png'


const Navbar = () => {
  return (
    
    <div className='navbar'>
      <div className="nav-logo">
        <a href="../home"> 
          <img src={logo} alt="" />
        </a>
      </div>
      <div class="search-bar">
            <input type="text" placeholder="Search..."/>
            <button type="submit">Search</button>
        </div>
        <div class="right-side">
            <a href="../login">Se Connecter</a>
            <a href="../favoris">
              <img src={favoris_icon} alt="" />
            </a>
            <a href="../panier">
              <img src={cart_icon} alt="" />
            </a>
        </div>
    
      
    </div>

    
   
  )
}
export default Navbar