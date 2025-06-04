import React from 'react';
import './Certification.css';
import {NavLink} from 'react-router-dom';

function Certificate() {
  return (
    <div className="certificate-container">
      <div className="certificate-left">
        <img
          src="NTI-logo_color.png" 
          alt="Certificate"
        />
      </div>

      <div className="certificate-right">
        <NavLink className="btn" to="/apply-for-certificate">Apply for Certificate</NavLink>
        <NavLink className="btn" to="/download-certificate">Download Certificate</NavLink>
        <NavLink className="btn" to="/verify-certificate">Verify Certificate</NavLink>
      </div>
    </div>
  );
}

export default Certificate;
