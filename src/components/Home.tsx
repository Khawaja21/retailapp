// import React from 'react'; 
// import Topbar from './Topbar';
// import HeaderCarousel from './HeaderCarousel';
// import CentralFeatures from './CentralFeatures';
// import AboutStart from './AboutStart';
// import Counter from './Counter';
// import ServicesStart from './ServicesStart';
// import VehicleCategories from './VehicleCategories';
// import CentralProcess from './CentralProcess';
// import CentralBlog from './CentralBlog';
// import Banner from './Banner';
// import CustomerSupportCenter from './CustomerSupportCenter';
// import ClientReview from './ClientReview';
// import Footer from './Footer';
// import Copyright from './Copyright';
// import BackToTop from './BackToTop';
// import '../styles/NavBar.css';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';


// const Home: React.FC = () => {
//   return (
//     <>
//        <div>
//          {/* <Spinner animation={'border'} /> */}
//          {/* <Spinner /> */}
//          <Topbar />
//          <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
//       <div className="container">
//         <nav className="navbar navbar-expand-lg navbar-light">
//           <a href="/" className="navbar-brand p-0">
//             <h1 className="display-6 text-primary" style={{fontWeight:'600'}}><i className="fas fa-car-alt me-3"></i>Cental</h1>
//             {/* <img src="img/logo.png" alt="Logo"> */}
//           </a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
//             <span className="fa fa-bars"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarCollapse">
//             <div className="navbar-nav mx-auto py-0">
//               <Link to="/home" className="nav-item nav-link active">Home</Link>
//               <Link to="/about" className="nav-item nav-link">About</Link>
//               <a href="/service" className="nav-item nav-link">Service</a>
//               <a href="/blog" className="nav-item nav-link">Blog</a>
//               <div className="nav-item dropdown">
//                 <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
//                 <div className="dropdown-menu m-0">
//                   <a href="/feature" className="dropdown-item">Our Feature</a>
//                   <a href="/ourcars" className="dropdown-item">Our Cars</a>
//                   <a href="/team" className="dropdown-item">Our Team</a>
//                   <a href="/Testimonial" className="dropdown-item">Testimonial</a>
//                   <a href="/Error" className="dropdown-item">404 Page</a>
//                 </div>
//               </div>
//               <a href="/contact" className="nav-item nav-link">Contact</a>
//             </div>
//             <a href="/" className="btn btn-primary rounded-pill py-2 px-4">Get Started</a>
//           </div>
//         </nav>
//       </div>
//     </div>
//          <HeaderCarousel />
//          <CentralFeatures />
//          < AboutStart />
//          <Counter />
//          <ServicesStart />
//          <VehicleCategories />
//          <CentralProcess />
//          <CentralBlog />
//          <Banner />
//          <CustomerSupportCenter />
//          <ClientReview />
//          <Footer />
//          <Copyright />
//          <BackToTop />
//          {/* Add more components as needed */}
//        </div>
      
//     </>
//   );
// };

// export default Home;

import React from 'react'; 
import { motion } from 'framer-motion';
import Topbar from './Topbar';
import HeaderCarousel from './HeaderCarousel';
import CentralFeatures from './CentralFeatures';
import AboutStart from './AboutStart';
import Counter from './Counter';
import ServicesStart from './ServicesStart';
import VehicleCategories from './VehicleCategories';
import CentralProcess from './CentralProcess';
import CentralBlog from './CentralBlog';
import Banner from './Banner';
import CustomerSupportCenter from './CustomerSupportCenter';
import ClientReview from './ClientReview';
import Footer from './Footer';
import Copyright from './Copyright';
import BackToTop from './BackToTop';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home: React.FC = () => {
  return (
    <>
      <div>
        <Topbar />
        <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <a href="/" className="navbar-brand p-0">
                <h1 className="display-6 text-primary" style={{fontWeight:'600'}}><i className="fas fa-car-alt me-3"></i>Cental</h1>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav mx-auto py-0">
                  <Link to="/home" className="nav-item nav-link active">Home</Link>
                  <Link to="/about" className="nav-item nav-link">About</Link>
                  <a href="/service" className="nav-item nav-link">Service</a>
                  <a href="/blog" className="nav-item nav-link">Blog</a>
                  <div className="nav-item dropdown">
                    <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu m-0">
                      <a href="/feature" className="dropdown-item">Our Feature</a>
                      <a href="/ourcars" className="dropdown-item">Our Cars</a>
                      <a href="/team" className="dropdown-item">Our Team</a>
                      <a href="/Testimonial" className="dropdown-item">Testimonial</a>
                      <a href="/Error" className="dropdown-item">404 Page</a>
                    </div>
                  </div>
                  <a href="/contact" className="nav-item nav-link">Contact</a>
                </div>
                <a href="/" className="btn btn-primary rounded-pill py-2 px-4">Get Started</a>
              </div>
            </nav>
          </div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <HeaderCarousel />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
          <CentralFeatures />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
          <AboutStart />
        </motion.div>
        <Counter />
        <ServicesStart />
        <VehicleCategories />
        <CentralProcess />
        <CentralBlog />
        <Banner />
        <CustomerSupportCenter />
        <ClientReview />
        <Footer />
        <Copyright />
        <BackToTop />
      </div>
    </>
  );
};

