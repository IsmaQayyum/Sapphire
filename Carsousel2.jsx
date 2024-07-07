import React from 'react'

const Carsousel2 = () => {
  return (
    <div>
<div id="carouselExampleFade" className="carousel slide1 carousel-fade ">
  <div className="carousel-inner color">
    <div className="carousel-item active ws">
    <div className="row">
      <div className="col-lg-3">  <img src="/crd1.webp" className="wb" alt="..." /> </div>
      <div className="col-lg-3">  <img src="/crd2.webp"className="wb" alt="..." /></div>
      <div className="col-lg-3"><img src="/crd3.webp" className="wb"alt="..." /></div>
      <div className="col-lg-3"><img src="/crd4.webp" className="wb" alt="..." /></div>
    </div>
    </div>
    <div className="carousel-item">
    <div className="row">
      <div className="col-lg-3">  <img src="/crd5.webp" className="wb" alt="..."  /> </div>
      <div className="col-lg-3">  <img src="/crd6.webp"className="wb" alt="..." /></div>
      <div className="col-lg-3"><img src="/crd7.webp" className="wb"alt="..." /></div>
      <div className="col-lg-3"><img src="/crd8.webp" className="wb" alt="..." /></div>
    </div>
    </div>
 
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}

export default Carsousel2
