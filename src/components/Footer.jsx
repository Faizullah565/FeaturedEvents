// components/Footer.jsx (updated to use Link)
import { Link } from 'react-router-dom';
import "../styles/Footer.css"
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <img src="/featured-events-logo-remove.png" className="featured-events-logo mb-3" alt="Logo" />
            {/* <h5 className="mb-4"><i className="fas fa-calendar-alt me-2"></i>FeaturedEvents</h5> */}
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
              <li className="mb-2">Big Data, IoT, & IT - Jan 5, 2026</li>
              <li className="mb-2">IoT and Web Innovations - Jan 6</li>
              <li className="mb-2">Diagnostic Lab Medicine - Jan 13</li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4">
            <h5 className="mb-4">Subscribe</h5>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <div className="input-group mb-3">
              <input type="email" className="form-control" style={{ background: "gray", border: "1px solid blue", color: "white" }} placeholder="Your Email" />
              <button className="btn btn-secondary" type="button">Subscribe</button>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <div className="text-center">
          <p className="mb-0">&copy; 2026 SharedEvents. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;