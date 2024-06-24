import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
import '../styles/CustomerSupportCenter.css';
import team1 from '../assets/images/team-1.jpg';
import team2 from '../assets/images/team-2.jpg';
import team3 from '../assets/images/team-3.jpg';
import team4 from '../assets/images/team-4.jpg';

const CustomerSupportCenter: React.FC = () => {
  return (
    <div className="container-fluid team pb-5">
      <div className="container pb-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
          <h1 className="display-5 text-capitalize mb-3">Customer<span className="text-primary"> Support</span> Center</h1>
          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,</p>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item p-4 pt-0">
              <div className="team-img">
                <img src={team1} className="img-fluid rounded w-100" alt="team1" />
              </div>
              <div className="team-content pt-4">
                <h4>MARTIN DOE</h4>
                <p>Profession</p>
                <div className="team-icon d-flex justify-content-center">
                  <a className="btn btn-square btn-light rounded-circle mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square btn-light rounded-circle mx-1" href="/"><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square btn-light rounded-circle mx-1" href="/"><i className="fab fa-instagram"></i></a>
                  <a className="btn btn-square btn-light rounded-circle mx-1" href="/"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item p-4 pt-0">
              <div className="team-img">
                <img src={team2} className="img-fluid rounded w-100" alt="team2" />
              </div>
              <div className="team-content pt-4">
                <h4>MARTIN DOE</h4>
                <p>Profession</p>
                <div className="team-icon d-flex justify-content-center">
                  <a className="btn btn-square btn-light rounded-circle mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square btn-light rounded-circle mx-1" href="/"><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square btn-light rounded-circle mx-1" href="/"><i className="fab fa-instagram"></i></a>
                  <a className="btn btn-square btn-light rounded-circle mx-1" href="/"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item p-4 pt-0">
              <div className="team-img">
                <img src={team3} className="img-fluid rounded w-100" alt="team3" />
              </div>
              <div className="team-content pt-4">
                <h4>MARTIN DOE</h4>
                <p>Profession</p>
                <div className="team-icon d-flex justify-content-center">
                  <a className="btn btn-square btn-light rounded-circle mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square btn-light rounded-circle mx-1" href="/"><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square btn-light rounded-circle mx-1" href="/"><i className="fab fa-instagram"></i></a>
                  <a className="btn btn-square btn-light rounded-circle mx-1" href="/"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
            <div className="team-item p-4 pt-0">
              <div className="team-img">
                <img src={team4} className="img-fluid rounded w-100" alt="team4" />
              </div>
              <div className="team-content pt-4">
                <h4>MARTIN DOE</h4>
                <p>Profession</p>
                <div className="team-icon d-flex justify-content-center">
                  <a className="btn btn-square btn-light rounded-circle mx-1" href="/"><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square btn-light rounded-circle mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square btn-light rounded-circle mx-1" href="/"><i className="fab fa-instagram"></i></a>
                  <a className="btn btn-square btn-light rounded-circle mx-1" href="/"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupportCenter;