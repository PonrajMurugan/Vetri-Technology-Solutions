import React from 'react';
import { useNavigate } from 'react-router-dom';
import './trainings.css';

import back1 from '../Vetri Technology Solutions_files/back1.47c41db452908f0d1060.png';
import back2 from '../Vetri Technology Solutions_files/back2.b0d950318571ed0d120e.png';
import back3 from '../Vetri Technology Solutions_files/back3.2f73dd883a78c064dc99.png';
import mern from '../Vetri Technology Solutions_files/mern.282e1e3c2a8165db01f1.png';
import front from '../Vetri Technology Solutions_files/front.6b1b2aaf9bd6bea749f6.png';
import python from '../Vetri Technology Solutions_files/python.3174fd4a3abc07c371e2.png';
import java from '../Vetri Technology Solutions_files/java.0cc6036a9d1f720406aa.png';
import app from '../Vetri Technology Solutions_files/app.3dcc7732f51badab0bbb.png';
import bus from '../Vetri Technology Solutions_files/bus.c59b141d650fb091963c.png';
import aws from '../Vetri Technology Solutions_files/aws.4df3ff4c1d8f8254eb07.png';
import digital from '../Vetri Technology Solutions_files/digital.43f3a036e475d940e4c6.png';
import data from '../Vetri Technology Solutions_files/datasc.782f741a70e182faf4e1.png';
import datan from '../Vetri Technology Solutions_files/dataan.c159b4b11ac12b608967.png';
import soft from '../Vetri Technology Solutions_files/soft.d5e8a0b2509518bff869.png';
import ui from '../Vetri Technology Solutions_files/ui.70694b3dd982613bab1d.png';

const Trainings = () => {
    const navigate = useNavigate();

    const trainings = [
        { src: mern, alt: 'MERN Stack Development', id: 1 },
        { src: front, alt: 'Frontend Development', id: 2 },
        { src: python, alt: 'Python Development', id: 3 },
        { src: java, alt: 'Java Development', id: 4 },
        { src: app, alt: 'Mobile App Development', id: 5 },
        { src: aws, alt: 'AWS Development', id: 6 },
        { src: digital, alt: 'Digital Marketing', id: 7 },
        { src: data, alt: 'Data Science', id: 8 },
        { src: datan, alt: 'Data Analyst', id: 9 },
        { src: soft, alt: 'Software Testing', id: 10 },
        { src: ui, alt: 'UI/UX Design', id: 11 },
        { src: back1, alt: 'Python Backend Development', id: 12 },
        { src: back2, alt: 'Node Backend Development', id: 13 },
        { src: back3, alt: 'Java Backend Development', id: 14 },
        { src: bus, alt: 'Business Analyst', id: 15 },
    ];

    const handleViewDetails = (id) => {
        navigate(`/training-details/${id}`);
        window.scroll(0,0);
    };

    return (
        <div  data-aos="fade-down"
        className='training-whole'>
            <div  style={{ textAlign: "center" }} className='fonts-head'>
                <h1 style={{ color: "navy" }}>OUR <span style={{ color: "orange" }}>TRAININGS</span></h1>
            </div>

            <div  className="trainings-container container">
                {trainings.map((training) => (
                    <div className="training-item"  key={training.id}>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={training.src} alt={training.alt} />
                                </div>
                                <div className="flip-card-back">
                                    <h6>{training.alt}</h6>
                                    <button className="view-details" onClick={() => handleViewDetails(training.id)}>
                                        Explore More <i className="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Trainings;
