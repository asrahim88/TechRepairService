import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <h2 class="navbar-brand color" href="#">тⓔ𝐜𝒽ｒ𝒆ƤÃเᖇ𝐒𝔼𝐑V𝔦𝓒є </h2>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <Link to="/home" class="nav-link active ms-5 color" aria-current="page">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="#" class="nav-link ms-5 color">Our Portfolio</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="#" class="nav-link ms-5 color">Our Team</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/admin" class="nav-link ms-5 color">Admin</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="#" class="nav-link ms-5 color">Contact Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/login"><button type="button" class="btn bg ms-5 text-white">Login</button></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;