import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/login.css';
import LoginImg from './assets/background.jpg';
import { Link } from 'react-router-dom';
import Login from "./Login";
import axios from 'axios';
const Register = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    });
    const handleChange = event => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        fetch('http://localhost:8080/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response=> response.json())
        .then(data=> {
            console.log('Registration successful', data);
        })
        .catch(error => {
            console.error('Error during registration', error);
        });
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
                            <form onSubmit={handleSubmit}>
                                <div className='mb-3'>
                                    <label for="firstname" className='form-label'>First Name: </label>
                                    <input type='text' className='input-underline' id='firstname' name='firstname' value={formData.firstname} onChange={handleChange} />
                                </div>
                                <div className='mb-3'>
                                    <label for="lastname" className='form-label'>Last Name: </label>
                                    <input type='text' className='input-underline' id='lastname' name='lastname' value={formData.lastname} onChange={handleChange} />
                                </div>
                                <div className='mb-3'>
                                    <label for="email" className='form-label'>Email Id: </label>
                                    <input type='email' className='input-underline' id='email' name='email' value={formData.email} onChange={handleChange} />
                                </div>
                                
                                <div className='mb-3'>
                                    <label for="password" className='form-label'>Password: </label>
                                    <input type='text' className='input-underline' id='password' name='password' value={formData.password} onChange={handleChange} />
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