
import React, { useEffect, useState } from 'react';
import './ManageOrder.css';
import logo from './../../resource/Logo.png';
import { useParams } from 'react-router';

const ManageOrder = () => {
    const { _id } = useParams();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://spooky-scarecrow-18344.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, []);
    // Delete Order
    const handleDleteUser = id => {
        console.log(id);
        const url = `https://spooky-scarecrow-18344.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result.deletedCount) {
                    alert('Deleted');
                }
            })
    };
    return (
        <div>
            <img src={logo} alt="" />
            <h1>Your Order List</h1>
            <div className='order-list'>
                <div className='bg-dark text-white p-5'>

                    {
                        orders.map(order => <ul key={order._id}>
                            <li style={{ listStyle: 'none' }} >{order.name}  <button onClick={() => handleDleteUser(order._id)}>Delete</button></li>
                        </ul>)

                    }
                </div>
            </div>

        </div>
    );
};

export default ManageOrder;