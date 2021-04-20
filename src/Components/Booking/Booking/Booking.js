import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';
import { useForm } from "react-hook-form";
import './Booking.css';
import PaymentMethod from '../PyamentMethod/PaymentMethod';



const Booking = () => {
    const { serviceId } = useParams();
    const [loggedInUser] = useContext(UserContext);
    const [singleService, setSingleService] = useState({});
    const [info, setInfo] = useState(null);



    useEffect(() => {
        fetch(`http://localhost:8000/singleGetService/${serviceId}`)
            .then(response => response.json())
            .then(data => setSingleService(data[0]));
    }, [serviceId])

    // react hook formPage
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        setInfo(data)

    };
    console.log('uuuu', info)
    const handlePaymentSuccess = (paymentId) => {

        const order = {...loggedInUser, booking: info,  paymentId, orderTime: new Date()}
        fetch('http://localhost:8000/addOrder', { 
            method: 'POST',
            headers: { 'Content-Type': "application/json"},
            body: JSON.stringify(order)
        })
        .then(response => response.json())
        .then(data => console.log(data));

    }

    
    return (
        <div className='container parentComponent'>
            <div className="row">
                <div className="col-md-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-9 ">
                    <div className="d-flex justify-content-between">
                        <h2>Booking Service</h2>
                        <h2>Name</h2>
                    </div>
                    <div className="bookingBox">
                        <div className="p-4">
                            <div className="bookingFormBox p-5">
                                <div style={{ display: info ? "none" : 'block' }} >
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input name="email" defaultValue={loggedInUser.email} {...register("email")} />
                                        <br />
                                        <br />
                                        <input name="UserName" defaultValue={loggedInUser.name} {...register("UserName")} />
                                        <br />
                                        <br />
                                        <input name="ServiceName" defaultValue={singleService.name}{...register("ServiceName", { required: true })} />
                                        <br />
                                        <br />
                                        <input name="servicePrice" defaultValue={singleService.price} {...register("servicePrice", { required: true })} />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <input type="submit" />
                                    </form>
                                </div>
                                <div style={{ display: info ? "block" : 'none' }}>
                                    <PaymentMethod handlePayment={handlePaymentSuccess}></PaymentMethod>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>


        </div>
    );
};

export default Booking;