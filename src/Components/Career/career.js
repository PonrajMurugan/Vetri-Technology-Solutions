import React from 'react';
import './career.css';
import career from '../Vetri Technology Solutions_files/5.f9dd4c0a579956cc27fb.png'

const Career = () => {
    return (
        <div className='container'>
      <div className='header'>
    <h1 data-aos="fade-down" className='heading'>Vetri <span style={{color:"navy"}}>Technology</span> Solutions</h1>
</div>

        <div data-aos="fade-up" className='flex'>
            <div className='image-container'>
                <img src={career} alt='Career' />
            </div>
            <div className='content'>
    <h6>VTS BUILD THE SKILLS TO DRIVE YOUR</h6>
    <h6 style={{color:"orange"}}>IT CAREER!!</h6>
    <p><i class="fas fa-arrow-right"></i> VTS is the No.1 Software Training Institute in Tamilnadu - Based out of Tenkasi & Tirunelveli Providing 100% Placement in our own IT Company <span style={{color:"orange"}}> Vetri IT Systems </span> to the graduated students from IT and Non-IT streams.</p>
    <p><i class="fas fa-arrow-right"></i> VTS has a team of highly experienced trainers who have worked on a wide range of projects and have a deep understanding of the development and testing process. We believe in providing hands-on training to our trainees, which helps them to gain practical experience and prepare them for real-world scenarios.</p>
</div>
        </div>
    </div>
    
    );
};

export default Career;