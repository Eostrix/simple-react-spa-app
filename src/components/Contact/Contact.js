import React from 'react';
import location from '../../images/location.png';
import './Contact.css';

const Contact = () => {
    return (
        <div className="m-4">
            <h1>Students are always welcome to our Office.</h1>
            <div className="d-flex rounded-3 align-items-center justify-content-center border mx-5 mb-5">                
                <div className="w-50">
                    <h6>Visit us at:</h6>
                </div>
                <div className="w-50 address-box p-5">
                    <address>
                        <h5>Vdemy - Online Courses</h5>
                        Road 26, Banani, <br/>
                        Dhaka <br/>
                        Bangladesh
                    </address>
                </div>                
            </div>
            <div className="m-2">

                {/* Iframe import kore korte pera lagtese.....wholeday pc er shamne bosha, enough for today :)  */}
                <img src={location} alt="Location Map"></img>
            </div>
        </div>
    );
};

export default Contact;