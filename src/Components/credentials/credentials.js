import React from 'react';
import './credentials.css';
import certificate from '../Vetri Technology Solutions_files/certificate.00c0bf2d87b1ad3921e4.png';
import cer1 from '../Vetri Technology Solutions_files/c1.8f2bd3a353514434ce3e.jpg';
import cer2 from '../Vetri Technology Solutions_files/c2.ab293d6ef6977ff4c2dd.jpg';
import cer3 from '../Vetri Technology Solutions_files/c4.b8116cafda358b5af492.jpg';
import cer4 from '../Vetri Technology Solutions_files/c5.cf1b256e51415ff6663d.jpg';

const Credentials = () => {
    return (
        <div data-aos="fade-up"  className="credentials-container">
            <div className="credentials-header">
                <h1>VTS <span>Credentials</span></h1>
                <p>VTS provides you a training completion certificate with an online verification code.</p>
                <p>Once training is complete at VTS, you will receive a guaranteed internship with our own IT organisation.</p>
                <p className="highlighted-text">Vetri IT Systems <span style={{color:"navy"}}>Private Limited.</span></p>
                <img src={certificate} alt='VTS Certificate' className="certificate-img" />
                <h6>VTS <span style={{color:"orange"}}>Certificate</span> </h6>
            </div>

            <div className="students-section">
                <h5><span style={{color:"orange"}}>Top Ranked</span> Students are from here</h5>
                <div className="students-gallery">
                    <div className="student-card">
                        <img src={cer1} alt='Student 1' className="student-img"/>
                        <div className="hover-content">Full Stack Developer</div>
                    </div>
                    <div className="student-card">
                        <img src={cer2} alt='Student 2' className="student-img"/>
                        <div className="hover-content">MERN Stack Developer</div>
                    </div>
                    <div className="student-card">
                        <img src={cer3} alt='Student 3' className="student-img"/>
                        <div className="hover-content">UI / UX Designer</div>
                    </div>
                    <div className="student-card">
                        <img src={cer4} alt='Student 4' className="student-img"/>
                        <div className="hover-content">Data Analyst</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Credentials;
