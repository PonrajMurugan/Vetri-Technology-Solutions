import React from 'react';
import './fed.css';
import ClockIcon from '@mui/icons-material/AccessTime'; 
import SchoolIcon from '@mui/icons-material/School'; 
import ComputerIcon from '@mui/icons-material/Computer'; 
import fed from '../Images/FRONT END DEVELOPER ROAD MAP.35307cdb602282140feb.png'

const Fed = () => {
    return (
        <div data-aos="flip-left" className='mern-container'>
        <div>
            <h1>Front End Developer</h1>
            <p>Frontend development is crucial as it directly shapes the user experience by designing intuitive interfaces.</p>
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
            <img src={fed} alt='MERN Stack Roadmap' />
        </div>
    </div>
    );
};

export default Fed;