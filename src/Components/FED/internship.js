import React from 'react';
import './internship.css';
import intern from '../Images/internshipmain.aaefb29078cf2ac6bd91.jpg';
import in1 from '../Images/in1.6a0be1222089efbb8d7e.png';
import ini2 from '../Images/in2.38cdd2b7fc456de483e6.png';
import ini3 from '../Images/in3.90814f5cc478273e20bb.png';
import ini4 from '../Images/in4.1674151afd6c4b7418ec.png';
import ini5 from '../Images/ve1.ce8460668d56b9f9a30f.png';
import ini6 from '../Images/in5.4544ca423f8d4194492d.png';


const Internship = () => {
    return (
        <div data-aos="fade-down" className="internship-container">
            <h1 className="internship-title">INTERNSHIP</h1>
            <div className="internship-intro">
                {/* <h5>Internship With VTS</h5> */}
                <p className="internship-description">
                    An intern is a trainee who has signed on with an organization for
                    a brief period. An intern’s goal is to gain work experience,
                    occasionally some university credit, and always an overall
                    feel for the industry they’re interning in.
                </p>
                <img src={intern} alt="Internship main" className="internship-image" />
            </div>

            <div className="internship-tasks">
                <h2 className="tasks-title">Key Responsibilities</h2>
                <div className="tasks-list">
                    <div className="task-item">
                        <img src={in1} alt="Task 1" className="task-image" />
                        <h6>Fulfilling tasks assigned by a supervisor.</h6>
                    </div>
                    <div className="task-item">
                        <img src={ini2} alt="Task 2" className="task-image" />
                        <h6>Performing clerical duties.</h6>
                    </div>
                    <div className="task-item">
                        <img src={ini3} alt="Task 3" className="task-image" />
                        <h6>Managing social media accounts.</h6>
                    </div>
                    <div className="task-item">
                        <img src={ini4} alt="Task 4" className="task-image" />
                        <h6>Event handling or planning.</h6>
                    </div>
                    <div className="task-item">
                        <img src={ini6} alt="Task 5" className="task-image" />
                        <h6>Job shadowing.</h6>
                    </div>
                    <div className="task-item">
                        <img src={ini5} alt="Task 6" className="task-image" />
                        <h6>Learning technical skills related to the industry.</h6>
                    </div>
                </div>
                <p className="internship-conclusion">
                    In VTS once the 6 months training is completed, the student will move to the Intern level for a period of 3 months. Based on the internship performance, the roles will be defined.
                </p>
            </div>
        </div>
    );
};

export default Internship;
