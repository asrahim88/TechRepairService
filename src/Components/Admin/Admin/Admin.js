import React from 'react';
import AddService from '../AddService/AddService';
import AdminSideBar from '../AdminSideBar/AdminSideBar';

const Admin = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <AdminSideBar></AdminSideBar>
                </div>
                <div className="col-md-9">
                    <AddService></AddService>
                </div>
            </div>
        </div>
    );
};

export default Admin;