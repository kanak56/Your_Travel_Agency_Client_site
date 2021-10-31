import { Button } from 'react-bootstrap';
import google from './../../resource/google.png';
import React from 'react';
import Form from 'react-bootstrap/Form'
import { NavLink } from 'react-router-dom';
import logo from './../../resource/Logo.png';
import './Login.css';
import useAuth from '../hooks/useAuth';
import { useLocation, useHistory } from 'react-router-dom';

const LogIn = () => {
    const { signInUsingGoogle, signInUsingEmailPassword, error, handleEmailRegister, handlePasswordRegister } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleEmailLogIn = () => {
        signInUsingEmailPassword()
            .then(result => {
                history.push(location.state?.from || '/');
            })
    }
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(location.state?.from || '/');
            })
    }
    return (
        <div className='login-background'>
            <div className='login'>
                <div style={{ padding: '20px' }}>
                    <img width='100%' src={logo} alt="" />
                    <h1>Please Log in</h1>
                    <Form onSubmit={handleEmailLogIn}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleEmailRegister} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlePasswordRegister} type="password" placeholder="Password" />
                        </Form.Group>
                        <div><small className='bg-yellow-400'>{error}</small></div>
                        <Button onClick={handleEmailLogIn} variant="primary" type="submit">
                            LogIn
                        </Button>
                    </Form>
                    <br />
                    <h4>Login with :
                        <button onClick={handleGoogleLogIn} className='p-3.5'><img style={{ color: 'green', height: '40px' }} src={google} alt="" /></button>
                    </h4>

                    <NavLink className="link" to='/register'>Create A New Account</NavLink>
                </div>
            </div>
        </div>
    );
};

export default LogIn;