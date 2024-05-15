import React, { useEffect, useState } from 'react';
import LoginImg from './assets/background.jpg';
import './assets/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link } from 'react-router-dom';
import Register from './Register';
import axios from 'axios';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/login', {email, password});
            console.log(response.data);
            alert(response.data);
        } catch(error) {
            console.error('Login failed', error);
            console.log(error);
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
                            <form onSubmit={handleLogin}>
                                <div className='mb-3'>
                                    <label for="email" className='form-label'>Email Id: </label>
                                    <input type='email' className='input-underline' id='email' name='email' value={email} onChange={(e)=> setEmail(e.target.value)} />
                                </div>
                                
                                <div className='mb-3'>
                                    <label for="password" className='form-label'>Password: </label>
                                    <input type='text' className='input-underline' id='password' name='Password' value={password} onChange={(e)=> setPassword(e.target.password)} />
                                </div>
                                <button type='submit' className='btn btn-primary'>Submit</button>
                                <p>Not a member ?<Link to="/Register">Register</Link></p>
                            </form>
                        </div>
                    </div>   
                </div>
            </div>
        </div>

    )
}
export default Login