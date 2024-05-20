import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/login.css';
import LoginImg from './assets/background.jpg';
import { Link } from 'react-router-dom';
import Login from "./Login";
import axios from 'axios';
const Register = () => {
    const [firstname, setFirstname] = useState('');
    const[lastname, setLastname] = useState('');
    const[email, setEmail] = useState('');
    const[password, SetPassword] = useState('');
    const[message, setMessage] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/register', {
                firstname,
                lastname,
                email, 
                password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setMessage('Registration successful!');
        } catch(error){
            console.error('Registration failed', error);
            setMessage('Registration failed ' + error.response?.data.message || error.message);
        }
    };

    return (
            <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img className='img-fluid' src={LoginImg}></img>
                    </div>
                    <div className='col-md-6'>
                        <div className='form-container'>
                            <h2>Fill out the Form</h2>
                            {message && <div className="alert alert-info">{message}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className='mb-3'>
                                    <label for="firstname" className='form-label'>First Name: </label>
                                    <input type='text' className='input-underline' id='firstname' name='firstname' value={firstname} onChange={(e)=> setFirstname(e.target.value)}  />
                                </div>
                                <div className='mb-3'>
                                    <label for="lastname" className='form-label'>Last Name: </label>
                                    <input type='text' className='input-underline' id='lastname' name='lastname' value={lastname} onChange={(e)=> setLastname(e.target.value)} />
                                </div>
                                <div className='mb-3'>
                                    <label for="email" className='form-label'>Email Id: </label>
                                    <input type='email' className='input-underline' id='email' name='email' value={email} onChange={(e)=> setEmail(e.target.value)} />
                                </div>
                                
                                <div className='mb-3'>
                                    <label htmlFor="password" className='form-label'>Password: </label>
                                    <input type='password' className='input-underline' id='password' name='password' value={password} onChange={(e) => SetPassword(e.target.value)} />
                                </div>
                                <button type='submit' className='btn btn-primary'>Submit</button>
                                <p>Already a member ?<Link to="/">Login</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default Register;