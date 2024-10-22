import React from 'react';
import ClockIcon from '@mui/icons-material/AccessTime'; 
import SchoolIcon from '@mui/icons-material/School'; 
import ComputerIcon from '@mui/icons-material/Computer'; 
import aws from '../Images/AWS ROADMAP.8d04a69da94aa8d5157b.png';


const Aws = () => {
    return (
        <div data-aos="flip-left" className='mern-container'>
        <div>
            <h1>AWS</h1>
            <p>AWS (Amazon Web Services) is a cloud computing platform providing a range of services for building and managing applications.</p>
        </div>

        <div className='mern-flexbox'>
            <div className='mern-flexbox-item'>
                <ClockIcon className='mern-icon' style={{ fontSize: '60px' }} /> 
                <h1>IT Training Duration</h1>
                <p>5 Months</p>
            </div>

            <div className='mern-flexbox-item'>
                <SchoolIcon className='mern-icon' style={{ fontSize: '60px' }} /> 
                <h1>IT Training Eligibility</h1>
                <p>Any degree 2021-2024 Passed Out Students</p>
            </div>

            <div className='mern-flexbox-item'>
                <ComputerIcon className='mern-icon' style={{ fontSize: '60px' }} />
                <h1>IT Training Modes</h1>
                <p>Online/ Classroom</p>
            </div>
        </div>

        <div className='mern-image-container'>
            <img src={aws} alt='MERN Stack Roadmap' />
        </div>
    </div>
    );
};

export default Aws;