import React from 'react';
import ClockIcon from '@mui/icons-material/AccessTime'; 
import SchoolIcon from '@mui/icons-material/School'; 
import ComputerIcon from '@mui/icons-material/Computer'; 
import st from '../Images/SOFTWARE TESTING ROAD MAP.ed9e20859ad44974df18.png';


const Software = () => {
    return (
        <div data-aos="flip-left" className='mern-container'>
        <div>
            <h1>Software Testing</h1>
            <p>Software testing involves evaluating software applications to ensure they meet quality standards.</p>
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
            <img src={st} alt='MERN Stack Roadmap' />
        </div>
    </div>
    );
};

export default Software;