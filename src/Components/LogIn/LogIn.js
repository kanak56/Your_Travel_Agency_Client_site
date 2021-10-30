import React from 'react';
import { NavLink } from 'react-router-dom';

const LogIn = () => {
    return (
        <div>
            <h1>This is Log in</h1>

            <NavLink to='/register'>Create A New Account</NavLink>
        </div>
    );
};

export default LogIn;