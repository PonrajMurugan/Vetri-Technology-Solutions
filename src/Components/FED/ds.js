import React from 'react';
import ClockIcon from '@mui/icons-material/AccessTime'; 
import SchoolIcon from '@mui/icons-material/School'; 
import ComputerIcon from '@mui/icons-material/Computer'; 
import DataScientist from '../Images/DATA SCIENCE ROAD MAP.50d74e15efadde7c9b88.png';


const DataScientists = () => {
    return (
        <div data-aos="flip-left" className='mern-container'>
        <div>
            <h1>Data Science</h1>
            <p>Data science involves extracting knowledge and insights from data through various methods and algorithms.</p>
        </div>

        <div className='mern-flexbox'>
            <div className='mern-flexbox-item'>
                <ClockIcon className='mern-icon' style={{ fontSize: '60px' }} /> 
                <h1>IT Training Duration</h1>
                <p>4 Months</p>
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
            <img src={DataScientist} alt='MERN Stack Roadmap' />
        </div>
    </div>
    );
};

export default DataScientists;