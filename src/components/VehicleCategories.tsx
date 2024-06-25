import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/VehicleCategories.css';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
SwiperCore.use([Navigation]);
const VehicleCategories: React.FC = () => {
  const cars = [
    {
      imgSrc: 'car-1.png',
      title: 'Mercedes Benz R3',
      review: 4.5,
      price: 99,
      details: [
        { icon: 'fa-users', text: '4 Seat' },
        { icon: 'fa-car', text: 'AT/MT' },
        { icon: 'fa-gas-pump', text: 'Petrol' },
        { icon: 'fa-car', text: '2015' },
        { icon: 'fa-cogs', text: 'AUTO' },
        { icon: 'fa-road', text: '27K' },
      ],
    },
    {
      imgSrc: 'car-2.png',
      title: 'Toyota Corolla Cross',
      review: 3.5,
      price: 128,
      details: [
        { icon: 'fa-users', text: '4 Seat' },
        { icon: 'fa-car', text: 'AT/MT' },
        { icon: 'fa-gas-pump', text: 'Petrol' },
        { icon: 'fa-car', text: '2015' },
        { icon: 'fa-cogs', text: 'AUTO' },
        { icon: 'fa-road', text: '27K' },
      ],
    },
    {
      imgSrc: 'car-3.png',
      title: 'Tesla Model S Plaid',
      review: 3.8,
      price: 170,
      details: [
        { icon: 'fa-users', text: '4 Seat' },
        { icon: 'fa-car', text: 'AT/MT' },
        { icon: 'fa-gas-pump', text: 'Petrol' },
        { icon: 'fa-car', text: '2015' },
        { icon: 'fa-cogs', text: 'AUTO' },
        { icon: 'fa-road', text: '27K' },
      ],
    },
    {
      imgSrc: 'car-4.png',
      title: 'Hyundai Kona Electric',
      review: 4.8,
      price: 187,
      details: [
        { icon: 'fa-users', text: '4 Seat' },
        { icon: 'fa-car', text: 'AT/MT' },
        { icon: 'fa-gas-pump', text: 'Petrol' },
        { icon: 'fa-car', text: '2015' },
        { icon: 'fa-cogs', text: 'AUTO' },
        { icon: 'fa-road', text: '27K' },
      ],
    },
    {
      imgSrc: 'car-2.png',
      title: 'Audi A5 Sportback',
      review: 4.8,
      price: 197,
      details: [
        { icon: 'fa-users', text: '6 Seat' },
        { icon: 'fa-car', text: 'AT/MT' },
        { icon: 'fa-gas-pump', text: 'Petrol' },
        { icon: 'fa-car', text: '2019' },
        { icon: 'fa-cogs', text: 'AUTO' },
        { icon: 'fa-road', text: '25K' },
      ],
    },
  ];

  return (
    <div className="container-fluid categories pb-5">
      <div className="container pb-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
          <h1 className="display-5 text-capitalize mb-3">
            Vehicle <span className="text-primary">Categories</span>
          </h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi
            accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
          </p>
        </div>
        <Swiper
          navigation
          spaceBetween={30}
          slidesPerView={3}
          className="categories-carousel wow fadeInUp"
          data-wow-delay="0.1s"
          style={{cursor:'grab'}}
        >
          {cars.map((car, index) => (
            <SwiperSlide key={index}>
              <div className="categories-item p-4">
                <div className="categories-item-inner">
                  <div className="categories-img rounded-top">
                    <img src={car.imgSrc} className="img-fluid w-100 rounded-top" alt={car.title} />
                  </div>
                  <div className="categories-content rounded-bottom p-4">
                    <h4>{car.title}</h4>
                    <div className="categories-review mb-4">
                      <div className="me-3">{car.review} Review</div>
                      <div className="d-flex justify-content-center text-secondary">
                        {[...Array(5)].map((star, i) => (
                          <i className={`fas fa-star ${i < car.review ? '' : 'text-body'}`} key={i}></i>
                        ))}
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">
                        ${car.price}:00/Day
                      </h4>
                    </div>
                    <div className="row gy-2 gx-0 text-center mb-4">
                      {car.details.map((detail, i) => (
                        <div
                          className={`col-4 ${i % 3 === 0 ? 'border-end border-white' : ''}`}
                          key={i}
                        >
                          <i className={`fa ${detail.icon} text-dark`}></i>{' '}
                          <span className="text-body ms-1">{detail.text}</span>
                        </div>
                      ))}
                    </div>
                    <a href="/" className="btn btn-primary rounded-pill d-flex justify-content-center py-3">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default VehicleCategories;
