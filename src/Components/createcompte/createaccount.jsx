import React from "react";
import { Link } from "react-router-dom";
import './createaccount.css'
import { FaRegUser  } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Createaccountform = () => {
    return(
        
        <div className="wrapper">
            <form action="">
                <h1>Create Account</h1>
                <div className="input-box">
                    <FaRegUser className='icon'/>
                    <input type="text" placeholder='Username' required />
                </div>
                <div className="input-box">
                    <MdEmail  className='icon'/>
                    <input type="text" placeholder='E-mail' required />
                </div>
                
                < div className="input-box">
                    <RiLockPasswordLine className='icon'/>
                    < input type="password" placeholder= 'Password' required />
                </div>
                
                
                <button type="submit">Create</button>
                <div classname="register-link">
                    <p>Already have account? <Link to="/login">Register</Link></p>
                </div>


            </form>

        </div>

    );
};


export default Createaccountform