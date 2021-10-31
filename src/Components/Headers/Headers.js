import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../hooks/useAuth";

import YTA from './../../resource/YTA.png';
import './Headers.css';

const Headers = () => {
    const { user, logOut } = useAuth();
    return (
        <div className='navber'>
            <Navbar bg="dark">
                <NavLink to="/"><img width="90px" src={YTA} alt="logo" /></NavLink>
                <Container style={{ paddingLeft: '0' }} fluid>
                    <Nav className="me-auto">
                        <NavLink className='link' to='/'>Home</NavLink>
                        <HashLink className='link' to='/#services'>Services</HashLink>
                        <NavLink className='link' to='/about'>About</NavLink>
                        <HashLink className='link' to='/#contactUs'>Contact_Us</HashLink>

                        {
                            user.providerData && <NavLink className='link' to='/addService'>Add_Service</NavLink>
                        }
                        <NavLink to='/userDetails' className='link'>{user.displayName}</NavLink>
                        {user.providerData ? <Button className=' link' onClick={logOut}>Log Out</Button> : <NavLink className=' link' to='/login'>Login</NavLink>}

                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Headers;