export default Home;
// import React from 'react'; 
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Topbar from './Topbar';
// import HeaderCarousel from './HeaderCarousel';
// import CentralFeatures from './CentralFeatures';
// import AboutStart from './AboutStart';
// import Counter from './Counter';
// import ServicesStart from './ServicesStart';
// import VehicleCategories from './VehicleCategories';
// import CentralProcess from './CentralProcess';
// import CentralBlog from './CentralBlog';
// import Banner from './Banner';
// import CustomerSupportCenter from './CustomerSupportCenter';
// import ClientReview from './ClientReview';
// import Footer from './Footer';
// import Copyright from './Copyright';
// import BackToTop from './BackToTop';
// import '../styles/NavBar.css';
// import AnimatedComponent from './AnimatedComponent';

// const Home: React.FC = () => {
//   return (
//     <>
    
//       <div>
//         <Topbar />
//         <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
//           <div className="container">
//             <nav className="navbar navbar-expand-lg navbar-light">
//               <a href="/" className="navbar-brand p-0">
//                 <h1 className="display-6 text-primary" style={{ fontWeight: '600' }}><i className="fas fa-car-alt me-3"></i>Cental</h1>
//               </a>
//               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
//                 <span className="fa fa-bars"></span>
//               </button>
//               <div className="collapse navbar-collapse" id="navbarCollapse">
//                 <div className="navbar-nav mx-auto py-0">
//                   <Link to="/home" className="nav-item nav-link active">Home</Link>
//                   <Link to="/about" className="nav-item nav-link">About</Link>
//                   <Link to="/service" className="nav-item nav-link">Service</Link>
//                   <Link to="/blog" className="nav-item nav-link">Blog</Link>
//                   <div className="nav-item dropdown">
//                     <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
//                     <div className="dropdown-menu m-0">
//                       <Link to="/feature" className="dropdown-item">Our Feature</Link>
//                       <Link to="/ourcars" className="dropdown-item">Our Cars</Link>
//                       <Link to="/team" className="dropdown-item">Our Team</Link>
//                       <Link to="/Testimonial" className="dropdown-item">Testimonial</Link>
//                       <Link to="/Error" className="dropdown-item">404 Page</Link>
//                     </div>
//                   </div>
//                   <Link to="/contact" className="nav-item nav-link">Contact</Link>
//                 </div>
//                 <Link to="/" className="btn btn-primary rounded-pill py-2 px-4">Get Started</Link>
//               </div>
//             </nav>
//           </div>
//         </div>
//         <AnimatedComponent><HeaderCarousel /></AnimatedComponent>
//         <AnimatedComponent><CentralFeatures /></AnimatedComponent>
//         <AnimatedComponent><AboutStart /></AnimatedComponent>
//         <AnimatedComponent><Counter /></AnimatedComponent>
//         <AnimatedComponent><ServicesStart /></AnimatedComponent>
//         <AnimatedComponent><VehicleCategories /></AnimatedComponent>
//         <AnimatedComponent><CentralProcess /></AnimatedComponent>
//         <AnimatedComponent><CentralBlog /></AnimatedComponent>
//         <AnimatedComponent><Banner /></AnimatedComponent>
//         <AnimatedComponent><CustomerSupportCenter /></AnimatedComponent>
//         <AnimatedComponent><ClientReview /></AnimatedComponent>
//         <AnimatedComponent><Footer /></AnimatedComponent>
//         <AnimatedComponent><Copyright /></AnimatedComponent>
//         <BackToTop />
//       </div>
//     </>
//   );
// };

// export default Home;
