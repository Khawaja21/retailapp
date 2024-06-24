import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <a 
      href="/"
      className={`btn btn-secondary btn-lg-square rounded-circle back-to-top ${isVisible ? 'd-block' : 'd-none'}`}
      onClick={(e) => { e.preventDefault(); scrollToTop(); }}
    >
      <i className="fa fa-arrow-up" style={{marginTop: '0.7rem'}}></i>
    </a>
  );
};

export default BackToTop;