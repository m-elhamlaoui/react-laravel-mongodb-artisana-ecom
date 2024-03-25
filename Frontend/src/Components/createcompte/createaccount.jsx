import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import './createaccount.css'
import { FaRegUser  } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Createaccountform = ({ setIsAuthenticated  }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/register', {name, email, password, password_confirmation});
            setName("");
            setEmail("");
            setPassword("");
            setPasswordConfirmation("");
            setIsAuthenticated(true);
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/home');
        } catch (e) {
            console.log(e);
        }
    }

    return(
        
        <div className="wrapper">
            <form onSubmit={handleRegister}>
                <h1>Create Account</h1>
                <div className="input-box">
                    <FaRegUser className='icon'/>
                    <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="input-box">
                    <MdEmail  className='icon'/>
                    <input type="email" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                
                <div className="input-box">
                    <RiLockPasswordLine className='icon'/>
                    < input type="password" placeholder= 'Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="input-box">
                    <RiLockPasswordLine className='icon'/>
                    < input type="password" placeholder= 'Confirm Password' value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} required />
                </div>
                
                
                <button type="submit">Register</button>
                <div classname="register-link">
                    <p>Already have account? <Link to="/login">Register</Link></p>
                </div>


            </form>

        </div>

    );
};


export default Createaccountform