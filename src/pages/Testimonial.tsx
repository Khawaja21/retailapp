import React from 'react';
// import './Spinner.css';
import '../styles/Testimonial.css';
import Topbar from '../components/Topbar';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import ClientReview from '../components/ClientReview';
import { Link } from 'react-router-dom';

const Testimonial: React.FC = () => {
  return (
     <>
     <div>
      <Topbar />
      <NavBar />
     <div className="container-fluid bg-breadcrumb" style={{marginBottom:'3rem'}}>
      <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
        <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s" style={{fontWeight:'600'}}>Our Testimonial</h4>
        <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
          <li className="breadcrumb-item"><Link to="/home" style={{textDecoration:'none'}}>Home</Link></li>
          <li className="breadcrumb-item"><a href="/" style={{textDecoration:'none'}}>Pages</a></li>
          <li className="breadcrumb-item active text-primary">Testimonial</li>
        </ol>    
      </div>
    </div>
     <ClientReview />
      <Footer />
      <Copyright />

     </div>
     </>
  );
};

export default Testimonial;