import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://spooky-scarecrow-18344.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className='services' id='services'>
            <hr />
            <h1>What are we  providing?</h1>
            <p>As a travel Agency we will provide the best service for a traveler</p>
            <h5>Right Now</h5>
            <h3>Availabe Services</h3> <hr />
            <div style={{ width: '100%' }} className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;