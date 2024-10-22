import React from 'react';
import javabk from '../Images/JAva BACKEND DEVELOPER ROAD MAP-MODULE 3.8f550385d19aa1a2b694.png';
import ClockIcon from '@mui/icons-material/AccessTime'; 
import SchoolIcon from '@mui/icons-material/School'; 
import ComputerIcon from '@mui/icons-material/Computer'; 

const Javabk = () => {
    return (
        <div data-aos="flip-left" className='mern-container'>
        <div>
            <h1>Backend Developer (Java)</h1>
            <p>A Java back end developer is responsible for developing and maintaining server-side applications and web services using Java programming language and related technologies</p>
        </div>

        <div className='mern-flexbox'>
            <div className='mern-flexbox-item'>
                <ClockIcon className='mern-icon' style={{ fontSize: '60px' }} /> 
                <h1>IT Training Duration</h1>
                <p>3 Months</p>
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
            <img src={javabk} alt='MERN Stack Roadmap' />
        </div>
    </div>
    );
};

export default Javabk;