
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardHeader, Carousel, Col, Row } from 'react-bootstrap';
// import { Fa42Group } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Ticket from '../Pages/Ticket';
const Index = () => {
    // const navigate = useNavigate();
    const cardStyle = {
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
    };

    const cardHeaderStyle = {
        backgroundColor: '#17a2b8',
        color: 'white',
        fontWeight: 'bold',
    };

    const cardBodyStyle = {
        backgroundColor: '#ffc107',
        textAlign: 'center',
    };

    const buttonStyle = {
        borderRadius: '4px',
        padding: '10px 20px',
        textDecoration: 'none',
    };

    const primaryButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
    };

    const secondaryButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#6c757d',
        color: 'white',
        border: 'none',
    };

    const profileHeaderStyle = {
        backgroundColor: '#f8f9fa',
        padding: '20px',
        textAlign: 'center',
    };
    const [data, setData] = useState({
        image: null,
        time: '',
        date: '',
        event: '',
        location: ''
    });

    const [submittedData, setSubmittedData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Ensure all fields, including image, are not null or empty
        if (!data.image || !data.time || !data.date || !data.event || !data.location) {
            alert('Please fill in all fields, including uploading an image.');
            return;
        }

        setSubmittedData([...submittedData, data]);

        console.log(data);

        // Optionally, clear the form after submission
        setData({
            image: null,
            time: '',
            date: '',
            event: '',
            location: ''
        });
    };

    return (
        <div>

            <Carousel>
                <Carousel.Item>
                    <img
                        height={600}
                        width={1200}
                        className="d-block w-100"
                        src="/image/m1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First Music Festival Event</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height={600}
                        width={1200}
                        className="d-block w-100"
                        src="/image/mangement2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height={600}
                        width={1200}
                        className="d-block w-100"
                        src="/image/Ann.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        {/* <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>



            {/* <Container fluid > */}
            <Card className="main-card p-5 border-0">
                <CardHeader className='text-center border-0 mt-2 mb-3'>
                    <h3 className='fw-bold text-warning'>Event Management Services</h3>
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
                                        <button className="btn btn-outline-warning" style={{ borderRadius: '8px' }}>Learn More</button>
                                        {/* <button className="btn btn-outline-warning" style={{ borderRadius: '8px' }} >Book Now</button> */}
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
                                        <button className="btn btn-outline-warning" style={{ borderRadius: '8px' }}>Learn More</button>
                                        {/* <button className="btn btn-outline-warning" style={{ borderRadius: '8px' }}>Book Now</button> */}
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
                                        <button className="btn btn-outline-warning" style={{ borderRadius: '8px' }}>Learn More</button>
                                        {/* <button className="btn btn-outline-warning" style={{ borderRadius: '8px' }}>Book Now</button> */}
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
                                        <button className="btn btn-outline-warning" style={{ borderRadius: '8px' }}>Learn More</button>
                                        {/* <button className="btn btn-outline-warning" style={{ borderRadius: '8px' }}>Book Now</button> */}
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
                                        <button className="btn btn-outline-warning" style={{ borderRadius: '8px' }}>Learn More</button>
                                        {/* <button className="btn btn-outline-warning" style={{ borderRadius: '8px' }}>Book Now</button> */}
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
                                        <button className="btn btn-outline-warning" style={{ borderRadius: '8px' }}>Learn More</button>
                                        {/* <button className="btn btn-outline-warning" style={{ borderRadius: '8px' }}>Book Now</button> */}
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
                                        <button className="btn btn-outline-warning" style={{ borderRadius: '8px' }}>Learn More</button>
                                        {/* <button className="btn btn-outline-warning" style={{ borderRadius: '8px' }}>Book Now</button> */}
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
                                    <div className="d-flex justify-content-between align-items-end mt-4">
                                        <button className="btn btn-outline-warning" style={{ borderRadius: '8px' }}>Learn More</button>
                                        {/* <button className="btn btn-outline-warning" style={{ borderRadius: '8px' }}>Book Now</button> */}
                                    </div>
                                </div>
                            </div>
                        </Col>
                        {/* <div className="submitted-data-list"> */}

                        {/* </div> */}

                    </Row>
                </CardBody>
            </Card>


            {/* Event Detais */}
            <Card className="main-card  border-0">
                <CardHeader className='text-center border-0 mt-2 mb-3'>
                    <h3 className='fw-bold text-info'>Event Management Details</h3>
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col lg={4} md={6} sm={12} className="mb-4">
                            <Card className='rounded card-hover'>

                                <CardBody>

                                    <h4 className='text-center'>Corporate Event Management</h4>
                                    <p>A wedding can be a simple civil ceremony at City Hall or an
                                        elaborate event that takes place over several days and involves
                                        religious rituals, food and drink, and hundreds of guests.
                                        As an adjective, wedding describes anything related to
                                        the ceremony.
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="mb-4">
                            <Card className='rounded card-hover'>

                                <CardBody>
                                    <h4 className='text-center'>Marriage Event Management</h4>
                                    <p>A wedding can be a simple civil ceremony at City Hall or an
                                        elaborate event that takes place over several days and involves
                                        religious rituals, food and drink, and hundreds of guests.
                                        As an adjective, wedding anything related , like wedding cakes and wedding dresses.
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="mb-4">
                            <Card className='rounded card-hover'>

                                <CardBody>
                                    <h4 className='text-center'>Ingegment Event Management</h4>
                                    <p>An engagement party is a celebration of the proposal, and the first event
                                        to kick off your festivities leading up to the wedding day. It comes before the
                                        bridal shower, bachelorette,
                                        a smaller guest list than you are planning to invite to the wedding.
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="mb-4">
                            <Card className='rounded card-hover'>

                                <CardBody>
                                    <h4 className='text-center'>Birthaday Event Management</h4>
                                    <p>“Wishing you a day filled with happiness and a year filled with joy.
                                        Happy birthday!” “Sending you smiles for every moment of your special day…Have
                                        a wonderful time and a very happy birthday!”
                                        “Hope your special day brings you all that your heart desires!
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="mb-4">
                            <Card className='rounded card-hover'>

                                <CardBody>
                                    <h4 className='text-center'>Krismas Event Management</h4>
                                    <p>“Wishing you a day filled with happiness and a year filled with joy.
                                        Happy birthday!” “Sending you smiles for every moment of your special day…Have
                                        a wonderful time and a very happy birthday!”
                                        “Hope your special day brings you all that your heart desires!
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="mb-4">
                            <Card className='rounded card-hover'>

                                <CardBody>
                                    <h4 className='text-center'>Tv Show Event Management</h4>
                                    <p>“Wishing you a day filled with happiness and a year filled with joy.
                                        Happy birthday!” “Sending you smiles for every moment of your special day…Have
                                        a wonderful time and a very happy birthday!”
                                        “Hope your special day brings you all that your heart desires!
                                    </p>
                                </CardBody>
                            </Card>

                        </Col>
                        <Col lg={4} md={6} sm={12} className="mb-4">
                            <Card className='rounded card-hover'>

                                <CardBody>
                                    <h4 className='text-center'>Annivarsary Event Management</h4>
                                    <p>“Wishing you a day filled with happiness and a year filled with joy.
                                        Happy birthday!” “Sending you smiles for every moment of your special day…Have
                                        a wonderful time and a very happy birthday!”
                                        “Hope your special day brings you all that your heart desires!
                                    </p>
                                </CardBody>
                            </Card>

                        </Col>
                        <Col lg={4} md={6} sm={12} className="mb-4">
                            <Card className='rounded card-hover'>

                                <CardBody>
                                    <h4 className='text-center'>Corporate Event Management</h4>
                                    <p>A wedding can be a simple civil ceremony at City Hall or an
                                        elaborate event that takes place over several days and involves
                                        religious rituals, food and drink, and hundreds of guests.
                                        As an adjective, wedding describes anything related to
                                        the ceremony.
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </CardBody>
            </Card>

            {/* <div className='container '> */}
            <h1 className='text-center text-primary fw-bold mb-5 bg-light'>Book A Ticket Online</h1>
            <div className='row p-3'>
                <div className="col-md-6 d-flex align-items-center" style={{ background: 'url(/path-to-your-image.jpg) no-repeat center center', backgroundSize: 'cover' }}>
                    <img
                        height={600}
                        width={600}
                        className="d-block w-100 rounded"
                        src="/image/ta1.jpg"
                        alt="Corporate Event Management"
                    />
                </div>
                <div className='col-md-6 bg-dark'>
                    <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                        <h5 className="section-title ff-secondary text-start text-primary fw-normal">Reservation</h5>
                        <h1 className="text-warning mb-3">Book A Ticket Online</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating mt-4">
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="image"
                                            placeholder="Add Image Event"
                                            onChange={(e) => {
                                                setData({ ...data, image: e.target.files[0] });
                                            }}
                                        />
                                        <label htmlFor="image">Add Image Event</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating date mt-4" id="date1" data-target-input="nearest">
                                        <input
                                            type="text"
                                            className="form-control datetimepicker-input"
                                            id="location"
                                            placeholder="Location"
                                            value={data.location}
                                            onChange={(e) => {
                                                setData({ ...data, location: e.target.value });
                                            }}
                                        />
                                        <label htmlFor="location">Location</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating date" id="date2" data-target-input="nearest">
                                        <input
                                            type="time"
                                            className="form-control datetimepicker-input"
                                            id="time"
                                            placeholder="Time"
                                            value={data.time}
                                            onChange={(e) => {
                                                setData({ ...data, time: e.target.value });
                                            }}
                                        />
                                        <label htmlFor="time">Time</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating date" id="date3" data-target-input="nearest">
                                        <input
                                            type="date"
                                            className="form-control datetimepicker-input"
                                            id="date"
                                            placeholder="Date"
                                            value={data.date}
                                            onChange={(e) => {
                                                setData({ ...data, date: e.target.value });
                                            }}
                                        />
                                        <label htmlFor="date">Date</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <select
                                            className="form-select"
                                            id="event"
                                            value={data.event}
                                            onChange={(e) => {
                                                setData({ ...data, event: e.target.value });
                                            }}
                                        >
                                            <option value="">Select Event</option>
                                            <option value="Marriage">Marriage</option>
                                            <option value="Engagement">Engagement</option>
                                            <option value="Birthday">Birthday</option>
                                            <option value="Anniversary">Anniversary</option>
                                            <option value="Graduation">Graduation</option>
                                            <option value="Retirement">Retirement</option>
                                            <option value="Baby Shower">Baby Shower</option>
                                            <option value="Housewarming">Housewarming</option>
                                            <option value="Promotion">Promotion</option>
                                            <option value="Farewell">Farewell</option>
                                        </select>
                                        <label htmlFor="event">Select Event</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-warning bg-warning w-100 py-3 mt-3" type="submit">Book Now</button>
                                </div>
                            </div>
                        </form>
                    </div>


                </div>
                <h1 className='text-center fw-bold '>Resent Book</h1>
                {submittedData.map((item, index) => (
                    <Col key={index} lg={3} md={6} sm={12} className="mb-4">
                        <div className="card bg-light text-dark mb-2 card-hover" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
                            <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
                                {/* Replace with the actual image source */}
                                <img
                                    src={item.image ? URL.createObjectURL(item.image) : '/image/default.jpg'}
                                    className="card-img-top"
                                    alt="Event"
                                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                />
                                <div className="badge bg-primary text-white" style={{ position: 'absolute', top: '10px', left: '10px', padding: '5px 10px', borderRadius: '10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>Upcoming</div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-center">{item.event} Event Management</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><i className="bi bi-calendar-event"></i> Date: {item.date}</li>
                                    <li className="list-group-item"><i className="bi bi-clock"></i> Time: {item.time}</li>
                                    <li className="list-group-item"><i className="bi bi-geo-alt"></i> Location: {item.location}</li>
                                </ul>
                                <div className="d-flex justify-content-center align-items-center mt-4">
                                    <button className="btn btn-outline-warning" style={{ borderRadius: '8px', padding: '8px 16px' }}>Learn More</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}

            </div>


            <div style={{ maxWidth: '1300px', margin: '0 auto', }}>
                <div style={profileHeaderStyle}>
                    <h1 style={{ color: '#ffc107', marginBottom: '20px' }}>User Profile</h1>
                </div>
                <div className="row mt-3">
                    <div className="col-md-4">
                        <div className="card" style={cardStyle}>
                            <img
                                src="image/643384133f44a7ee4072533a_How to choose a digital marketing agency.png"
                                className="card-img-top"
                                alt="User Profile"
                                style={{ borderRadius: '8px 8px 0 0' }}
                            />
                            <div className="card-body" style={cardBodyStyle}>
                                <h5 className="card-title">Akash Kadam</h5>
                                <p className="card-text">Akash@gmail.com</p>
                                <a href="/edit-profile" className="btn" style={primaryButtonStyle}>Edit Profile</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card mb-3" style={cardStyle}>
                            <div className="card-header" style={cardHeaderStyle}>
                                Booked Events
                            </div>
                            <ul className="list-group list-group-flush">
                                {/* {submittedData.map((item, index) => (
                                    <Ticket key={index} data={item} title={`Ticket ${index + 1} Information`} />
                                ))} */}
                                {/* <li className="list-group-item">Marriage Event 1</li>
                                <li className="list-group-item">Music Event 2</li>
                                <li className="list-group-item">Birthday Event 3</li> */}
                            </ul>
                        </div>
                        <div className="card mb-3" style={cardStyle}>
                            <div className="card-header" style={cardHeaderStyle}>
                                Past Event History
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Christmas Event 1</li>
                                <li className="list-group-item">Diwali Event 2</li>
                                <li className="list-group-item">Past Event 3</li>
                            </ul>
                        </div>
                        <div className="card" style={cardStyle}>
                            <div className="card-header" style={cardHeaderStyle}>
                                View Tickets
                            </div>
                            <div className="card-body text-center">
                                <Link to="/tiket" className="btn" style={secondaryButtonStyle}>View Tickets</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Index
