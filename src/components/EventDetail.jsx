// components/EventDetail.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { eventsData } from '../data/eventsData';
import '../styles/EventDetail.css'
const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = eventsData.find(e => e.id === id);

  if (!event) {
    return (
      <div className="container py-5 mt-5">
        <div className="row">
          <div className="col-12 text-center">
            <div className="glass-card p-5">
              <i className="fas fa-calendar-times text-warning mb-3" style={{ fontSize: '3rem' }}></i>
              <h2 className="mb-3">Event Not Found</h2>
              <p className="mb-4">The event you're looking for doesn't exist or may have been removed.</p>
              <button className="btn btn-primary-custom" onClick={() => navigate('/events')}>
                <i className="fas fa-arrow-left me-2"></i>Back to Events
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container pt-5 mt-5">
      <div className="row">
        <div className="col-12 mb-4">
          <button className="btn btn-primary" onClick={() => navigate('/events')}>
            <i className="fas fa-arrow-left me-2"></i>Back to Events
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-10 mx-auto">
          <div className="event-detail-card glass-card px-5 mb-3">
            {/* Event Header */}
            <div className="event-header mb-3">
              <div className="event-badge mb-5">Featured Event</div>
              <h1 className="event-title mb-3 py-3">{event.name}</h1>
              <div className="event-meta d-flex flex-wrap gap-4">
                <div className="meta-item">
                  <i className="far fa-calendar me-2 text-primary"></i>
                  <span className="fw-bold">{event.date}</span>
                </div>
                <div className="meta-item">
                  <i className="fas fa-map-marker-alt me-2 text-primary"></i>
                  <span className="fw-bold">{event.venue}</span>
                </div>
                <div className="meta-item">
                  <i className="fas fa-clock me-2 text-primary"></i>
                  <span className="fw-bold">7:00 PM - 11:00 PM</span>
                </div>
              </div>
            </div>

            {/* Event Image */}
            <div className="event-image-container mb-4">
              <img
                src={event.image}
                className="img-fluid rounded event-image"
                alt={event.name}
              />
              <div className="image-overlay"></div>
            </div>

            {/* Event Description */}
            <div className="event-description mb-5">
              <h3 className="section-title mb-4">About This Event</h3>
              <p className="lead">{event.fullDescription}</p>

              <div className="event-highlights mt-4">
                <h5 className="mb-3">Event Highlights</h5>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        Keynote speeches from industry leaders
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        Networking opportunities
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        Live demonstrations
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        Interactive workshops
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        Food and beverages
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        Free merchandise
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Location */}
            <div className="event-location mb-2">
              <h4 className="section-title mb-2">
                <i className="fas fa-map-marked-alt me-2"></i>
                Event Location
              </h4>
              <div className="ratio ratio-16x9 mb-1">
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(event.venue)}&output=embed`}
                  style={{ border: 0, borderRadius: "12px", width: "100%", height: "350px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Event Location"
                />
              </div>
              <p className="text-center mb-0">
                <i className="fas fa-info-circle me-2 text-warning"></i>
                Free parking available • Wheelchair accessible • Public transport nearby
              </p>
            </div>

            {/* Call to Action */}
            <div className="event-cta text-center mt-3">
              <h4 className="mb-4">Ready to Join Us?</h4>
              <p className="mb-4">Don't miss out on this incredible experience. Reserve your spot now!</p>
              <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
                <button className="btn btn-primary btn-primary-custom btn-lg">
                  <i className="fas fa-ticket-alt me-2"></i>RSVP Now
                </button>
                <button className="btn btn-success btn-outline-light-custom btn-lg">
                  <i className="fas fa-share-alt me-2"></i>Share Event
                </button>
              </div>
              <p className="text-muted mt-3">
                <small className='text-white'>
                  <i className="fas fa-exclamation-circle me-1 text-white"></i>
                  Limited seats available. Early bird pricing ends soon!
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;