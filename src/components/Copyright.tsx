import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
import '../styles/Copyright.css';

const Copyright: React.FC = () => {
  return (
    <div className="container-fluid copyright py-4">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-md-6 text-center text-md-start mb-md-0">
            <span className="text-body">
              <a href="/" className="border-bottom text-white">
                <i className="fas fa-copyright text-light me-2"></i>
                Logigates
              </a>
              , All right reserved.
            </span>
          </div>
          <div className="col-md-6 text-center text-md-end text-body">
            Designed By <a className="border-bottom text-white" href="/">Logigates</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
