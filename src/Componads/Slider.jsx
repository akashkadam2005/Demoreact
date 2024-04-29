// import React, { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import bootstrap from 'bootstrap';


const Slider = () => {


  return (
    <div>
      {/* Carousel Start */}
      <div className="container-fluid p-0">
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="https://mahaeseva.in/wp-content/uploads/2024/01/web-banner-1-2.jpg" alt="web-banner-1" />
              <div className="d-flex flex-column align-items-center justify-content-center">
                {/* Content for the first slide */}
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://mahaeseva.in/wp-content/uploads/2024/01/web-banner-5.jpg" alt="web-banner-5" />
              <div className="d-flex flex-column align-items-center justify-content-center">
                {/* Content for the second slide */}
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* Carousel End */}
    </div>
  );
};

export default Slider;
