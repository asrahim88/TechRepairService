import React from 'react';
import HeaderBody from '../HeaderBody/HeaderBody';
import Navbar from '../Navbar/Navbar';
import './Header.css';


const Header = () => {
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <HeaderBody></HeaderBody>
        </div>
    );
};

export default Header;