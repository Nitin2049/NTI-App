import React from 'react';
import './EnquiryNow.css';

const EnquiryNow = () => {
  return (
    <section className="enquiry-section">
      <div className="enquiry-content">
        <h2>Ready to empower your Workforce?</h2>
        <p>
          Fill the details in the form to know all about our Corporate Training Solutions and take your first step towards the success with the world-leading IT training company where employees not only acquire the skills but we help them to become future-ready.
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <div className="icon-circle">
              <i className="fas fa-phone"></i>
            </div>
            <div>
              <strong>Phone Number</strong>
              <p>9174253016</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon-circle">
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <strong>E-mail</strong>
              <p>info@ntitechacademy.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="enquiry-form">
        <h3>ENQUIRY NOW</h3>
        <form>
          <div className="form-row">
            <input type="text" placeholder="Name*" required />
            <input type="email" placeholder="Email*" required />
          </div>
          <div className="form-row">
            <input type="tel" placeholder="Phone*" required />
            <input type="text" placeholder="Center*" required />
          </div>
          <div className="form-row">
            <select required>
              <option value="">Select a Course*</option>
              <option>Web Development</option>
              <option>Data Science</option>
              <option>Cloud Computing</option>
            </select>
          </div>
          <div className="form-row">
            <input type="text" placeholder="Company Name*" required />
          </div>
          <div className="form-row">
            <textarea placeholder="Any Query?"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default EnquiryNow;
