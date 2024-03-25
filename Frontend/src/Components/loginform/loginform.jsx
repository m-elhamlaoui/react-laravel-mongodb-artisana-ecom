import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
//import './loginform.css'
import '../createcompte/createaccount.css'
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

const Loginform =  ({ setIsAuthenticated  }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/login', {email, password});
            setEmail("");
            setPassword("");
            setIsAuthenticated(true);
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/home');
        } catch (e) {
            console.log(e);
        }
    }

    return(
        
        <div className="wrapper">
            <form onSubmit={handleLogin}>
                <h1>login</h1>
                <div className="input-box">
                    <FaRegUser className='icon'/>
                    <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                < div className="input-box">
                    <RiLockPasswordLine className='icon'/>
                    < input type="password" placeholder= 'Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
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