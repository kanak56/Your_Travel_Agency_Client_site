import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Services from '../Services/Services';
import yourTravel from './../../resource/banner.mp4';


const Home = () => {
    return (
        <div className='banner'>
            <Banner></Banner>
            <h1>Welcome to </h1>
            <video width="100%" height="300" autoPlay loop>
                <source src={yourTravel} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Services></Services>
            <About></About>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;