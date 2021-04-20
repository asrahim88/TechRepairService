import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = ({ data }) => {
    const { servicePhoto, serviceDescription
        , price, _id, name } = data;

    return (
        <div className="col-md-4 card-width mb-4">
            <div className='card'>
                <div class="card-body">
                    <div className="service-img-box mb-3 d-flex justify-content-center">
                        <img src={servicePhoto} alt="" className="img-fluid" />
                    </div>
                    <h6 class="card-subtitle mb-2 color">{name}</h6>
                    <h6 class="card-subtitle mb-2 color">Price Up To: $ {price}</h6>
                    <p class="card-text">{serviceDescription
                    }</p>
                    <Link to={"/booking/" + _id}><button type="button" class="btn bg ms-5 text-white">Get Service</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;