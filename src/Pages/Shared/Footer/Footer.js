import React from 'react';

const Footer = () => {
    return (
        <footer class="bg-dark p-3 text-center text-white">
            <div class="lh-1">
                <h5>Tech Learning BD</h5>
            </div>

            <div class="d-flex justify-content-center text-white">

                <a class="fs-4 text-white" href="https://www.facebook.com/">
                    <span><i class="fa-brands fa-facebook"></i></span></a>

                <a class="fs-4 ps-5 text-white" target="_blank" href="https://twitter.com/">
                    <span><i class="fa-brands fa-twitter"></i></span></a>

                <a class="fs-4 ps-5 text-white" target="_blank" href="https://www.youtube.com/">
                    <span><i class="fa-brands fa-youtube"></i></span></a>

                <a class="fs-4 ps-5 text-white" target="_blank" href="https://www.tiktok.com/en/">
                    <span><i class="fa-brands fa-tiktok"></i></span></a>

            </div>
            <div class="mt-4 mb-0 pt-3 fs-6 text-info">©ATQ Solution Ltd 2023. All rights reserved.</div>
        </footer>
    );
};

export default Footer;