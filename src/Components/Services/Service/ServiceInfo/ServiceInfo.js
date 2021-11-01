import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';


const ServiceInfo = () => {
    const { _id } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`https://spooky-scarecrow-18344.herokuapp.com/services/${_id}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, []);

    const onSubmit = data => {
        // const saveCart = getStoredCart();
        // data.order = saveCart;
        // console.log(data);
        if (data.name) {
            axios.post('https://spooky-scarecrow-18344.herokuapp.com/orders', data)
                .then(result => {
                    alert('Tanks For Your Purchased')
                    console.log(result);
                });


        }
    };


    return (
        <div>
            <h1> {service.name}</h1>
            <img src={service.img} alt="" />
            <p>Price: {service.price}</p>
            <Button onClick={() => onSubmit(service)}>Place Order</Button>
        </div >
    );
};

export default ServiceInfo;