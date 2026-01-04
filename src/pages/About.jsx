// components/About.jsx
import '../styles/About.css'

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container py-5">
        <h2 className="text-center section-title">About FeaturedEvents</h2>
        <p className="text-center lead mb-5">Discover the story behind our platform</p>
        
        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="glass-card p-4 h-100">
              <h3 className="mb-4">Our Mission</h3>
              <p className="mb-4">
                EventSphere was founded with a simple mission: to connect people with amazing events 
                happening around them. We believe that attending events should be seamless, enjoyable, 
                and accessible to everyone.
              </p>
              <p className="mb-4">
                Our platform brings together event organizers and attendees in one place, making it 
                easier than ever to discover, plan, and participate in events that matter to you.
              </p>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="glass-card p-4 h-100">
              <h3 className="mb-4">What We Offer</h3>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <i className="fas fa-check-circle text-warning me-2"></i>
                  <strong>Curated Event Listings:</strong> Hand-picked events that meet our quality standards
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-circle text-warning me-2"></i>
                  <strong>Easy Registration:</strong> Simple and secure ticket purchasing process
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-circle text-warning me-2"></i>
                  <strong>Personalized Recommendations:</strong> Events tailored to your interests
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-circle text-warning me-2"></i>
                  <strong>Event Management:</strong> Tools for organizers to create and promote events
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-circle text-warning me-2"></i>
                  <strong>Community Building:</strong> Connect with other attendees before and after events
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-12">
            <div className="glass-card p-5 text-center">
              <h3 className="mb-4">Our Team</h3>
              <p className="lead mb-4">
                We're a passionate team of event enthusiasts, developers, and designers who believe in 
                the power of bringing people together through shared experiences.
              </p>
              <p>
                Since our founding in 2020, we've helped thousands of people discover events that 
                inspire, educate, and entertain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;