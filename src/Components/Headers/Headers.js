import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import img from "./../../resource/Logo.png";
import './Headers.css';

const Headers = () => {
    return (
        <div className='navber'>
            <Navbar collapseOnSelect expand='lg' variant="dark" bg="dark">
                <Navbar.Brand href="#home">Y T A</Navbar.Brand>
                <Container fluid>
                    <Nav className="me-auto">
                        <NavLink className='link' to='/'>Home</NavLink>
                        <NavLink className='link' to='/services'>Services</NavLink>
                        <NavLink className='link' to='/about'>About</NavLink>
                        <NavLink className='link' to='/contactUs'>Contact Us</NavLink>
                        <NavLink className='link' to='/login'>LogIn</NavLink>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Headers;