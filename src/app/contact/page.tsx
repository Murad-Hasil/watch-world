import React from 'react';
import '@/app/styles/contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><i className="fas fa-phone-alt"></i> +92 123 456 7890</p>
          <p><i className="fas fa-envelope"></i> support@watchworld.com</p>
          <p><i className="fas fa-map-marker-alt"></i> 123 Watch World Street, Karachi, Pakistan</p>
          <p><i className="fas fa-clock"></i> Mon - Fri: 9:00 AM - 6:00 PM</p>
        </div>

        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows={10} required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;