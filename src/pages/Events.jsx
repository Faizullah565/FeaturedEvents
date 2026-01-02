// components/Events.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { eventsData } from '../data/eventsData';

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  const filteredEvents = eventsData.filter(event => 
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.venue.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEventClick = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  return (
    <section id="events" className="py-5">
      <div className="container py-5">
        <h2 className="text-center section-title">Upcoming Events</h2>
        <p className="text-center lead mb-5">Discover amazing events that match your interests</p>
        
        <div className="row mb-4">
          <div className="col-md-6 mx-auto">
            <input 
              type="text" 
              className="form-control search-bar-custom" 
              placeholder="Search events by name, venue, or description..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="row g-4">
          {filteredEvents.map((event, index) => (
            <div key={event.id} className={`col-md-6 col-lg-4 ${index < 3 ? 'animate-fadeIn delay-' + (index + 1) : ''}`}>
              <div className="event-card card">
                <img src={event.image} className="card-img-top" alt={event.name} />
                <div className="card-body">
                  <h5 className="card-title">{event.name}</h5>
                  <p className="card-text"><i className="far fa-calendar me-2"></i>{event.date}</p>
                  <p className="card-text"><i className="fas fa-map-marker-alt me-2"></i>{event.venue}</p>
                  <p className="card-text">{event.description}</p>
                  <button 
                    className="btn btn-primary-custom"
                    onClick={() => handleEventClick(event.id)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;