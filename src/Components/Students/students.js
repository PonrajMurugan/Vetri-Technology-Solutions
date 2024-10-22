import React, { useEffect, useState } from 'react';
import './students.css';
import car1 from '../Vetri Technology Solutions_files/Study abroad.b93c6e71cc662cbea003.gif';
import car2 from '../Vetri Technology Solutions_files/trainers.ac3d05141bc7639aaf32.gif';
import car3 from '../Vetri Technology Solutions_files/rating.8bf4be0717a1b1b14f28.gif';
import car4 from '../Vetri Technology Solutions_files/placement.21dcb253c0b644623b0c.gif';

const Students = () => {
    const images = [
        { src: car1, text: '200+', texts: "STUDENTS" },
        { src: car2, text: '20+', texts: "INDUSTRY EXPERT TRAINERS" },
        { src: car3, text: '100%', texts: "SATISFACTION RATE" },
        { src: car4, text: '10+', texts: "PLACEMENT COORDINATORS" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div data-aos="fade-up"
        data-aos-anchor-placement="center-center" className="student-carousel-container container">
            <div className="student-carousel">
                <div className="carousel-wrapper">
                    <div
                        className="student-item-container"
                        style={{ transform: `translateX(-${(currentIndex * 25)}%)` }} 
                    >
                        {images.concat(images).map((image, index) => ( 
                            <div className="student-item" key={index}>
                                <img src={image.src} alt={`carousel-img-${index}`} />
                                <h6 style={{color:"navy"}}>{image.text}</h6>
                                <h6 style={{color:"orange"}}>{image.texts}</h6>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Students;
