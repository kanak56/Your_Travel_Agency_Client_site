import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Banner.css';


import { Carousel } from 'react-bootstrap';
const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        width='950px'
                        height='500px'
                        src="https://vromonguide.com/wp-content/uploads/Hatimura-Hatimatha-Khagrachhari-770x420.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Khagrachari</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width='950px'
                        height='500px'
                        src="https://media-cdn.tripadvisor.com/media/photo-c/2560x500/10/e2/f8/43/longest-sea-beach-in.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Cox's Bazar</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width='950px'
                        height='500px'
                        src="https://ttg.com.bd/uploads/tours/hotels/278_003jpg.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Rangamati</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width='950px'
                        height='500px'
                        src="https://live.staticflickr.com/5808/29835302043_45837b5d9b_b.jpg"
                        alt="Forth slide"
                    />

                    <Carousel.Caption>
                        <h3>Bandorban</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width='950px'
                        height='500px'
                        src="https://cdn.getyourguide.com/img/tour/5728ce3b7284b.jpeg/146.jpg"
                        alt="Fifth slide"
                    />

                    <Carousel.Caption>
                        <h3>Sylhet</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width='950px'
                        height='500px'
                        src="https://sgp1.digitaloceanspaces.com/cosmosgroup/news/3598001_Rangamati%20Pic-28-08-2020-1.jpg"
                        alt="Sixth slide"
                    />

                    <Carousel.Caption>
                        <h3>Sajek Valley</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width='950px'
                        height='500px'
                        src="https://live.staticflickr.com/3483/4037242273_b7d3c82159_c.jpg"
                        alt="Seventh slide"
                    />

                    <Carousel.Caption>
                        <h3>Sunamganj</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </div>
    );
};

export default Banner;