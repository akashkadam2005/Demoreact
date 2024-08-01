import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          {/* Company Info */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Event Manegmement</h5>
            <p>Manege The Event description about your company. This can include your mission, vision, or a brief history.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Quick Links</h5>
            <p><Link to="/" className="text-white" style={{ textDecoration: 'none' }}>Home </Link></p>
            <p><Link to="/list" className="text-white" style={{ textDecoration: 'none' }}>List</Link></p>
            <p><Link to="/contact" className="text-white" style={{ textDecoration: 'none' }}>Contact</Link></p>
            <p><Link to="/blog" className="text-white" style={{ textDecoration: 'none' }}>Blog</Link></p>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Contact</h5>
            <p><i className="fas fa-home mr-3"></i> 123 Street Name, City, Country</p>
            <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
            <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>

          {/* Social Media Links */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Follow Us</h5>
            <a href="#" className="text-white mr-4"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white mr-4"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white mr-4"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white mr-4"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        <hr className="mb-4" />

        {/* Footer Bottom */}
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
          </div>
          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-right">
              <a href="#" className="text-white"><i className="fas fa-angle-up"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
