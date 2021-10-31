import React from 'react';
import { Carousel } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div id='aboutUs' className='bg-dark text-white mt-5'>
            <h1>About Us</h1>
            -----------------
            <div className='link'>
                YTA is a trusted and reliable tour and travel agency among all the leading and updated tour-operating services in Bangladesh. We are here to bring the luxury to your traveling. YTA is a proud member of Association of Travel Agents of Bangladesh-ATAB and Tour Operators Association of Bangladesh. Safe traveling, your security, and your enjoyment are our focus during your travels. Our experienced and expert traveling guides ensure that you do not need to move an inch from your comfort zone and make sure that you always have a beautiful satisfactory smile on your face. We believe that your smile is our success and YTA will do anything to keep you smiling.
            </div>
            <div>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img className='about'
                            src="https://m.media-amazon.com/images/M/MV5BY2MxNWNkZGItNjhmZi00MzAxLTgxOTYtOTVkMGM0MmYwYzczXkEyXkFqcGdeQXVyMTAyMzYwNzgw._V1_.jpg"
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className='about'
                            src="https://i.ytimg.com/vi/MWE5507--Uk/maxresdefault.jpg"
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className='about'
                            src="https://image.freepik.com/free-vector/24-hour-7-days-service-banner-with-clock_1017-26946.jpg"
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default About;