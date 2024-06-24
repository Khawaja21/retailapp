import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import person1 from '../assets/images/testimonial-1.jpg';
import person2 from '../assets/images/testimonial-2.jpg';
import person3 from '../assets/images/testimonial-3.jpg';
import '../styles/ClientReview.css';

const ClientReview: React.FC = () => {
  return (
    <div className="container-fluid testimonial pb-5">
      <div className="container pb-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
          <h1 className="display-5 text-capitalize mb-3">Our Clients<span className="text-primary"> Reviews</span></h1>
          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,</p>
        </div>
        <OwlCarousel className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s" loop margin={30} nav>
          <div className="testimonial-item">
            <div className="testimonial-quote"><i className="fa fa-quote-right fa-2x"></i></div>
            <div className="testimonial-inner p-4">
              <img src={person1} className="img-fluid" alt="person1" />
              <div className="ms-4">
                <h4>Person Name</h4>
                <p>Profession</p>
                <div className="d-flex text-primary">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star text-body"></i>
                </div>
              </div>
            </div>
            <div className="border-top rounded-bottom p-4">
              <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta neque ab repudiandae reprehenderit ipsum eos cumque esse repellendus impedit.</p>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-quote"><i className="fa fa-quote-right fa-2x"></i></div>
            <div className="testimonial-inner p-4">
              <img src={person2} className="img-fluid" alt="person2" />
              <div className="ms-4">
                <h4>Person Name</h4>
                <p>Profession</p>
                <div className="d-flex text-primary">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star text-body"></i>
                  <i className="fas fa-star text-body"></i>
                </div>
              </div>
            </div>
            <div className="border-top rounded-bottom p-4">
              <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta neque ab repudiandae reprehenderit ipsum eos cumque esse repellendus impedit.</p>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-quote"><i className="fa fa-quote-right fa-2x"></i></div>
            <div className="testimonial-inner p-4">
              <img src={person3} className="img-fluid" alt="person3" />
              <div className="ms-4">
                <h4>Person Name</h4>
                <p>Profession</p>
                <div className="d-flex text-primary">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star text-body"></i>
                  <i className="fas fa-star text-body"></i>
                  <i className="fas fa-star text-body"></i>
                </div>
              </div>
            </div>
            <div className="border-top rounded-bottom p-4">
              <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta neque ab repudiandae reprehenderit ipsum eos cumque esse repellendus impedit.</p>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default ClientReview;