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
import '@fortawesome/fontawesome-free/css/all.min.css';

const App: React.FC = () => {
  return (

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
