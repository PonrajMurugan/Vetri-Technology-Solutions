import React from 'react';
import './banner.css';
import ban1 from '../Vetri Technology Solutions_files/fb2.7d97f59b138cd164461c.jpg';
import ban2 from '../Vetri Technology Solutions_files/fb3.a18f5a79362ec53938cb.jpg';
import ban3 from '../Vetri Technology Solutions_files/VTS BANNER.178f574ba63b34e6477b.png';

const Banner = () => {
    return (
        <div  data-aos="fade-up" className='banner-whole'>

<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active ban-img">
      <img className='ban-img' src={ban1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item ban-img">
      <img className='ban-img' src={ban2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item ban-img">
      <img className='ban-img' src={ban3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            
        </div>
    );
};

export default Banner;