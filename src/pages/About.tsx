import React from 'react';
// import './Spinner.css';
import '../styles/About.css';
import Topbar from '../components/Topbar';
import NavBar from '../components/NavBar';
import AboutStart from '../components/AboutStart';
import Counter from '../components/Counter';
import CentralFeatures from '../components/CentralFeatures';
import Footer from '../components/Footer';
import CentralProcess from '../components/CentralProcess';
import Banner from '../components/Banner';
import CustomerSupportCenter from '../components/CustomerSupportCenter';
import Copyright from '../components/Copyright';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
     <>
     <div>
      <Topbar />
      <NavBar />
     <div className="container-fluid bg-breadcrumb">
      <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
        <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">About Us</h4>
        <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
          <li className="breadcrumb-item"><Link to="/home" style={{textDecoration:'none'}}>Home</Link></li>
          <li className="breadcrumb-item"><a href="/" style={{textDecoration:'none'}}>Pages</a></li>
          <li className="breadcrumb-item active text-primary">About</li>
        </ol>    
      </div>
    </div>
    {/* <div className="container-fluid py-5 bg-p">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="position-relative overflow-hidden pe-5 pb-5">
                <img className="img-fluid w-100" src="img/about.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 text-uppercase mb-4">About <span className="text-primary">Us</span></h1>
              <h4 className="text-body mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h4>
              <p className="mb-4">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <div className="d-flex align-items-center mb-4">
                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                  <i className="fa fa-check text-white"></i>
                </div>
                <div className="ms-4">
                  <h5>Experienced Staff</h5>
                  <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                  <i className="fa fa-check text-white"></i>
                </div>
                <div className="ms-4">
                  <h5>Modern Equipment</h5>
                  <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      < AboutStart />
      <Counter />
      <CentralFeatures />
      <CentralProcess />
      <div style={{ marginTop: '5rem' }}>
      <CustomerSupportCenter />
      </div>
      <Banner />
      <Footer />
      <Copyright />

     </div>
     </>
  );
};

export default About;