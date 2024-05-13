import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/login.css';
import LoginImg from './assets/background.jpg';
import { Link } from 'react-router-dom';
import Login from "./Login";
const Register = () => {
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
                                <p>Already a member ?<Link to="/Login">Register</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default Register