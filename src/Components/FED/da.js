import React from 'react';
import ClockIcon from '@mui/icons-material/AccessTime'; 
import SchoolIcon from '@mui/icons-material/School'; 
import ComputerIcon from '@mui/icons-material/Computer'; 
import da from '../Images/DATA ANALYTICS ROAD MAP.dae63ab3357905d243e5.png';

const Dataanalyst = () => {
    return (
        <div data-aos="flip-left" className='mern-container'>
        <div>
            <h1>Data Analytics</h1>
            <p>Data analytics involves analyzing data to uncover insights and make data-driven decisions.</p>
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
            <img src={da} alt='MERN Stack Roadmap' />
        </div>
    </div>
    );
};

export default Dataanalyst;