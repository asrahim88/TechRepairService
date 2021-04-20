import React, { useState, useEffect } from 'react';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';
import './Testimonials.css';


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/getReview')
            .then(response => response.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className="testimonial-container pb-5">
            <div className="container">
                <h1 className=" text-center mb-5"> <span className="bg text-info p-2 rounded lh-lg">Happy Customers After Servicing</span> </h1>
                <div className="container">
                    <div className="row">
                        {
                            reviews.map(review => <TestimonialDetails review={review} key={review._id}></TestimonialDetails>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;