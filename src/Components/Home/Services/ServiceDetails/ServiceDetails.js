import React from 'react';
import './ServiceDetails.css';

const ServiceDetails = ({ data }) => {
    console.log('service data', data);
    return (
        <div className="col-md-4 card-width mb-4">
            <div className = 'card'>
                <div class="card-body">
                    <div className="service-img-box mb-3 d-flex justify-content-center">
                        <img src={data.image} alt="" className="img-fluid" />
                    </div>
                    <h6 class="card-subtitle mb-2 color">{data.name}</h6>
                    <h6 class="card-subtitle mb-2 color">Price Up To: $ {data.price}</h6>
                    <p class="card-text">{data.description}</p>
                    <button type="button" class="btn bg text-info active mb-2 width" data-bs-toggle="button" autocomplete="off" aria-pressed="true">Get Service</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;