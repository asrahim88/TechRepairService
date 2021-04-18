import React from 'react';
import './HandleProject.css';

const HandleProject = () => {
    return (
        <div className='container handleProjectContainer pb-5'>
            <div className='pt-5'>
                <div class="d-flex justify-content-center">
                    <div className='getComments bg'>
                        <h1 className='text-center text-info'>Let us handle your  Service, professionally</h1>
                    </div>
                </div>
                <div>
                    <div className='getAddress'>
                        <form class="row g-3">
                            <div class="col-md-6">
                                <label for="FullName" class="form-label">Full Name</label>
                                <input type="text" class="form-control" placeholder="Enter Your Full Name" id="FullName" />
                            </div>
                            <div class="col-md-6">
                                <label for="LastName" class="form-label">Last Name</label>
                                <input type="text" class="form-control" placeholder='Enter Your Last Name' id="LastName" />
                            </div>
                            <div class="col-md-6">
                                <label for="email" class="form-label">Email Address</label>
                                <input type="email" class="form-control" placeholder='Enter Your Email Address' id="email" />
                            </div>
                            <div class="col-md-6">
                                <label for="phoneNumber" class="form-label">Phone Number</label>
                                <input type="number" class="form-control" placeholder='Enter Your Phone Number' id="phoneNumber" />
                            </div>
                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
                                <label for="floatingTextarea2">Your Massage Here</label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HandleProject;