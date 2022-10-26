import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer fixed="bottom" className="bg-dark p-3 text-center text-warning">
            <div className="lh-1">
                <h6>Tech Learning BD</h6>
            </div>

            <div class="d-flex justify-content-center text-white ms-5 me-5 ps-5 pe-5">
                <Link className='me-3'> <FaFacebookF></FaFacebookF> </Link>
                <Link className='me-3'> <FaTwitter></FaTwitter> </Link>
                <Link className='me-3'> <FaYoutube></FaYoutube> </Link>
                <Link className='me-3'> <FaTiktok></FaTiktok> </Link>
            </div>
            <div class="mt-1 mb-0 pt-3 fs-6 text-info">© All rights reserved.</div>
        </footer>
    );
};

export default Footer;