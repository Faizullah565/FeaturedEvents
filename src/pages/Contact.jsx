// components/Contact.js
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import '../styles/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    toast.success('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-5">
      <div className="container py-5">
        <h2 className="text-center section-title">Contact Us</h2>
        <p className="text-center lead mb-5">Have questions? Get in touch with our team</p>
        
        <div className="row">
          <div className="col-lg-6 mb-1 mb-lg-0">
            <div className="glass-card p-3 h-70">
              <h4 className="mb-2">Send us a Message</h4>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="mb-1">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Faizullah balghari" 
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com" 
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea 
                    className="form-control" 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5" 
                    placeholder="Type your message here..." 
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="glass-card p-4 h-100">
              <h4 className="mb-4">Contact Information</h4>
              <p className="mb-4">Feel free to reach out to us for any inquiries about events or partnerships.</p>
              
              <div className="d-flex align-items-center mb-3">
                <div className="social-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h6 className="mb-0">Address</h6>
                  <p className="mb-0">8B G-7/4, Islamabad, Pakistan</p>
                </div>
              </div>
              
              <div className="d-flex align-items-center mb-3">
                <div className="social-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h6 className="mb-0">Phone</h6>
                  <p className="mb-0">+92 (123) 456-7890</p>
                </div>
              </div>
              
              <div className="d-flex align-items-center mb-3">
                <div className="social-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h6 className="mb-0">Email</h6>
                  <p className="mb-0">info@sharedevents.com</p>
                </div>
              </div>
              
              <h6 className="mt-4 mb-3">Follow Us</h6>
              <div className="d-flex">
                <a href="#!" className="social-icon me-2">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#!" className="social-icon me-2">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#!" className="social-icon me-2">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#!" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;