// components/Hero.jsx
import { Link } from 'react-router-dom';
import '../styles/Hero.css'
const Hero = () => {
  return (
    <section className="hero-section mt-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 animate-fadeIn">
            <h1 className="hero-title mb-3">
              Discover Amazing <span className="text-gradient">Events</span> Near You
            </h1>
            <p className="hero-subtitle mb-4">
              Explore the most exciting events happening around you. From tech conferences to music festivals, 
              we've got everything you need to stay updated and never miss out on unforgettable experiences.
            </p>
            <div className="hero-buttons">
              <Link to="/events" className="btn btn-primary btn-primary-custom btn-lg me-3">
                <i className="fas fa-calendar me-2"></i>Explore Events
              </Link>
              <Link to="/contact" className="btn btn-primary btn-outline-light-custom btn-lg">
                <i className="fas fa-envelope me-2"></i>Contact Us
              </Link>
            </div>
            
            <div className="hero-features mt-5">
              <div className="d-flex flex-wrap">
                <div className="feature-item me-4 mb-3">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  <span>1000+ Events</span>
                </div>
                <div className="feature-item me-4 mb-3">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  <span>Verified Organizers</span>
                </div>
                <div className="feature-item mb-3">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  <span>Easy Registration</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 animate-fadeIn delay-1">
            <div className="hero-card glass-card p-4 text-center">
              <div className="event-badge">Featured Event</div>
              <h3 className="mb-4">Next Big Event</h3>
              <div className="image-container rounded overflow-hidden mb-4">
                <img 
                  src="/bigdata-iot-it.png" 
                  className="img-fluid rounded" 
                  alt="TechFest 2025" 
                />
                <div className="image-overlay"></div>
              </div>
              <h4 className="event-title">Big Data, IoT, & IT</h4>
              <div className="event-details">
                <p className="mb-2">
                  <i className="far fa-calendar me-2 text-primary"></i>
                  <strong>5th January 2026</strong>
                </p>
                <p className="mb-3">
                  <i className="fas fa-map-marker-alt me-2 text-primary"></i>
                  <strong>Islamabad, Pakistan</strong>
                </p>
              </div>
              <Link to="/event/big-data-iot-it" className="btn btn-warning btn-primary-custom mt-2">
                <i className="fas fa-ticket-alt me-2"></i>Get Tickets
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;