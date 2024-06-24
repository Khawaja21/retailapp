import React from "react";
import '../styles/Blog.css';
import Topbar from '../components/Topbar';
import NavBar from '../components/NavBar';
import Counter from '../components/Counter';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import CentralBlog from "../components/CentralBlog";
import Copyright from "../components/Copyright";
import { Link } from "react-router-dom";
const Blog: React.FC = () => {
    return (
       <>
       <div>
         <Topbar />
         <NavBar />
         <div className="container-fluid bg-breadcrumb">
      <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
        <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Blogs & News</h4>
        <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
          <li className="breadcrumb-item"><Link to="/home" style={{textDecoration:'none'}}>Home</Link></li>
          <li className="breadcrumb-item"><a href="/" style={{textDecoration:'none'}}>Pages</a></li>
          <li className="breadcrumb-item active text-primary">Blogs & News</li>
        </ol>    
      </div>
    </div>
         <CentralBlog />
         <Counter />
         <div style={{marginTop:'5rem'}}>
         <Banner />
         </div>
         <Footer />
         <Copyright />
       </div>
       </>
    );
  };
  
  export default Blog;