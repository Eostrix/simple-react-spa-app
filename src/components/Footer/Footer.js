import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer mt-5 p-3 d-flex justify-content-center align-items-center">
            <div className="w-50">
                <h6>© All rights reserved by Vdemy Online Courses 2021</h6>
            </div>
            <div className="w-50">
                <h6>Useful Links:</h6>
                <div className="external-links d-flex flex-column">
                    <a href="https://google.com">Google</a>
                    <a href="https://github.com">Github</a>
                    <a href="https://netlify.com">Netlify</a>
                    <a href="https://programming-hero.com/">Programing Hero</a>
                    <a href="https://w3schools.com">W3 School</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;