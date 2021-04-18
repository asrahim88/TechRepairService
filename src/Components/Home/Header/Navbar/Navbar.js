import React from 'react';

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
                                <a class="nav-link active ms-5 color" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5 color" href="#">Our Portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5 color" href="#">Our Team</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5 color" href="#">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5 color" href="#">Contact Us</a>
                            </li>
                            <li class="nav-item">
                                <button type="button" class="btn bg ms-5 text-white">Login</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;