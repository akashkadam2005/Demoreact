import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

const Booking = () => {
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
      {/* <h3 className='text-center text-primary fw-bold mb-3 mt-4 bg-light'>Book A Tikcet Online </h3>
      <div className='row  p-3'>
        <div className="col-md-6  d-flex align-items-center" style={{ background: 'url(/path-to-your-image.jpg) no-repeat center center', backgroundSize: 'cover' }}>

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
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating mt-4">
                    <input type="text" className="form-control" id="name" placeholder="Your Name" />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="form-floating mt-4">
                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating date" id="date3" data-target-input="nearest">
                    <input type="text" className="form-control datetimepicker-input" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                    <label htmlFor="datetime">Date &amp; Time</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <select className="form-select" id="select1">
                      <option value={1}>People 1</option>
                      <option value={2}>People 2</option>
                      <option value={3}>People 3</option>
                    </select>
                    <label htmlFor="select1">No Of People</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea className="form-control" placeholder="Special Request" id="message" style={{ height: 100, borderRadius: '8px' }} defaultValue={""} />
                    <label htmlFor="message">Special Request</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-warning bg-warning w-100 py-3 mt-3" type="submit" >Book Now</button>
                </div>
              </div>
            </form>
          </div>

        </div>

      </div> */}

      <h1 className='text-center text-primary fw-bold mb-3 bg-light mt-3'>Book A Ticket Online</h1>
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
                  <div className="form-floating date mt-4" id="date1" data-target-input="nearest ">
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
      </div>
    </div>
  )
}

export default Booking
