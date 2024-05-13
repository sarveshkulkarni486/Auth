import React from 'react';
import LoginImg from './assets/background.jpg';
import './assets/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link } from 'react-router-dom';
import Register from './Register';
const Login = () => {
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
                            <form>
                                <div className='mb-3'>
                                    <label for="email" className='form-label'>Email Id: </label>
                                    <input type='email' className='input-underline' id='email' name='email' />
                                </div>
                                
                                <div className='mb-3'>
                                    <label for="password" className='form-label'>Password: </label>
                                    <input type='password' className='input-underline' id='password' name='Password' />
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