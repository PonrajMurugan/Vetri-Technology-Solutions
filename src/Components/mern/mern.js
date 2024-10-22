import React from 'react';
import './mern.css';
import mern from '../Images/MERN  STACK ROAD MAP.3d0935b0d5b30a734f1f.png';
import ClockIcon from '@mui/icons-material/AccessTime'; 
import SchoolIcon from '@mui/icons-material/School'; 
import ComputerIcon from '@mui/icons-material/Computer'; 

const Mern = () => {
    return (
        <div data-aos="flip-left" className='mern-container'>
            <div>
                <h1>MERN Stack</h1>
                <p>The MERN stack is a popular web development framework consisting of MongoDB, Express.js, React.js, and Node.js.</p>
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
                <img src={mern} alt='MERN Stack Roadmap' />
            </div>
        </div>
    );
};

export default Mern;
