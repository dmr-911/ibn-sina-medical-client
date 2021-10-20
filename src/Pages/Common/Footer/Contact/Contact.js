import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faEnvelope, faClock, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import './Contact.css';

const map = <FontAwesomeIcon style={{color: 'aqua'}} icon={faMapMarker} />;
const message = <FontAwesomeIcon style={{color: 'aqua'}} icon={faEnvelope} />;
const clock = <FontAwesomeIcon style={{color: 'aqua'}} icon={faClock} />;
const phone = <FontAwesomeIcon style={{color: 'aqua'}} icon={faPhoneAlt} />;

const Contact = () => {
    return (
      <div>
        <h3>Contact Details</h3>
        <div className="line mx-auto mb-3 rounded"></div>
        <p>{map} 69 Elephant Road, Dhaka-1201</p>
        <p>{message} mizanur911@ibn-sina.com</p>
        <p>{clock} 8 A.M to 12 P.M Monday to Saturday</p>
        <p>{phone} (+021) 2336 278</p>
      </div>
    );
};

export default Contact;