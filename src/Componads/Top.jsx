import React from 'react'

const Top = () => {
  return (
    <>
         
{/* <div className="container-fluid px-5 d-none d-lg-block ">
  <div className="row ">
    <div className="col-lg-4 text-center py-3">
      <div className="d-inline-flex align-items-center">
        <i className="bi bi-geo-alt fs-1 text-primary me-3" />
        <div className="text-start">
          <h6 className="text-uppercase fw-bold">Our Office</h6>
          <span>Baramati, Pune</span>
        </div>
      </div>
    </div>
    <div className="col-lg-4 text-center border-start border-end py-3">
      <div className="d-inline-flex align-items-center">
        <i className="bi bi-envelope-open fs-1 text-primary me-3" />
        <div className="text-start">
          <h6 className="text-uppercase fw-bold">Email Us</h6>
          <span>priyanshuenterprises@outlook.com</span>
        </div>
      </div>
    </div>
    <div className="col-lg-4 text-center py-3">
      <div className="d-inline-flex align-items-center">
        <i className="bi bi-phone-vibrate fs-1 text-primary me-3" />
        <div className="text-start">
          <h6 className="text-uppercase fw-bold">Call Us</h6>
          <span>+91 8625072647 / +91 9823222043</span>
        </div>
      </div>
    </div>
  </div>
</div> */}



   {/* Topbar Start */}
   <div className="container-fluid bg-dark px-5 d-none sticky-top d-lg-block">
  <div className="row gx-0">
    <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
      <div className="d-inline-flex align-items-center" style={{height: 45}}>
       
        <small className="me-3 text-light"><i className="fa fa-phone-alt me-2" />+91 8625072647 / +91 9823222043</small>
        <small className="me-5 text-light"><i className="fa fa-map-marker-alt me-2" />Baramati, Pune</small>
        <small className="text-light"><i className="fa fa-envelope-open me-2" />priyanshuenterprises@outlook.com</small>
      
       
      </div>
    </div>
    <div className="col-lg-4 text-center text-lg-end">
      <div className="d-inline-flex align-items-center" style={{height: 45}}>
        <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-twitter fw-normal" /></a>
        <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-facebook-f fw-normal" /></a>
        <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-linkedin-in fw-normal" /></a>
        <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-instagram fw-normal" /></a>
        <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href><i className="fab fa-youtube fw-normal" /></a>
      </div>
    </div>
  </div>
</div>
{/* Topbar End */}

    </>
  )
}

export default Top
