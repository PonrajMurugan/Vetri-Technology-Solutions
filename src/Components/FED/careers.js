import React from 'react';
import './csreers.css'; 
import hire1 from '../Images/hire1.e9da91b20566703d4aac.png';
import hire2 from '../Images/hire2.0b14254a9e75665dfd62.png';

const Careers = () => {
    return (
        <div data-aos="fade-down" className="careers-container">
            <div className="headers ">
                <h1>Current <span style={{color:"navy"}}> Openings</span></h1>
            </div>

            <div className="image-gallery">
                <img className="job-image" src={hire1} alt="Job Opening 1" />
                <img className="job-image" src={hire2} alt="Job Opening 2" />
            </div>
        </div>
    );
};

export default Careers;
