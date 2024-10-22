import React, { useEffect, useRef } from 'react';
import './carousel.css';

import carousel1 from '../Vetri Technology Solutions_files/wc1.914703a1104feac1d806.gif';
import carousel2 from '../Vetri Technology Solutions_files/wc2.07dcf2aa7bc2b5868948.gif';
import carousel3 from '../Vetri Technology Solutions_files/wc3.40874dc5a5a41b478ce0.gif';
import carousel4 from '../Vetri Technology Solutions_files/wc4.18f6cf1bf224478b00b6.gif';
import carousel5 from '../Vetri Technology Solutions_files/wc5.d8d103fc651e9ea8ab2e.gif';
import carousel6 from '../Vetri Technology Solutions_files/wc6.8c4d232a08fa9e55604b.gif';

const images = [carousel1, carousel2, carousel3, carousel4, carousel5, carousel6];

const Carousel = () => {
    const carouselRef = useRef(null);

    useEffect(() => {
        const scrollCarousel = () => {
            if (carouselRef.current) {
                const scrollAmount = 1; 
                carouselRef.current.scrollLeft += scrollAmount;
            }
        };

        const interval = setInterval(scrollCarousel, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <div  data-aos="fade-down" className="carousels">
            <div className="carousel-images" ref={carouselRef}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`carousel ${index + 1}`}
                        className="carousel-image"
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
