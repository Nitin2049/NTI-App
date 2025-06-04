import React from 'react';
import './Certification.css';

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
        <button className="btn">Apply for Certificate</button>
        <button className="btn">Download Certificate</button>
        <button className="btn">Verify Certificate</button>
      </div>
    </div>
  );
}

export default Certificate;
