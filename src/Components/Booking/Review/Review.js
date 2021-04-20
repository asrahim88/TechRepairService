import React, { useState, useContext } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';
import './Review.css';
import { useForm } from "react-hook-form";

const Review = () => {
    const [loggedInUser] = useContext(UserContext);
    const [review, setReview] = useState({
        customerName: '',
        companyName: '',
        comment: ''
    })

    // handle Text area
    const handleBlur = (e) => {

        if (e.target.name === 'textArea') {
            const userComment = e.target.value;
            const newCustomer = { ...review };
            newCustomer.comment = userComment;
            setReview(newCustomer);
        }
    }

    // reacat hook formPage
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const newCustomer = { ...review };
        newCustomer.companyName = data.companyName;
        newCustomer.customerName = data.UserName;
        setReview(newCustomer);

        const url = `https://powerful-lake-10754.herokuapp.com/addReview`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        })
        .then(response => console.log('server side response', response))
    };


    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-9">
                    <div className="d-flex justify-content-between">
                        <h2>Service Review</h2>
                        <h2>{loggedInUser.name}</h2>
                    </div>
                    <div>
                        <div className="bookingBox p-5">
                            <div className="reviewFormBox p-4">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <input className="mt-2 filed p-1" name="UserName" defaultValue={loggedInUser.name} {...register("UserName")} />
                                        </div>
                                        <div>
                                            <input className="mt-2 filed p-1" name="companyName" required placeholder="Your Company Name"{...register("companyName")} />
                                        </div>
                                    </div>
                                    <div>
                                        <textarea required onBlur={handleBlur} name='textArea' class="form-control mt-2" placeholder="Enter Your Comment Please!" id="floatingTextarea2" style={{ width: "350px" }}></textarea>
                                    </div>
                                    <input type="submit" className="mt-3" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;