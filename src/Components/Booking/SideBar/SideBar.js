import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import { faShoppingCart, faClipboardList, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideBar = () => {
    return (
        <div>
            <h3 className='color'>тⓔ𝐜𝒽ｒ𝒆ƤÃเᖇ𝐒𝔼𝐑V𝔦𝓒є</h3>
            <div className='sideBar p-5'>
                <Link to='booking' className="text-decoration-none">
                    <div className="d-flex">
                        <div className="m-3">
                            <FontAwesomeIcon className="fs-4 text-info" icon={faShoppingCart} />
                        </div>
                        <div className="ml-1 mt-2 pt-1">
                            <p className="text-info">Book</p>
                        </div>
                    </div>
                </Link>
                <Link to='/bookingList' className="text-decoration-none">
                    <div className="d-flex">
                        <div className="m-3">
                            <FontAwesomeIcon className="fs-4 text-info" icon={faClipboardList} />
                        </div>
                        <div className="ml-1 mt-2 pt-1">
                            <p className="text-info">Booking List</p>
                        </div>
                    </div>
                </Link>
                <Link to="/review" className="text-decoration-none">
                    <div className="d-flex">
                        <div className="m-3">
                            <FontAwesomeIcon className="fs-4 text-info" icon={faCommentDots} />
                        </div>
                        <div className="ml-1 mt-2 pt-1">
                            <p className="text-info">Review</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default SideBar;