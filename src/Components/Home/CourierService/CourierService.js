import React from 'react';
import './CourierService.css';

const CourierService = () => {
    return (
        <div className='container'>
            <div className='row courier-container pb-5'>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="courier-img-box pt-5">
                        <img src="https://i.ibb.co/RTyD6PT/h11-img-4.jpg" alt="" />
                    </div>
                </div>
                <div className="col-md-6 d-flex  align-items-center">
                    <div className="courier-img-box  pt-5">
                        <h3>We Provide the Fastest Courier service for business</h3>
                        <p>
                            No more waiting in line with our professional services
                        </p>
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum deserunt velit perferendis sed? Alias, reprehenderit atque adipisci minus repellat omnis quas debitis sed recusandae blanditiis!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourierService;