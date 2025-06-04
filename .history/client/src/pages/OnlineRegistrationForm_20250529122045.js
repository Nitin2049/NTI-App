import React, { useState } from 'react';
import './OnlineRegistrationForm.css';

function OnlineRegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    branch: '',
    address: '',
    city: '',
    country: '',
    zipcode: '',
    amount: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    console.log(formData);
  };

  return (
    <div className="form-container">
      <div className="form-left">
        <img
          src="NTI-logo_color.png"
          alt="DUCAT Logo"
        />
      </div>

      <div className="form-right">
        <h2>Online Registration Form</h2>
        <p>Register online today and take the first step towards success!</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Enter Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              name="course"
              placeholder="Select Course"
              value={formData.course}
              onChange={handleChange}
            />
            <input
              type="text"
              name="branch"
              placeholder="Select Branch"
              value={formData.branch}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <textarea
              name="address"
              placeholder="Enter Address"
              value={formData.address}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-row">
            <input
              type="text"
              name="city"
              placeholder="Enter City Name"
              value={formData.city}
              onChange={handleChange}
            />
            <input
              type="text"
              name="country"
              placeholder="Enter Country Name"
              value={formData.country}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              name="zipcode"
              placeholder="Enter ZIP Code"
              value={formData.zipcode}
              onChange={handleChange}
            />
            <input
              type="text"
              name="amount"
              placeholder="Enter Amount"
              value={formData.amount}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default OnlineRegistrationForm;
