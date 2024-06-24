import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';
const NavBar: React.FC = () => {
  return (
    <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a href="/" className="navbar-brand p-0">
            <h1 className="display-6 text-primary" style={{fontWeight:'600'}}><i className="fas fa-car-alt me-3"></i>Cental</h1>
            {/* <img src="img/logo.png" alt="Logo"> */}
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto py-0">
              <Link to="/" className="nav-item nav-link active">Home</Link>
              <Link to="/about" className="nav-item nav-link">About</Link>
              <Link to="/service" className="nav-item nav-link">Service</Link>
              <Link to="/blog" className="nav-item nav-link">Blog</Link>
              <div className="nav-item dropdown">
                <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                <div className="dropdown-menu m-0">
                  <Link to="/feature" className="dropdown-item">Our Feature</Link>
                  <Link to="/ourcars" className="dropdown-item">Our Cars</Link>
                  <Link to="/team" className="dropdown-item">Our Team</Link>
                  <Link to="/Testimonial" className="dropdown-item">Testimonial</Link>
                  <Link to="/Error" className="dropdown-item">404 Page</Link>
                </div>  
              </div>
              <Link to="/contact" className="nav-item nav-link">Contact</Link>
            </div>
            <Link to="/" className="btn btn-primary rounded-pill py-2 px-4">Get Started</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
