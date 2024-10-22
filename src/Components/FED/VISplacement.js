import React from 'react';
import './visPlacement.css';
import map from '../Images/map.2769f970dbe9ed41889a.gif';


const VisPlacement = () => {
    return (
        <div data-aos="fade-down">

            <div>
                <h1 className='place'>VIS Placements</h1>
            </div>

            <div className="map-container" style={{textAlign:"center", marginTop:"55px", marginBottom: "55px",}}>
                <img className="map-image" src={map} alt="Map" />
            </div>
            
        </div>
    );
};

export default VisPlacement;