import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
import '../styles/Footer.css';
const Footer: React.FC = () => {
  return (
    <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <div className="footer-item">
                <h4 className="text-white mb-4">About Us</h4>
                <p className="mb-3" style={{color:'#6e7684'}}>Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.</p>
              </div>
              <div className="position-relative">
                <input className="form-control rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email" />
                <button type="button" className="btn btn-secondary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-white mb-4">Quick Links</h4>
              <a href="/" style={{textDecoration:'none'}}><i className="fas fa-angle-right me-2"></i> About</a>
              <a href="/" style={{textDecoration:'none'}}><i className="fas fa-angle-right me-2"></i> Cars</a>
              <a href="/" style={{textDecoration:'none'}}><i className="fas fa-angle-right me-2"></i> Car Types</a>
              <a href="/" style={{textDecoration:'none'}}><i className="fas fa-angle-right me-2"></i> Team</a>
              <a href="/" style={{textDecoration:'none'}}><i className="fas fa-angle-right me-2"></i> Contact us</a>
              <a href="/" style={{textDecoration:'none'}}><i className="fas fa-angle-right me-2"></i> Terms & Conditions</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-white mb-4">Business Hours</h4>
              <div className="mb-3">
                <h6 className="text-muted mb-0">Mon - Friday:</h6>
                <p className="text-white mb-0">09.00 am to 07.00 pm</p>
              </div>
              <div className="mb-3">
                <h6 className="text-muted mb-0">Saturday:</h6>
                <p className="text-white mb-0">10.00 am to 05.00 pm</p>
              </div>
              <div className="mb-3">
                <h6 className="text-muted mb-0">Vacation:</h6>
                <p className="text-white mb-0">All Sunday is our vacation</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-white mb-4">Contact Info</h4>
              <a href="/" style={{textDecoration:'none'}}><i className="fa fa-map-marker-alt me-2"></i> 123 Street, New York, USA</a>
              <a href="mailto:info@Logigates.com" style={{textDecoration:'none'}}><i className="fas fa-envelope me-2"></i> info@Logigates.com</a>
              <a href="tel:+01234567890" style={{textDecoration:'none'}}><i className="fas fa-phone me-2"></i> +012 345 67890</a>
              <a href="tel:+01234567890" className="mb-3" style={{textDecoration:'none'}}><i className="fas fa-print me-2"></i> +012 345 67890</a>
              <div className="d-flex">
                <a className="btn btn-secondary btn-md-square rounded-circle me-3" href="/"><i className="fab fa-facebook-f text-white"></i></a>
                <a className="btn btn-secondary btn-md-square rounded-circle me-3" href="/"><i className="fab fa-twitter text-white"></i></a>
                <a className="btn btn-secondary btn-md-square rounded-circle me-3" href="/"><i className="fab fa-instagram text-white"></i></a>
                <a className="btn btn-secondary btn-md-square rounded-circle me-0" href="/"><i className="fab fa-linkedin-in text-white"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
