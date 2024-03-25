import React, { useState} from "react";
import './Navbar.css';
import { Link, useNavigate } from "react-router-dom";
import logo from '../Assets/logo.png';

import cart_icon from '../Assets/cart_icon.png';
import favoris_icon from '../Assets/favoris_icon.png';
import {MdAccountCircle} from "react-icons/md";
import axios from "../../api/axios";


const Navbar = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/logout");
      localStorage.removeItem('isAuthenticated');
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  }

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
        {isAuthenticated ? (
          // If user is authenticated, show account icon and other links
          <>
            <a href="../favoris">
              <img src={favoris_icon} alt="Favoris" />
            </a>
            <Link to="/cart">
              <img src={cart_icon} alt="Cart" />
            </Link>
            <Link to="/logout" onClick={handleLogout}>
              Logout
            </Link>
          </>
        ) : (
          // If user is not authenticated, show login and register links
          <>
            <Link to="/login">Login</Link>
            <Link to="/createaccount">Register</Link>
          </>
        )}
        </div>
    
      
    </div>

    
   
  )
}
export default Navbar