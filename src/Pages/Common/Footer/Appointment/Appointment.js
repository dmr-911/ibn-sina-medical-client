import React from 'react';
import './Appointment.css';

const Appointment = () => {
    return (
        <div>
            <h2>Make an Appointment</h2>
            <div className="line mx-auto mb-3"></div>

            <form action="">
                <input type="text" placeholder="name"/>
                <input type="email" name="email" id="email" placeholder="email"/>
                <textarea name="message" id="message" placeholder="Write your problem here"></textarea>
                <button type="submit" className="appointment-btn">Submit</button>
            </form>
        </div>
    );
};

export default Appointment;