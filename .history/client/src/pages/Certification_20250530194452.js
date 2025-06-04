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
        <NavLink className="btn" to="/ApplyForCertificate">Apply for Certificate</NavLink>
        <NavLink className="btn" to="/DownloadCertificate">Download Certificate</NavLink>
        <NavLink className="btn" to="/VerifyCertificate">Verify Certificate</NavLink>
      </div>
    </div>
  );
}

export default Certificate;
