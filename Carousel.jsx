import React from 'react'


const Carousel = () => {
  return (
    <div>
    
<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/carsole1.webp" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="/casole2.webp" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

      
    </div>
  )
}

export default Carousel
