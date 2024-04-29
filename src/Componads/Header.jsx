import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
 
  <nav className="navbar navbar-light sticky-top bg-light ">
  <div className="container-fluid me-5 bg-light">
  <a className="navbar-brand me-5 ms-3  ">
  <img
    fetchpriority="high"
    decoding="async"
    width="300"
    height="50"
    src="https://mahaeseva.in/wp-content/uploads/2024/01/Priyanshu-Enterprises-4-1024x171.png"
    class="attachment-large size-large wp-image-478"
    alt=""
    srcset="https://mahaeseva.in/wp-content/uploads/2024/01/Priyanshu-Enterprises-4-1024x171.png 1024w, https://mahaeseva.in/wp-content/uploads/2024/01/Priyanshu-Enterprises-4-300x50.png 300w, https://mahaeseva.in/wp-content/uploads/2024/01/Priyanshu-Enterprises-4-768x128.png 768w, https://mahaeseva.in/wp-content/uploads/2024/01/Priyanshu-Enterprises-4.png 1060w"
    sizes="(max-width: 1024px) 100vw, 1024px"
  />
</a>

    <form className="d-flex ">
      {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button> */}
   <a href="index.html" className="nav-item nav-link pe-5 " >Home</a>
        <Link to="/service" className="nav-item nav-link pe-3">Services</Link>
        <Link href="/contact" className="nav-item nav-link pe-5">Contact</Link>
    </form>
  </div>
</nav>

    </>
  )
}

export default Header
