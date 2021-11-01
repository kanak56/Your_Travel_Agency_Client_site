
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import logo from './../../resource/Logo.png';

const ManageOrder = () => {
    const { _id } = useParams();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/services/${_id}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <img src={logo} alt="" />
            <h1>Your Order List</h1>
            <div className='bg-dark text-white'>
                <p>Plan: {orders.name} ,  price: {orders.price}</p>
            </div>

        </div>
    );
};

export default ManageOrder;