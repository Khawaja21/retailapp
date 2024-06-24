import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
import blog1img from '../assets/images/blog-1.jpg';
import blog2img from '../assets/images/blog-2.jpg';
import blog3img from '../assets/images/blog-3.jpg';
import '../styles/CentralBlog.css';
const CentralBlog: React.FC = () => {
  return (
    <div className="container-fluid blog py-5">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
          <h1 className="display-5 text-capitalize mb-3">Central<span className="text-primary"> Blog & News</span></h1>
          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,</p>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
            <div className="blog-item">
              <div className="blog-img">
                <img src={blog1img} className="img-fluid rounded-top w-100" alt="blog1" />
              </div>
              <div className="blog-content rounded-bottom p-4">
                <div className="blog-date">30 Dec 2025</div>
                <div className="blog-comment my-3">
                  <div className="small">
                    <span className="fa fa-user text-primary"></span>
                    <span className="ms-2" style={{color: '#6e7684'}}>Martin.C</span>
                  </div>
                  <div className="small">
                    <span className="fa fa-comment-alt text-primary"></span>
                    <span className="ms-2" style={{color: '#6e7684'}}>6 Comments</span>
                  </div>
                </div>
                <a href="/" className="h4 d-block mb-3" style={{textDecoration:'none'}}>Rental Cars how to check driving fines?</a>
                <p className="mb-3" style={{color: '#6e7684'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.</p>
                <a href="/" className="Arrow" style={{textDecoration:'none'}}>Read More  <i className="fa fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="blog-item">
              <div className="blog-img">
                <img src={blog2img} className="img-fluid rounded-top w-100" alt="blog2" />
              </div>
              <div className="blog-content rounded-bottom p-4">
                <div className="blog-date">25 Dec 2025</div>
                <div className="blog-comment my-3">
                  <div className="small">
                    <span className="fa fa-user text-primary"></span>
                    <span className="ms-2" style={{color: '#6e7684'}}>Martin.C</span>
                  </div>
                  <div className="small">
                    <span className="fa fa-comment-alt text-primary"></span>
                    <span className="ms-2" style={{color: '#6e7684'}}>6 Comments</span>
                  </div>
                </div>
                <a href="/" className="h4 d-block mb-3" style={{ textDecoration:'none'}}>Rental cost of sport and other cars</a>
                <p className="mb-3" style={{color: '#6e7684'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.</p>
                <a href="/" className="Arrow" style={{textDecoration:'none'}}>Read More  <i className="fa fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
            <div className="blog-item">
              <div className="blog-img">
                <img src={blog3img} className="img-fluid rounded-top w-100" alt="blog3" />
              </div>
              <div className="blog-content rounded-bottom p-4">
                <div className="blog-date">27 Dec 2025</div>
                <div className="blog-comment my-3">
                  <div className="small">
                    <span className="fa fa-user text-primary"></span>
                    <span className="ms-2" style={{color: '#6e7684'}}>Martin.C</span>
                  </div>
                  <div className="small">
                    <span className="fa fa-comment-alt text-primary"></span>
                    <span className="ms-2" style={{color: '#6e7684'}}>6 Comments</span>
                  </div>
                </div>
                <a href="/" className="h4 d-block mb-3" style={{textDecoration:'none'}}>Document required for car rental</a>
                <p className="mb-3" style={{color: '#6e7684'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.</p>
                <a href="/" className="Arrow" style={{textDecoration:'none'}}>Read More  <i className="fa fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentralBlog;