import React from 'react';
import './placements.css';
import hydro from '../Images/hydro.f4a794c31f25abc59948.png';
import build from '../Images/build.c13235297302973b6027.png';
import pet from '../Images/petstore.da64f37fb6889e097eb0.png';
import sweet from '../Images/pro2.5cecebfab61947612b20.jpg';
import map from '../Images/map.2769f970dbe9ed41889a.gif';

const Placements = () => {
    return (
        <div  data-aos="fade-up" className="placements-container">
            <div className="headerss">
                <h1>Work on real projects and <span style={{color:"orange"}}> build a solid practical understanding.</span></h1>
            </div>

            <div className="projects-gallery container">
                <div className="project-card">
                    <img className="project-image" src={hydro} alt="HydroTork Website" />
                    <h5>HydroTork Website - Fullstack</h5>
                    <p>Showcased hydro products with a responsive site. Implemented direct enquiry feature. Integrated secure backend for data. Ensured intuitive design and navigation. Enhanced engagement with product visuals.</p>
                </div>

                <div className="project-card">
                    <img className="project-image" src={build} alt="Builders Website" />
                    <h5>Builders Website - MERN</h5>
                    <p>Developed a comprehensive builders website with MERN. Facilitated product browsing and purchasing. Implemented secure authentication and data management. Created an interactive React frontend. Managed data with MongoDB.</p>
                </div>

                <div className="project-card">
                    <img className="project-image" src={pet} alt="Pet Shop Website" />
                    <h5>Pet Shop Website - Fullstack</h5>
                    <p>Developed a full-stack pet shop platform with MERN. Facilitated product browsing and purchasing. Implemented secure authentication and data management. Created an interactive frontend with React. Managed data with MongoDB.</p>
                </div>

                <div className="project-card">
                    <img className="project-image" src={sweet} alt="Sweet Shop Website" />
                    <h5>Sweet Shop Website - Frontend</h5>
                    <p>Developed a sweet shop website using Python. Enabled product browsing and ordering. Integrated secure user authentication. Designed an engaging interface. Used Python for backend and data management.</p>
                </div>
            </div>

            {/* <div className="map-container">
                <img className="map-image" src={map} alt="Map" />
            </div> */}
        </div>
    );
};

export default Placements;
