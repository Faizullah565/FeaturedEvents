// components/Footer.jsx (updated to use Link)
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className="mb-4"><i className="fas fa-calendar-alt me-2"></i>EventSphere</h5>
            <p>Your premier destination for discovering and attending the most exciting events around the world.</p>
          </div>
          
          <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
            <h5 className="mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/events" className="text-white text-decoration-none">
                  Events
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-white text-decoration-none">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-white text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-4 mb-4 mb-md-0">
            <h5 className="mb-4">Upcoming Events</h5>
            <ul className="list-unstyled">
              <li className="mb-2">TechFest 2025 - Sep 15</li>
              <li className="mb-2">Music Vibes Night - Sep 25</li>
              <li className="mb-2">Food & Wine Festival - Oct 5</li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-4">
            <h5 className="mb-4">Subscribe</h5>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Your Email" />
              <button className="btn btn-primary-custom" type="button">Subscribe</button>
            </div>
          </div>
        </div>
        
        <hr className="my-4" />
        
        <div className="text-center">
          <p className="mb-0">&copy; 2025 EventSphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;