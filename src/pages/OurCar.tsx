import React from "react";
import '../styles/OurCar.css';
import Topbar from '../components/Topbar';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import Copyright from "../components/Copyright";
import Banner from "../components/Banner";
import VehicleCategories from "../components/VehicleCategories";
import CentralProcess from "../components/CentralProcess";
const OurCar: React.FC = () => {
    return (
       <>
       <div>
         <Topbar />
         <NavBar />
         <div className="container-fluid bg-breadcrumb">
      <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
        <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s" style={{fontWeight:'600'}}>Our Cars </h4>
        <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
          <li className="breadcrumb-item"><Link to="/home" style={{textDecoration:'none'}}>Home</Link></li>
          <li className="breadcrumb-item"><a href="/" style={{textDecoration:'none'}}>Pages</a></li>
          <li className="breadcrumb-item active text-primary">Categories</li>
        </ol>    
      </div>
    </div>
    <div style={{marginTop:'5rem'}}>
        <VehicleCategories />
    </div>
        <CentralProcess />
        <div style={{marginTop:'5rem'}}>
        <Banner />
        </div>
         <Footer />
         <Copyright />
       </div>
       </>
    );
  };
  
  export default OurCar;