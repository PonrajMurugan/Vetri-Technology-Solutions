import React from 'react';
import './others.css';
import job from '../Vetri Technology Solutions_files/placement.841bc569c4d462ef2f82.png';
import job1 from '../Vetri Technology Solutions_files/training.a392356fda698578fdd4.png';
import job2 from '../Vetri Technology Solutions_files/one to.760fbeb9109a96b66e18.png';
import job3 from '../Vetri Technology Solutions_files/flexible_timing.dd2cb17e748fc19f34cc.png';
import job4 from '../Vetri Technology Solutions_files/emi options.1edccd1dc66f1c3d4089.jpg';
import job5 from '../Vetri Technology Solutions_files/work_from_home.2c0073bce492379c6560.png';
import job6 from '../Vetri Technology Solutions_files/of.8fa4d324accede68a79e.png';
import job7 from '../Vetri Technology Solutions_files/certification_approval.574c8de330ff79802a87.png';


const Others = () => {
    return (
        <div className='others-container container' id='raj'>
            <div className='others-heading'>
                <h1  data-aos="fade-right">How <span style={{color:"orange"}}>VTS </span> Is Different From <span  style={{color:"orange"}}>Others ???</span> </h1>
            </div>

            <div data-aos="fade-right" className='others-grid'>
                <div className='others-item'>
                    <img src={job} alt='Logo' />
                    <p>100% Guaranteed <br></br> Placement</p>
                </div>

                <div className='others-item'>
                    <img src={job1} alt='Logo' />
                    <p>Industry Expert <br></br> Trainers</p>
                </div>

                <div className='others-item'>
                    <img src={job2} alt='Logo' />
                    <p>1 - 1 Expert <br></br> Mentorship</p>
                </div>

                <div className='others-item'>
                    <img src={job3} alt='Logo' />
                    <p>Flexible Batch <br></br> Timings</p>
                </div>

                <div className='others-item'>
                    <img src={job4} alt='Logo' />
                    <p>EMI Options <br></br> Available</p>
                </div>

                <div className='others-item'>
                    <img src={job5} alt='Logo' />
                    <p>Online Training with Work <br></br> From Home Opportunity</p>
                </div>

                <div className='others-item'>
                    <img src={job6} alt='Logo' />
                    <p>Work in Live <br></br> Projects</p>
                </div>

                <div className='others-item'>
                    <img src={job7} alt='Logo' />
                    <p>Certification Approval <br></br> Guaranteed</p>
                </div>
            </div>
        </div>
    );
};

export default Others;
