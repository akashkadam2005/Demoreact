import React from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'react-bootstrap'

const List = () => {
  return (
    <div>
      <Card className="main-card p-4 border-0">
        <CardHeader className='text-center border-0  mb-3'>
          <h3 className='fw-bold text-warning'>Event Management Services List</h3>
        </CardHeader>
        <CardBody>
          <Row>
            <Col lg={3} md={6} sm={12} className="mb-4">


              <div className="card bg-light text-dark mb-4" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
                  <img
                    className="d-block w-100 rounded"
                    src="/image/mangement2.jpg"
                    alt="Corporate Event Management"
                  />
                  {/* <img src="" className="card-img-top" alt="Event" style={{ objectFit: 'cover', width: '100%', height: '100%' }} /> */}
                  <div className="badge bg-primary text-white" style={{ position: 'absolute', top: '10px', left: '10px', padding: '5px 10px', borderRadius: '10px' }}>Upcoming</div>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">Corporate Event Management</h5>
                  {/* <p className="card-text">Brief description of the event goes here. This should be engaging and informative, giving an overview of what to expect.</p> */}
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><i className="bi bi-calendar-event"></i> Date: August 15, 2024</li>
                    <li className="list-group-item"><i className="bi bi-clock"></i> Time: 7:00 PM - 10:00 PM</li>
                    <li className="list-group-item"><i className="bi bi-geo-alt"></i> Location: 123 Event Venue, City</li>
                  </ul>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <button className="btn btn-primary" style={{ borderRadius: '8px' }}>Learn More</button>
                    <button className="btn btn-outline-secondary" style={{ borderRadius: '8px' }} >Book Now</button>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12} className="mb-4">

              <div className="card bg-light text-dark mb-4" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
                  <img

                    className="d-block w-100 rounded"
                    src="/image/management1.jpg"
                    alt="Corporate Event Management"
                  />
                  {/* <img src="" className="card-img-top" alt="Event" style={{ objectFit: 'cover', width: '100%', height: '100%' }} /> */}
                  <div className="badge bg-primary text-white" style={{ position: 'absolute', top: '10px', left: '10px', padding: '5px 10px', borderRadius: '10px' }}>Upcoming</div>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">Marriage Event Management</h5>
                  {/* <p className="card-text">Brief description of the event goes here. This should be engaging and informative, giving an overview of what to expect.</p> */}
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><i className="bi bi-calendar-event"></i> Date: August 15, 2024</li>
                    <li className="list-group-item"><i className="bi bi-clock"></i> Time: 7:00 PM - 10:00 PM</li>
                    <li className="list-group-item"><i className="bi bi-geo-alt"></i> Location: 123 Event Venue, City</li>
                  </ul>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <button className="btn btn-primary" style={{ borderRadius: '8px' }}>Learn More</button>
                    <button className="btn btn-outline-secondary" style={{ borderRadius: '8px' }}>Book Now</button>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12} className="mb-4">

              <div className="card bg-light text-dark mb-2" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
                  <img

                    className="d-block w-100 rounded"
                    src="/image/mangement2.jpg"
                    alt="Corporate Event Management"
                  />
                  {/* <img src="" className="card-img-top" alt="Event" style={{ objectFit: 'cover', width: '100%', height: '100%' }} /> */}
                  <div className="badge bg-primary text-white" style={{ position: 'absolute', top: '10px', left: '10px', padding: '5px 10px', borderRadius: '10px' }}>Upcoming</div>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">Ingegment Event Management</h5>
                  {/* <p className="card-text">Brief description of the event goes here. This should be engaging and informative, giving an overview of what to expect.</p> */}
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><i className="bi bi-calendar-event"></i> Date: August 15, 2024</li>
                    <li className="list-group-item"><i className="bi bi-clock"></i> Time: 7:00 PM - 10:00 PM</li>
                    <li className="list-group-item"><i className="bi bi-geo-alt"></i> Location: 123 Event Venue, City</li>
                  </ul>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <button className="btn btn-primary" style={{ borderRadius: '8px' }}>Learn More</button>
                    <button className="btn btn-outline-secondary" style={{ borderRadius: '8px' }}>Book Now</button>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12} className="mb-2">

              <div className="card bg-light text-dark mb-2" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
                  <img

                    className="d-block w-100 rounded"
                    src="/image/b1.webp"
                    alt="Corporate Event Management"
                  />
                  {/* <img src="" className="card-img-top" alt="Event" style={{ objectFit: 'cover', width: '100%', height: '100%' }} /> */}
                  <div className="badge bg-primary text-white" style={{ position: 'absolute', top: '10px', left: '10px', padding: '5px 10px', borderRadius: '10px' }}>Upcoming</div>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">Birthaday Event Management</h5>
                  {/* <p className="card-text">Brief description of the event goes here. This should be engaging and informative, giving an overview of what to expect.</p> */}
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><i className="bi bi-calendar-event"></i> Date: August 15, 2024</li>
                    <li className="list-group-item"><i className="bi bi-clock"></i> Time: 7:00 PM - 10:00 PM</li>
                    <li className="list-group-item"><i className="bi bi-geo-alt"></i> Location: 123 Event Venue, City</li>
                  </ul>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <button className="btn btn-primary" style={{ borderRadius: '8px' }}>Learn More</button>
                    <button className="btn btn-outline-secondary" style={{ borderRadius: '8px' }}>Book Now</button>
                  </div>
                </div>
              </div>
            </Col>




            <Col lg={3} md={6} sm={12} className="mb-2">

              <div className="card bg-light text-dark mb-2" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
                  <img

                    className="d-block w-100 rounded"
                    src="/image/b2.jpg"
                    alt="Corporate Event Management"
                  />
                  {/* <img src="" className="card-img-top" alt="Event" style={{ objectFit: 'cover', width: '100%', height: '100%' }} /> */}
                  <div className="badge bg-primary text-white" style={{ position: 'absolute', top: '10px', left: '10px', padding: '5px 10px', borderRadius: '10px' }}>Upcoming</div>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">Krismas Event Management</h5>
                  {/* <p className="card-text">Brief description of the event goes here. This should be engaging and informative, giving an overview of what to expect.</p> */}
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><i className="bi bi-calendar-event"></i> Date: August 15, 2024</li>
                    <li className="list-group-item"><i className="bi bi-clock"></i> Time: 7:00 PM - 10:00 PM</li>
                    <li className="list-group-item"><i className="bi bi-geo-alt"></i> Location: 123 Event Venue, City</li>
                  </ul>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <button className="btn btn-primary" style={{ borderRadius: '8px' }}>Learn More</button>
                    <button className="btn btn-outline-secondary" style={{ borderRadius: '8px' }}>Book Now</button>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12} className="mb-2">


              <div className="card bg-light text-dark mb-2" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
                  <img
                    height={170}
                    className="d-block w-100 rounded"
                    src="/image/Tv.jpg"
                    alt="Corporate Event Management"
                  />
                  {/* <img src="" className="card-img-top" alt="Event" style={{ objectFit: 'cover', width: '100%', height: '100%' }} /> */}
                  <div className="badge bg-primary text-white" style={{ position: 'absolute', top: '10px', left: '10px', padding: '5px 10px', borderRadius: '10px' }}>Upcoming</div>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">Tv Show Event Management</h5>
                  {/* <p className="card-text">Brief description of the event goes here. This should be engaging and informative, giving an overview of what to expect.</p> */}
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><i className="bi bi-calendar-event"></i> Date: August 15, 2024</li>
                    <li className="list-group-item"><i className="bi bi-clock"></i> Time: 7:00 PM - 10:00 PM</li>
                    <li className="list-group-item"><i className="bi bi-geo-alt"></i> Location: 123 Event Venue, City</li>
                  </ul>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <button className="btn btn-primary" style={{ borderRadius: '8px' }}>Learn More</button>
                    <button className="btn btn-outline-secondary" style={{ borderRadius: '8px' }}>Book Now</button>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={3} md={6} sm={12} className="mb-2">

              <div className="card bg-light text-dark mb-4" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
                  <img
                    height={150}
                    width={100}
                    className="d-block w-100 rounded"
                    src="/image/Ann.jpg"
                    alt="Annivarsary Event Management"
                  />
                  {/* <img src="" className="card-img-top" alt="Event" style={{ objectFit: 'cover', width: '100%', height: '100%' }} /> */}
                  <div className="badge bg-primary text-white" style={{ position: 'absolute', top: '10px', left: '10px', padding: '5px 10px', borderRadius: '10px' }}>Upcoming</div>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">Annivarsary Event Management</h5>
                  {/* <p className="card-text">Brief description of the event goes here. This should be engaging and informative, giving an overview of what to expect.</p> */}
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><i className="bi bi-calendar-event"></i> Date: August 15, 2024</li>
                    <li className="list-group-item"><i className="bi bi-clock"></i> Time: 7:00 PM - 10:00 PM</li>
                    <li className="list-group-item"><i className="bi bi-geo-alt"></i> Location: 123 Event Venue, City</li>
                  </ul>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <button className="btn btn-primary" style={{ borderRadius: '8px' }}>Learn More</button>
                    <button className="btn btn-outline-secondary" style={{ borderRadius: '8px' }}>Book Now</button>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12} className="2">
            
              <div className="card bg-light text-dark mb-4" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
                  <img
                    className="d-block w-100 rounded"
                    src="/image/mangement2.jpg"
                    alt="Corporate Event Management"
                  />
                  {/* <img src="" className="card-img-top" alt="Event" style={{ objectFit: 'cover', width: '100%', height: '100%' }} /> */}
                  <div className="badge bg-primary text-white" style={{ position: 'absolute', top: '10px', left: '10px', padding: '5px 10px', borderRadius: '10px' }}>Upcoming</div>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">Corporate Event Management</h5>
                  {/* <p className="card-text">Brief description of the event goes here. This should be engaging and informative, giving an overview of what to expect.</p> */}
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><i className="bi bi-calendar-event"></i> Date: August 15, 2024</li>
                    <li className="list-group-item"><i className="bi bi-clock"></i> Time: 7:00 PM - 10:00 PM</li>
                    <li className="list-group-item"><i className="bi bi-geo-alt"></i> Location: 123 Event Venue, City</li>
                  </ul>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <button className="btn btn-primary" style={{ borderRadius: '8px' }}>Learn More</button>
                    <button className="btn btn-outline-secondary" style={{ borderRadius: '8px' }}>Book Now</button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  )
}

export default List
