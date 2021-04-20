import React from 'react';
import './TestimonialDetails.css';

const TestimonialDetails = ({ review }) => {
    const {customerName, companyName, comment} = review;
    return (
        <div className="col-md-4 card-width mb-5">
            <div class="card border">
                <div class="card-body">
                    <h5 class="card-title">{customerName}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{companyName}</h6>
                    <p class="card-text">{comment}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialDetails;