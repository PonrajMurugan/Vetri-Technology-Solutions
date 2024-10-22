import React from 'react';
import './trainees.css';
import { FaBriefcase, FaCalendarAlt, FaFileAlt, FaCertificate, FaCheckCircle, FaInfoCircle } from 'react-icons/fa';

const Trainees = () => {
    return (


        <div  data-aos="fade-up" className="trainees-section">
            <h1 className="section-title">Trainees <span style={{color:"orange"}}> Query</span></h1>
            <div className="faq-container container">
                <div className="faq-item">
                    <FaBriefcase className="icons" />
                    <div className="faq-content">
                        <h6>Where the VTS trainees will get a job?</h6>
                        <p>Our VTS trainees will be placed in our Vetri IT Systems Private Limited.</p>
                    </div>
                </div>
                <div className="faq-item">
                    <FaCalendarAlt className="icons" />
                    <div className="faq-content">
                        <h6>What is the Internship Period?</h6>
                        <p>After successful completion of training and obtaining a certificate, the following 3 months will be an Internship with Vetri IT Systems Pvt Ltd.</p>
                    </div>
                </div>
                <div className="faq-item">
                    <FaFileAlt className="icons" />
                    <div className="faq-content">
                        <h6>Any exams in the training period?</h6>
                        <p>Yes, weekly exams and reviews will be conducted. Successful completion is strictly required for placement.</p>
                    </div>
                </div>
                <div className="faq-item">
                    <FaCertificate className="icons" />
                    <div className="faq-content">
                        <h6>Only exam cleared candidates eligible for job?</h6>
                        <p>Yes, the candidate has to clear the exams and get the certificate to join the internships.</p>
                    </div>
                </div>
                <div className="faq-item">
                    <FaCheckCircle className="icons" />
                    <div className="faq-content">
                        <h6>Is it necessary to complete the Internship for the job?</h6>
                        <p>Yes, completing the internship is necessary for placement.</p>
                    </div>
                </div>

                <div className="faq-item">
                        <FaInfoCircle className="icons" />
                        <div className="faq-content">
                            <h6>What can I create?</h6>
                            <p>Build dynamic web applications using the Full stack!</p>
                        </div>
                    </div>


            </div>
        </div>

    );
};

export default Trainees;
