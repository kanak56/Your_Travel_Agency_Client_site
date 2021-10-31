import React from 'react';
import logo from './../../resource/Logo.png';
const Footer = () => {
    return (
        <div className='mt-5'>
            <div className="card bg-primary">
                <div className="card-header">
                    <h5 className="card-title text-white fs-3"> <img width='80px' src={logo} alt="" /> Y T A</h5>
                    <a className='link' href="#aboutUs">About Us</a> <br />
                    <a className='link' href="#contactUs">Contact Us</a>
                    <a className='link' href="#services">Our Services</a>
                    <p className='link'>Company Mail: <a className='link' href="#">yta.info.mail</a></p>
                    <hr className='link' />
                    <small className='link'> © 2021 YTA Company, Inc</small>
                    <small className='link'> © All rights are reserved by Kanak Chakma</small>
                </div>
            </div>
        </div>
    );
};

export default Footer;