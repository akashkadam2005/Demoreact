import React from 'react'

const Card = () => {
  return (
    <>
<div className="container-fluid bg-light py-4 ">
  <div className="text-center mx-auto mb-5" >
    <h1 className="display-5 text-uppercase mb-4">Our Services</h1>
  </div> 

      <div className="row gx-3">
  <div className="col-12 text-center">
    <div className="d-inline-block bg-dark-radial text-center pt-4 px-5 mb-5">
      <ul className="list-inline mb-0" id="portfolio-flters">

      <li className="btn  bg-white p-2 mx-2 mb-4" >
      <img decoding="async" width="150" height="100"  src="https://mahaeseva.in/wp-content/uploads/2024/01/ration-card-1.jpg" class="elementor-animation-grow attachment-full size-full wp-image-128" alt="" srcset="https://mahaeseva.in/wp-content/uploads/2024/01/ration-card-1.jpg 283w, https://mahaeseva.in/wp-content/uploads/2024/01/ration-card-1-150x150.jpg 150w" />
        <p>शिधा पत्रिक<br/>(Ration Card)</p>
          <div className="position-absolute top-0 start-0 end-0 bottom-0 m-2 d-flex align-items-center justify-content-center" style={{background: 'rgba(4, 15, 40, .3)'}}>
            {/* <h6 className="text-white text-uppercase m-0">Construction</h6> */}
          </div>
        </li>

        <li className="btn  bg-white p-2 mx-2 mb-4" data-filter=".first">
        <img loading="lazy" decoding="async" width="150" height="100" src="https://mahaeseva.in/wp-content/uploads/2024/01/RTE-Admission.jpg" class="elementor-animation-grow attachment-full size-full wp-image-129" alt="" srcset="https://mahaeseva.in/wp-content/uploads/2024/01/RTE-Admission.jpg 283w, https://mahaeseva.in/wp-content/uploads/2024/01/RTE-Admission-150x150.jpg 150w" />
         <p>आरटीई<br/>(RTE Admission)</p>
          <div className="position-absolute top-0 start-0 end-0 bottom-0 m-2 d-flex align-items-center justify-content-center" style={{background: 'rgba(4, 15, 40, .3)'}}>
            {/* <h6 className="text-white text-uppercase m-0">Construction</h6> */}
          </div>
        </li>
        <li className="btn btn-outline-primary bg-white p-2 mx-2 mb-4" data-filter=".second">
        <img loading="lazy" decoding="async" width="150" height="100" src="https://mahaeseva.in/wp-content/uploads/2024/01/Rent-Agreement.jpg" class="elementor-animation-grow attachment-full size-full wp-image-126" alt="" srcset="https://mahaeseva.in/wp-content/uploads/2024/01/Rent-Agreement.jpg 283w, https://mahaeseva.in/wp-content/uploads/2024/01/Rent-Agreement-150x150.jpg 150w "/>
        <p>पोलिस क्लिअरन्स <br/> सर्टिफिकेट</p> 
          <div className="position-absolute top-0 start-0 end-0 bottom-0 m-2 d-flex align-items-center justify-content-center" style={{background: 'rgba(4, 15, 40, .3)'}}>
            {/* <h6 className="text-white text-uppercase m-0">Renovation</h6> */}
          </div>
        </li>

        <li className="btn btn-outline-primary bg-white p-2 mx-2 mb-4" data-filter=".second">
        <img loading="lazy" decoding="async" width="150" height="100" src="https://mahaeseva.in/wp-content/uploads/2024/01/police-clearance-1.jpg" class="elementor-animation-grow attachment-full size-full wp-image-127" alt="" srcset="https://mahaeseva.in/wp-content/uploads/2024/01/police-clearance-1.jpg 283w, https://mahaeseva.in/wp-content/uploads/2024/01/police-clearance-1-150x150.jpg 150w" />
        <p>रजिस्टर भाडे <br/> करा</p>
          <div className="position-absolute top-0 start-0 end-0 bottom-0 m-2 d-flex align-items-center justify-content-center" style={{background: 'rgba(4, 15, 40, .3)'}}>
            {/* <h6 className="text-white text-uppercase m-0">Renovation</h6> */}
          </div>
        </li>





        <li className="btn btn-outline-primary bg-white p-2 mx-2 mb-4" data-filter=".second">
        <img loading="lazy" decoding="async" width="150" height="100" src="https://mahaeseva.in/wp-content/uploads/2024/01/income-certificate.jpg" class="elementor-animation-grow attachment-full size-full wp-image-123" alt="" srcset="https://mahaeseva.in/wp-content/uploads/2024/01/income-certificate.jpg 283w, https://mahaeseva.in/wp-content/uploads/2024/01/income-certificate-150x150.jpg 150w"/>
        <p>उत्पन्नाचा <br/>दाखला</p>
          <div className="position-absolute top-0 start-0 end-0 bottom-0 m-2 d-flex align-items-center justify-content-center" style={{background: 'rgba(4, 15, 40, .3)'}}>
            {/* <h6 className="text-white text-uppercase m-0">Renovation</h6> */}
          </div>
        </li>

        <li className="btn btn-outline-primary bg-white p-2 mx-2 mb-4" data-filter=".second">
        <img loading="lazy" decoding="async" width="150" height="100" src="https://mahaeseva.in/wp-content/uploads/2024/01/food-license.jpg" class="elementor-animation-grow attachment-full size-full wp-image-124" alt="" srcset="https://mahaeseva.in/wp-content/uploads/2024/01/food-license.jpg 283w, https://mahaeseva.in/wp-content/uploads/2024/01/food-license-150x150.jpg 150w"/>
        <p>अन्न <br/> परवाना </p>  
          <div className="position-absolute top-0 start-0 end-0 bottom-0 m-2 d-flex align-items-center justify-content-center" style={{background: 'rgba(4, 15, 40, .3)'}}>
            {/* <h6 className="text-white text-uppercase m-0">Renovation</h6> */}
          </div>
        </li>

      </ul>




      <ul className="list-inline mb-0" id="portfolio-flters">

<li className="btn  bg-white p-2 mx-2 mb-4" data-filter=".first">
<img decoding="async" width="150" height="100"  src="https://mahaeseva.in/wp-content/uploads/2024/01/ration-card-1.jpg" class="elementor-animation-grow attachment-full size-full wp-image-128" alt="" srcset="https://mahaeseva.in/wp-content/uploads/2024/01/ration-card-1.jpg 283w, https://mahaeseva.in/wp-content/uploads/2024/01/ration-card-1-150x150.jpg 150w" />
  <p>शिधा पत्रिक<br/>(Ration Card)</p>
    <div className="position-absolute top-0 start-0 end-0 bottom-0 m-2 d-flex align-items-center justify-content-center" style={{background: 'rgba(4, 15, 40, .3)'}}>
      {/* <h6 className="text-white text-uppercase m-0">Construction</h6> */}
    </div>
  </li>

  <li className="btn  bg-white p-2 mx-2 mb-4" data-filter=".first">
  <img loading="lazy" decoding="async" width="150" height="100" src="https://mahaeseva.in/wp-content/uploads/2024/01/RTE-Admission.jpg" class="elementor-animation-grow attachment-full size-full wp-image-129" alt="" srcset="https://mahaeseva.in/wp-content/uploads/2024/01/RTE-Admission.jpg 283w, https://mahaeseva.in/wp-content/uploads/2024/01/RTE-Admission-150x150.jpg 150w" />
   <p>आरटीई<br/>(RTE Admission)</p>
    <div className="position-absolute top-0 start-0 end-0 bottom-0 m-2 d-flex align-items-center justify-content-center" style={{background: 'rgba(4, 15, 40, .3)'}}>
      {/* <h6 className="text-white text-uppercase m-0">Construction</h6> */}
    </div>
  </li>
  <li className="btn btn-outline-primary bg-white p-2 mx-2 mb-4" data-filter=".second">
  <img loading="lazy" decoding="async" width="150" height="100" src="https://mahaeseva.in/wp-content/uploads/2024/01/Rent-Agreement.jpg" class="elementor-animation-grow attachment-full size-full wp-image-126" alt="" srcset="https://mahaeseva.in/wp-content/uploads/2024/01/Rent-Agreement.jpg 283w, https://mahaeseva.in/wp-content/uploads/2024/01/Rent-Agreement-150x150.jpg 150w "/>
  <p>पोलिस क्लिअरन्स <br/> सर्टिफिकेट</p> 
    <div className="position-absolute top-0 start-0 end-0 bottom-0 m-2 d-flex align-items-center justify-content-center" style={{background: 'rgba(4, 15, 40, .3)'}}>
      {/* <h6 className="text-white text-uppercase m-0">Renovation</h6> */}
    </div>
  </li>

  <li className="btn btn-outline-primary bg-white p-2 mx-2 mb-4" data-filter=".second">
  <img loading="lazy" decoding="async" width="150" height="100" src="https://mahaeseva.in/wp-content/uploads/2024/01/police-clearance-1.jpg" class="elementor-animation-grow attachment-full size-full wp-image-127" alt="" srcset="https://mahaeseva.in/wp-content/uploads/2024/01/police-clearance-1.jpg 283w, https://mahaeseva.in/wp-content/uploads/2024/01/police-clearance-1-150x150.jpg 150w" />
  <p>रजिस्टर भाडे <br/> करा</p>
    <div className="position-absolute top-0 start-0 end-0 bottom-0 m-2 d-flex align-items-center justify-content-center" style={{background: 'rgba(4, 15, 40, .3)'}}>
      {/* <h6 className="text-white text-uppercase m-0">Renovation</h6> */}
    </div>
  </li>





  <li className="btn btn-outline-primary bg-white p-2 mx-2 mb-4" data-filter=".second">
  <img loading="lazy" decoding="async" width="150" height="100" src="https://mahaeseva.in/wp-content/uploads/2024/01/income-certificate.jpg" class="elementor-animation-grow attachment-full size-full wp-image-123" alt="" srcset="https://mahaeseva.in/wp-content/uploads/2024/01/income-certificate.jpg 283w, https://mahaeseva.in/wp-content/uploads/2024/01/income-certificate-150x150.jpg 150w"/>
  <p>उत्पन्नाचा <br/>दाखला</p>
    <div className="position-absolute top-0 start-0 end-0 bottom-0 m-2 d-flex align-items-center justify-content-center" style={{background: 'rgba(4, 15, 40, .3)'}}>
      {/* <h6 className="text-white text-uppercase m-0">Renovation</h6> */}
    </div>
  </li>

  <li className="btn btn-outline-primary bg-white p-2 mx-2 mb-4" data-filter=".second">
  <img loading="lazy" decoding="async" width="150" height="100" src="https://mahaeseva.in/wp-content/uploads/2024/01/food-license.jpg" class="elementor-animation-grow attachment-full size-full wp-image-124" alt="" srcset="https://mahaeseva.in/wp-content/uploads/2024/01/food-license.jpg 283w, https://mahaeseva.in/wp-content/uploads/2024/01/food-license-150x150.jpg 150w"/>
  <p>अन्न <br/> परवाना </p> 
    <div className="position-absolute top-0 start-0 end-0 bottom-0 m-2 d-flex align-items-center justify-content-center" style={{background: 'rgba(4, 15, 40, .3)'}}>
      {/* <h6 className="text-white text-uppercase m-0">Renovation</h6> */}
    </div>
  </li>

</ul>



<ul className="list-inline mb-0" id="portfolio-flters">

<li className="btn  bg-white p-2 mx-2 mb-4" data-filter=".first">
<img decoding="async" width="150" height="100"  src="https://mahaeseva.in/wp-content/uploads/2024/01/ration-card-1.jpg" class="elementor-animation-grow attachment-full size-full wp-image-128" alt="" srcset="https://mahaeseva.in/wp-content/uploads/2024/01/ration-card-1.jpg 283w, https://mahaeseva.in/wp-content/uploads/2024/01/ration-card-1-150x150.jpg 150w" />
  <p>शिधा पत्रिक<br/>(Ration Card)</p>
    <div className="position-absolute top-0 start-0 end-0 bottom-0 m-2 d-flex align-items-center justify-content-center" style={{background: 'rgba(4, 15, 40, .3)'}}>
      {/* <h6 className="text-white text-uppercase m-0">Construction</h6> */}
    </div>
  </li>

  <li className="btn  bg-white p-2 mx-2 mb-4" data-filter=".first">
  <img loading="lazy" decoding="async" width="150" height="100" src="https://mahaeseva.in/wp-content/uploads/2024/01/RTE-Admission.jpg" class="elementor-animation-grow attachment-full size-full wp-image-129" alt="" srcset="https://mahaeseva.in/wp-content/uploads/2024/01/RTE-Admission.jpg 283w, https://mahaeseva.in/wp-content/uploads/2024/01/RTE-Admission-150x150.jpg 150w" />
   <p>आरटीई<br/>(RTE Admission)</p>
    <div className="position-absolute top-0 start-0 end-0 bottom-0 m-2 d-flex align-items-center justify-content-center" style={{background: 'rgba(4, 15, 40, .3)'}}>
      {/* <h6 className="text-white text-uppercase m-0">Construction</h6> */}
    </div>
  </li>
  <li className="btn btn-outline-primary bg-white p-2 mx-2 mb-4" data-filter=".second">
  <img loading="lazy" decoding="async" width="150" height="100" src="https://mahaeseva.in/wp-content/uploads/2024/01/Rent-Agreement.jpg" class="elementor-animation-grow attachment-full size-full wp-image-126" alt="" srcset="https://mahaeseva.in/wp-content/uploads/2024/01/Rent-Agreement.jpg 283w, https://mahaeseva.in/wp-content/uploads/2024/01/Rent-Agreement-150x150.jpg 150w "/>
  <p>पोलिस क्लिअरन्स <br/> सर्टिफिकेट</p> 
    <div className="position-absolute top-0 start-0 end-0 bottom-0 m-2 d-flex align-items-center justify-content-center" style={{background: 'rgba(4, 15, 40, .3)'}}>
      {/* <h6 className="text-white text-uppercase m-0">Renovation</h6> */}
    </div>
  </li>

  <li className="btn btn-outline-primary bg-white p-2 mx-2 mb-4" data-filter=".second">
  <img loading="lazy" decoding="async" width="150" height="100" src="https://mahaeseva.in/wp-content/uploads/2024/01/police-clearance-1.jpg" class="elementor-animation-grow attachment-full size-full wp-image-127" alt="" srcset="https://mahaeseva.in/wp-content/uploads/2024/01/police-clearance-1.jpg 283w, https://mahaeseva.in/wp-content/uploads/2024/01/police-clearance-1-150x150.jpg 150w" />
  <p>रजिस्टर भाडे <br/> करा</p>
    <div className="position-absolute top-0 start-0 end-0 bottom-0 m-2 d-flex align-items-center justify-content-center" style={{background: 'rgba(4, 15, 40, .3)'}}>
      {/* <h6 className="text-white text-uppercase m-0">Renovation</h6> */}
    </div>
  </li>





  <li className="btn btn-outline-primary bg-white p-2 mx-2 mb-4" data-filter=".second">
  <img loading="lazy" decoding="async" width="150" height="100" src="https://mahaeseva.in/wp-content/uploads/2024/01/income-certificate.jpg" class="elementor-animation-grow attachment-full size-full wp-image-123" alt="" srcset="https://mahaeseva.in/wp-content/uploads/2024/01/income-certificate.jpg 283w, https://mahaeseva.in/wp-content/uploads/2024/01/income-certificate-150x150.jpg 150w"/>
  <p>उत्पन्नाचा <br/>दाखला</p>
    <div className="position-absolute top-0 start-0 end-0 bottom-0 m-2 d-flex align-items-center justify-content-center" style={{background: 'rgba(4, 15, 40, .3)'}}>
      {/* <h6 className="text-white text-uppercase m-0">Renovation</h6> */}
    </div>
  </li>

  <li className="btn btn-outline-primary bg-white p-2 mx-2 mb-4" data-filter=".second">
  <img loading="lazy" decoding="async" width="150" height="100" src="https://mahaeseva.in/wp-content/uploads/2024/01/food-license.jpg" class="elementor-animation-grow attachment-full size-full wp-image-124" alt="" srcset="https://mahaeseva.in/wp-content/uploads/2024/01/food-license.jpg 283w, https://mahaeseva.in/wp-content/uploads/2024/01/food-license-150x150.jpg 150w"/>
  <p>अन्न <br/> परवाना </p> 
    <div className="position-absolute top-0 start-0 end-0 bottom-0 m-2 d-flex align-items-center justify-content-center" style={{background: 'rgba(4, 15, 40, .3)'}}>
      {/* <h6 className="text-white text-uppercase m-0">Renovation</h6> */}
    </div>
  </li>

</ul>



    </div>
  </div>
</div>
</div>

    </>
  )
}

export default Card
