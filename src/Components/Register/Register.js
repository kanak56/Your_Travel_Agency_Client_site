import React from 'react';
import { NavLink } from 'react-router-dom';
import google from './../../resource/google.png';
import logo from './../../resource/Logo.png';
import { Form, Button } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
const Register = () => {
    const { signInUsingGoogle, handleEmailRegister, handlePasswordRegister, handleRegitration, error } = useAuth();
    return (
        <div className='login-background'>
            <div className='login'>
                <div style={{ padding: '20px' }}>
                    <img width='100%' src={logo} alt="" />
                    <h1>Please Sign Up</h1>
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleEmailRegister} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlePasswordRegister} type="password" placeholder="Password" />
                        </Form.Group>
                        <div><small className='bg-yellow-400'>{error}</small></div>
                        <Button onSubmit={handleRegitration} variant="primary" type="submit">
                            Sing Up
                        </Button>
                    </Form>
                    <h3 className='text-xl mt-3 bg-yellow-400 rounded-full'>Create an account with</h3>
                    <button onClick={signInUsingGoogle} className='p-3.5'><img style={{ color: 'green', height: '40px' }} src={google} alt="" /></button>
                    <h4>Already a Member?</h4>
                    <NavLink className='link' to='/login'> Please Login</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Register;