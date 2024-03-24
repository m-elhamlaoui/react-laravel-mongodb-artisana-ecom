import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
import logo from '../Assets/logo.png'

import cart_icon from '../Assets/cart_icon.png'
import favoris_icon from '../Assets/favoris_icon.png'
import {MdAccountCircle} from "react-icons/md";


const Navbar = () => {
  return (
    
    <div className='navbar'>
      <div className="nav-logo">
        <Link to="/home"><img src={logo} alt="" /></Link>
      </div>
      <div class="search-bar">
            <input type="text" placeholder="Search..."/>
            <button type="submit">Search</button>
        </div>
        <div class="right-side">
            <Link to="/login"><MdAccountCircle class="icon2"/></Link>
            <a href="../favoris">
              <img src={favoris_icon} alt="" />
            </a>
            <Link to="/cart">
              <img src={cart_icon} alt="" />
            </Link>
        </div>
    
      
    </div>

    
   
  )
}
export default Navbar