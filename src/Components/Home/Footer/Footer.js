import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPhoneVolume, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <div className='container bg'>
            <div className="row pt-5 pb-5">
                <div className='col-md-3 textColor'>
                    <h1>Tech Repair Service</h1>
                    <div className='pt-3'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos eum est? Animi, ipsa culpa?</p>
                    </div>
                    <div className="social">
                        <Link to='https://www.facebook.com/taskin.taskinahmed.5/' target="_blank" ><FontAwesomeIcon className=" fs-4 ms-2 textColor link" icon={faFacebookF} /></Link>
                        <Link to='https://twitter.com/AsRahim2' target="_blank"><FontAwesomeIcon className="fs-4 ms-2 textColor link" icon={faTwitter} /></Link>
                        <Link to='https://www.linkedin.com/in/abdur-rahim-501a80182/' className='text-decoration-none textColor' target="_blank"><FontAwesomeIcon className=" fs-4 ms-2 link" icon={faLinkedinIn} /></Link>
                    </div>
                </div>
                <div className='col-md-3 textColor'>
                    <h1>Quick Links</h1>
                    <div className='pt-3'>
                        <li className="list-unstyled "><Link to="#" className='text-decoration-none textColor link' >Home</Link></li>
                        <li className="list-unstyled "><Link to="#" className='text-decoration-none textColor link' >Make Appointments</Link></li>
                        <li className="list-unstyled"><Link to="#" className='text-decoration-none textColor link' >Before & After</Link></li>
                        <li className="list-unstyled"><Link to="#" className='text-decoration-none textColor link' >Blog</Link></li>
                        <li className="list-unstyled"><Link to="#" className='text-decoration-none textColor link' >Contact</Link></li>
                    </div>
                </div>
                <div className='col-md-3 textColor'>
                    <h1>Quick Links</h1>
                    <div className='pt-3'>
                        <li class="list-unstyled"><Link to='#' className='text-decoration-none textColor link' >Home</Link></li>
                        <li class="list-unstyled "><Link to='#' className='text-decoration-none textColor link' >Make Appointments</Link></li>
                        <li class="list-unstyled"><Link to='#' className='text-decoration-none textColor link' >Before & After</Link></li>
                        <li class="list-unstyled "><Link to='#' className='text-decoration-none textColor link' >Blog</Link></li>
                        <li class="list-unstyled"><Link to='#' className='text-decoration-none textColor link' >Contact</Link></li>
                    </div>
                </div>
                <div className='col-md-3'>
                    <h1 className='textColor'>Get In ToucH</h1>
                    <div className='pt-3'>
                        <div className='pb-2'>
                            <Link><FontAwesomeIcon className=" fs-4 textColor" icon={faPhoneVolume} />  </Link><span className='ms-2 textColor'>0(143)4567897</span>
                        </div>
                        <div className='pb-2'>
                            <Link><FontAwesomeIcon className="fs-4 info textColor" icon={faEnvelope} /> </Link><span className='ms-2 textColor'>info@example.com</span>
                        </div>
                        <div className='pb-2'>
                            <Link><FontAwesomeIcon className="fs-4 textColor" icon={faHome} /> </Link><span className='ms-2 textColor'>11-Deneside, Seghil",NE23 7ER</span>
                        </div>
                        <button type="button" class="btn btn-outline-info">Sbucribe</button>
                    </div>
                </div>
            </div>
            <p className='text-center bg pb-3'><small className='text-info'> Copy right © 2021. All rights reserved By TeChRePaIrSeRvIcE.</small></p>
        </div>
    );
};

export default Footer;