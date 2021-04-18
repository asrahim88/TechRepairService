import React from 'react';
import CourierService from '../CourierService/CourierService';
import Footer from '../Footer/Footer';
import HandleProject from '../HandleProject/HandleProject';
import Header from '../Header/Header/Header';
import Services from '../Services/Services/Services';
import Testimonials from '../Testimonials/Testimonial/Testimonials';



const Home = () => {
    return (
        <div className="container">
            <Header></Header>
            <Services></Services>
            <CourierService></CourierService>
            <Testimonials></Testimonials>
            <HandleProject></HandleProject>
            <Footer></Footer>
        </div>
    );
};

export default Home;