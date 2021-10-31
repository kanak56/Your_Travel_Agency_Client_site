import React from 'react';
import useAuth from '../hooks/useAuth';
import logo from './../../resource/Logo.png';

const UserDetails = () => {
    const { user } = useAuth();
    const img = user.photoURL;
    console.log(img);
    return (
        <div>
            <img src={logo} alt="" />
            <br />
            <h2>Traveler Information</h2>
            <img src={img} style={{ width: '180px', height: '200px' }} alt="traveler-img" />
            <h3>Name:{user.displayName}</h3>
            <h4>Email: {user.email}</h4>
        </div>
    );
};

export default UserDetails;