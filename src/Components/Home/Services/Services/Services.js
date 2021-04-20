import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './Services.css';


const Services = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/getService')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div className="service-container">
            <h1 className=" text-center mb-5"> <span className="bg text-info p-2 rounded">Our Awesome Service</span> </h1>
            <div className="container">
                <div className="row">
                    {
                        service.map(data => <ServiceDetails data={data} key={data._id}></ServiceDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;