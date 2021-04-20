import React from 'react';
import { Link } from 'react-router-dom';
import { faPlusCircle, faClipboardList, faUserShield, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const AdminSideBar = () => {
    return (
        <div>
             <h3 className='color'>тⓔ𝐜𝒽ｒ𝒆ƤÃเᖇ𝐒𝔼𝐑V𝔦𝓒є</h3>
            <div className="sideBar">
                <Link to='/addService' className='text-decoration-none'>
                    <div className='d-flex mt-4'>
                        <div className='m-2'>
                            <FontAwesomeIcon className=" fs-4 textColor" icon={faPlusCircle} />
                        </div>
                        <div className='m-2'>
                            <p className='text-info'>Add Service</p>
                        </div>
                    </div>
                </Link>
                <Link to='/orderList' className='text-decoration-none'>
                    <div className='d-flex '>
                        <div className='m-2'>
                            <FontAwesomeIcon className=" fs-4 textColor" icon={faClipboardList} />
                        </div>
                        <div className='m-2'>
                            <p className='text-info'>Order List</p>
                        </div>
                    </div>
                </Link>
                <Link to='/makeAdmin' className='text-decoration-none'>
                    <div className='d-flex '>
                        <div className='m-2'>
                            <FontAwesomeIcon className=" fs-4 textColor" icon={faUserShield} />
                        </div>
                        <div className='m-2'>
                            <p className='text-info'>Make Admin</p>
                        </div>
                    </div>
                </Link>
                <Link to='/manageService' className='text-decoration-none'>
                    <div className='d-flex '>
                        <div className='m-2'>
                            <FontAwesomeIcon className=" fs-4 textColor" icon={faTasks} />
                        </div>
                        <div className='m-2'>
                            <p className='text-info'>Manage Service</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default AdminSideBar;