// import React from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import 'font-awesome/css/font-awesome.min.css'; // Ensure you have Font Awesome installed or included
// import '../styles/Counter.css';
// const Counter: React.FC = () => {
//   return (
//     <div className="container-fluid counter bg-secondary py-5">
//       <div className="container py-5">
//         <div className="row g-5">
//           <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
//             <div className="counter-item text-center">
//               <div className="counter-item-icon mx-auto">
//                 <i className="fas fa-thumbs-up fa-2x"></i>
//               </div>
//               <div className="counter-counting my-3">
//                 <span className="text-white fs-2 fw-bold" data-toggle="counter-up">829</span>
//                 <span className="h1 fw-bold text-white">+</span>
//               </div>
//               <h4 className="text-white mb-0">Happy Clients</h4>
//             </div>
//           </div>
//           <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
//             <div className="counter-item text-center">
//               <div className="counter-item-icon mx-auto">
//                 <i className="fas fa-car-alt fa-2x"></i>
//               </div>
//               <div className="counter-counting my-3">
//                 <span className="text-white fs-2 fw-bold" data-toggle="counter-up">56</span>
//                 <span className="h1 fw-bold text-white">+</span>
//               </div>
//               <h4 className="text-white mb-0">Number of Cars</h4>
//             </div>
//           </div>
//           <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
//             <div className="counter-item text-center">
//               <div className="counter-item-icon mx-auto">
//                 <i className="fas fa-building fa-2x"></i>
//               </div>
//               <div className="counter-counting my-3">
//                 <span className="text-white fs-2 fw-bold" data-toggle="counter-up">127</span>
//                 <span className="h1 fw-bold text-white">+</span>
//               </div>
//               <h4 className="text-white mb-0">Car Center</h4>
//             </div>
//           </div>
//           <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
//             <div className="counter-item text-center">
//               <div className="counter-item-icon mx-auto">
//                 <i className="fas fa-clock fa-2x"></i>
//               </div>
//               <div className="counter-counting my-3">
//                 <span className="text-white fs-2 fw-bold" data-toggle="counter-up">589</span>
//                 <span className="h1 fw-bold text-white">+</span>
//               </div>
//               <h4 className="text-white mb-0">Total kilometers</h4>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Counter;
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import '../styles/Counter.css';

const counterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay: any) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5 }
  })
};

const Counter = () => {
  return (
    <div className="container-fluid counter bg-secondary py-5">
      <div className="container py-5">
        <div className="row g-5">
          <motion.div
            className="col-md-6 col-lg-6 col-xl-3"
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={counterVariants}
          >
            <div className="counter-item text-center">
              <div className="counter-item-icon mx-auto">
                <i className="fas fa-thumbs-up fa-2x"></i>
              </div>
              <div className="counter-counting my-3">
                <span className="text-white fs-2 fw-bold">
                  <CountUp end={829} duration={3} />
                </span>
                <span className="h1 fw-bold text-white">+</span>
              </div>
              <h4 className="text-white mb-0">Happy Clients</h4>
            </div>
          </motion.div>
          <motion.div
            className="col-md-6 col-lg-6 col-xl-3"
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={counterVariants}
          >
            <div className="counter-item text-center">
              <div className="counter-item-icon mx-auto">
                <i className="fas fa-car-alt fa-2x"></i>
              </div>
              <div className="counter-counting my-3">
                <span className="text-white fs-2 fw-bold">
                  <CountUp end={56} duration={3} />
                </span>
                <span className="h1 fw-bold text-white">+</span>
              </div>
              <h4 className="text-white mb-0">Number of Cars</h4>
            </div>
          </motion.div>
          <motion.div
            className="col-md-6 col-lg-6 col-xl-3"
            initial="hidden"
            animate="visible"
            custom={0.5}
            variants={counterVariants}
          >
            <div className="counter-item text-center">
              <div className="counter-item-icon mx-auto">
                <i className="fas fa-building fa-2x"></i>
              </div>
              <div className="counter-counting my-3">
                <span className="text-white fs-2 fw-bold">
                  <CountUp end={127} duration={3} />
                </span>
                <span className="h1 fw-bold text-white">+</span>
              </div>
              <h4 className="text-white mb-0">Car Center</h4>
            </div>
          </motion.div>
          <motion.div
            className="col-md-6 col-lg-6 col-xl-3"
            initial="hidden"
            animate="visible"
            custom={0.7}
            variants={counterVariants}
          >
            <div className="counter-item text-center">
              <div className="counter-item-icon mx-auto">
                <i className="fas fa-clock fa-2x"></i>
              </div>
              <div className="counter-counting my-3">
                <span className="text-white fs-2 fw-bold">
                  <CountUp end={589} duration={3} />
                </span>
                <span className="h1 fw-bold text-white">+</span>
              </div>
              <h4 className="text-white mb-0">Total kilometers</h4>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
