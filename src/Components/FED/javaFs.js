import React from 'react';
import ClockIcon from '@mui/icons-material/AccessTime'; 
import SchoolIcon from '@mui/icons-material/School'; 
import ComputerIcon from '@mui/icons-material/Computer'; 
import java from '../Images/JAVA FULL STACK ROAD MAP.6ece223d0102f842a28c.png'


const JavaFs = () => {
    return (
        <div data-aos="flip-left" className='mern-container'>
        <div>
            <h1>Java Full Stack</h1>
            <p>Java Fullstack development encompasses both frontend and backend development using Java.</p>
        </div>

        <div className='mern-flexbox'>
            <div className='mern-flexbox-item'>
                <ClockIcon className='mern-icon' style={{ fontSize: '60px' }} /> 
                <h1>IT Training Duration</h1>
                <p>6 Months</p>
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
            <img src={java} alt='MERN Stack Roadmap' />
        </div>
    </div>
    );
};

export default JavaFs;