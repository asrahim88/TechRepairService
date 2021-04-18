import React from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './Services.css';
const service = [
    {
        image: 'https://i.ibb.co/MRkGZpy/Screenshot-29.png',
        name: 'Laptop Repair / Computer Repair',
        price: 850,
        description: 'Laptop Service Technicians ensure that both the hardware and software equipment of an enterprise are well-secured so that they function uninterruptedly. Known also as PC technicians, they have experience with a variety of tools to effectively troubleshoot problems of computer systems.'

    },
    {
        image: 'https://i.ibb.co/HnQZvBR/clay-banks-c2a0-Tyd-Ml-As-unsplash.jpg',
        name: 'Mobile Repairs',
        price: 350,
        description: 'Mobile Service Technicians ensure that both the hardware and software equipment of an enterprise are well-secured so that they function uninterruptedly. Known also as PC technicians, they have experience with a variety of tools to effectively troubleshoot problems of computer systems.'

    },
    {
        image: 'https://i.ibb.co/h8hgm1N/carlos-muza-hpj-Sk-U2-UYSU-unsplash.jpg',
        name: 'Data Recovery $ HDD',
        price: 1500,
        description: 'Data Recover Service Technicians ensure that both the hardware and software equipment of an enterprise are well-secured so that they function uninterruptedly. Known also as PC technicians, they have experience with a variety of tools to effectively troubleshoot problems of computer systems.'

    }

]

const Services = () => {
    const serviceData = service;
    return (
        <div className="service-container">
            <h1 className=" text-center mb-5"> <span className="bg text-info p-2 rounded">Our Awesome Service</span> </h1>
            <div className="container">
                <div className="row">
                    {
                        serviceData.map(data => <ServiceDetails data={data}></ServiceDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;