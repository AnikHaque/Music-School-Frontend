import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <span className="footer-title">About Us</span>
                    <a className="link link-hover">Classes</a>
                    <a className="link link-hover">Teachers</a>
                    <a className="link link-hover">Review</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Important Link</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Contact Us</span>
                    <a className="link link-hover">sirajdoullah road, <br /> Chittagong, Bangladesh</a>
                    <a className="link link-hover">+880 12345678</a>
                    <a className="link link-hover">abcd@gmail.com</a>
                </div>
                <div className='text-center'>
                    <span className="footer-title">Social Link</span>
                    <a>
                        <FaFacebook className='text-2xl'></FaFacebook>
                    </a>
                    <a>
                        <FaInstagram className='text-2xl'></FaInstagram>
                    </a>
                    <a>
                        <FaTwitter className='text-2xl'></FaTwitter>
                    </a>
                    <a>
                        <FaYoutube className='text-2xl'></FaYoutube>
                    </a>
                </div>
            </footer>
            <footer className="footer text-center px-10 pb-5 bg-neutral text-neutral-content">
                <p className='text-center mx-auto mb-5'>Copyright © 2023 - All right reserved</p>
            </footer>
        </>
    );
};

export default Footer;