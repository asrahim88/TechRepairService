import React from 'react';
import './TestimonialDetails.css';

const TestimonialDetails = ({ review }) => {
    console.log(review)
    return (
        <div className="col-md-4 card-width mb-5">
            <div class="card border">
                <div class="card-body">
                    <h5 class="card-title">{review.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{review.companyName}</h6>
                    <p class="card-text">{review.description}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialDetails;