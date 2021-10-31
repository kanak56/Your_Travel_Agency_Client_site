import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Service = (props) => {
    const { id, name, price, img, shortDescription } = props.service;
    return (
        <div>
            <div className="col" id='services'>
                <div className="card importants">
                    <img src={img} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p>{shortDescription}</p>
                        <p>Price: {price}</p>
                        <NavLink to={`/services/:${id}}`} className='btn text-white rounded-lg'><Button >Buy Now</Button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;