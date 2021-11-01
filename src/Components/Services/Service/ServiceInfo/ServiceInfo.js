import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

const ServiceInfo = () => {
    const { _id } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`https://spooky-scarecrow-18344.herokuapp.com/services/${_id}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, []);

    const onSubmit = data => {
        fetch('https://spooky-scarecrow-18344.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }
    return (
        <div>
            <h1> {service.name}</h1>
            <img src={service.img} alt="" />
            <p>Price: {service.price}</p>
            <NavLink to={`/manageOrder/${_id}`} ><Button onClick={onSubmit(service)}>Place Order</Button></NavLink>
        </div>
    );
};

export default ServiceInfo;