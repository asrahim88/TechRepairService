import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import './AddService.css';

const axios = require('axios');

const AddService = () => {
    const [loggedInUser] = useContext(UserContext);

    const [service, setService] = useState({
        serviceDescription: '',
        name: '',
        price: '',
        servicePhoto: null
    })

    // handle image Uploaded
    const handleImageUpload = event => {
        const imgData = new FormData();
        imgData.set('key', 'beff36e7fe15b7d9abc3b7c7350bad4f')
        imgData.append('image', event.target.files[0])

        // // axios
        axios.post('https://api.imgbb.com/1/upload',
            imgData)
            .then(function (response) {
                console.log('upload photo', response.data.data.display_url)
                const photo = response.data.data.display_url;
                const newService = { ...service };
                newService.servicePhoto = photo;
                setService(newService);
            })
            .catch(function (error) {
                console.log(error);
            });
        // // axios
    }

    // get data from input field
    const handleBlur = (e) => {
        if (e.target.name === 'serviceName') {
            const itemName = e.target.value;
            const newService = { ...service };
            newService.name = itemName;
            setService(newService);
        }

        if (e.target.name === 'servicePrice') {
            const price = e.target.value;
            const newService = { ...service };
            newService.price = price;
            setService(newService);
        }

        if (e.target.name === 'textArea') {
            // console.log(e.target.name, e.target.value);
            const description = e.target.value;
            const newService = { ...service };
            newService.serviceDescription = description;
            setService(newService);
        }
    }

    // Submit Service or Handle Submit form
    const handleSubmit = (e) => {
        const url = `http://localhost:8000/addService`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(service)
        })
            .then(response => console.log('server side response', response))
        e.preventDefault();
    }
    return (
        <div className='container'>
            <div className="row">
                <div>
                    <div className="d-flex justify-content-between">
                        <h1>Add Service</h1>
                        <h1>{loggedInUser.name}</h1>
                    </div>
                    <div>
                        <div className="formBox p-4">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <small>Service Name</small>
                                            <br />
                                            <input type="text" required placeholder="Enter Service Name" className="mt-2 filed p-1" name='serviceName' onBlur={handleBlur} />
                                        </div>
                                        <div>
                                            <small>Service Price</small>
                                            <br />
                                            <input type="number" required placeholder="Enter Price" className="mt-2 filed p-1" name='servicePrice' onBlur={handleBlur} />
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-4">
                                        <div>
                                            <small>Description</small>
                                            <br />
                                            <textarea required onBlur={handleBlur} name='textArea' class="form-control" placeholder="Enter service  Description" id="floatingTextarea2" style={{ width: "350px" }}></textarea>

                                        </div>
                                        <div>
                                            <small>Upload Image</small>
                                            <br />
                                            <input required type="file" placeholder="Enter Price" className="mt-2 filed p-1" onChange={handleImageUpload} />
                                        </div>
                                    </div>
                                </div>
                                <input type='submit' className='inputBtn' value='Submit' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;