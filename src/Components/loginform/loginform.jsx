import React from "react";
import { Link } from "react-router-dom";

//import './loginform.css'
import '../createcompte/createaccount.css'
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

const Loginform = () => {
    return(
        
        <div className="wrapper">
            <form action="">
                <h1>login</h1>
                <div className="input-box">
                    <FaRegUser className='icon'/>
                    <input type="text" placeholder='Username' required />
                </div>
                < div className="input-box">
                    <RiLockPasswordLine className='icon'/>
                    < input type="password" placeholder= 'Password' required />
                </div>
                

                <button type="submit">Login</button>
                <div classname="register-link">
                    <p>Don't have an account?<Link to="/createaccount">Register</Link> </p>
                </div>


            </form>

        </div>

    );
};


export default Loginform