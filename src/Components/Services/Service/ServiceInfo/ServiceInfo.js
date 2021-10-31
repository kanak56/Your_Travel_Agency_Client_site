import React from 'react';
import { useParams } from 'react-router';

const ServiceInfo = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>hi id {id}</h1>
        </div>
    );
};

export default ServiceInfo;