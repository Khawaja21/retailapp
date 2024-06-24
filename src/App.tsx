import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route
  // , Link
   } from 'react-router-dom';
   import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './components/Home';
import About from './pages/About';
import Service from './pages/Service';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Error from './pages/Error';
import Testimonial from './pages/Testimonial';
import Features from './pages/Features';
import OurCar from './pages/OurCar';
// import { Spinner } from 'react-bootstrap';
// import Topbar from './components/Topbar';
// import HeaderCarousel from './components/HeaderCarousel';
// import CentralFeatures from './components/CentralFeatures';
// import AboutStart from './components/AboutStart';
// import Counter from './components/Counter';
// import ServicesStart from './components/ServicesStart';
// import VehicleCategories from './components/VehicleCategories';
// import CentralProcess from './components/CentralProcess';
// import CentralBlog from './components/CentralBlog';
// import Banner from './components/Banner';
// import CustomerSupportCenter from './components/CustomerSupportCenter';
// import ClientReview from './components/ClientReview';
// import Footer from './components/Footer';
// import Copyright from './components/Copyright';
// import BackToTop from './components/BackToTop';
// import NavBar from './components/NavBar';


// import Spinner from './components/Spinner';

const App: React.FC = () => {
  return (
    // <div>
    //   {/* <Spinner animation={'border'} /> */}
    //   {/* <Spinner /> */}
    //   <Topbar />
    //   <NavBar />
    //   <HeaderCarousel />
    //   <CentralFeatures />
    //   < AboutStart />
    //   <Counter />
    //   <ServicesStart />
    //   <VehicleCategories />
    //   <CentralProcess />
    //   <CentralBlog />
    //   <Banner />
    //   <CustomerSupportCenter />
    //   <ClientReview />
    //   <Footer />
    //   <Copyright />
    //   <BackToTop />
    //   {/* Add more components as needed */}
    // </div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/service' element={<Service />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/team' element={<Team />} />
            <Route path='/Error' element={<Error />} />
            <Route path='/testimonial' element={<Testimonial />} />
            <Route path='/feature' element={<Features />} />
            <Route path='/ourcars' element={<OurCar />} />
          </Routes>
      </Router>
  );
};

export default App;
