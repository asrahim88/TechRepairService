import React from 'react';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';
import './Testimonials.css';
const reviews = [
    {
        name: 'Muhammad Muhib khan',
        companyName: 'Google',
        description: 'Your Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit quam quod placeat harum animi ipsa sapiente nobis quaerat, laudantium aspernatur fugit aperiam molestiae? Nihil, consectetur autem. Repudiandae vero dolorem accusamus?'
    },
    {
        name: 'Obaidullah Muhib',
        companyName: 'Facebook',
        description: 'Your Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit quam quod placeat harum animi ipsa sapiente nobis quaerat, laudantium aspernatur fugit aperiam molestiae? Nihil, consectetur autem. Repudiandae vero dolorem accusamus?'
    },
    {
        name: 'Haji munshi Muhib khan',
        companyName: 'twitter',
        description: 'Your Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit quam quod placeat harum animi ipsa sapiente nobis quaerat, laudantium aspernatur fugit aperiam molestiae? Nihil, consectetur autem. Repudiandae vero dolorem accusamus?'
    },
]

const Testimonials = () => {
    return (
            <div  className="testimonial-container pb-5">
                <div className="container">
                    <h1 className=" text-center mb-5"> <span className="bg text-info p-2 rounded lh-lg">Happy Customers After Servicing</span> </h1>
                    <div className="container">
                        <div className="row">
                            {
                                reviews.map(review => <TestimonialDetails review={review}></TestimonialDetails>)
                            }
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Testimonials;