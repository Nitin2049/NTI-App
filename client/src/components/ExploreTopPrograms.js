import React from 'react';
import './ExploreTopPrograms.css';

const programs = [
  "MERN STACK + GEN AI",
  "CYBER SECURITY + GEN AI",
  "JAVA EXPERT",
  "ADVANCE DIGITAL MARKETING",
  "UI & UX",
  ".NET",
  "JAVA FULL STACK DEVELOPER + GEN AI",
  "DATA SCIENCE PROFESSIONAL TRAINING",
  "PYTHON TRAINING COURSE",
  "BUSINESS ANALYTICS",
  "AWS PROFESSIONAL TRAINING",
  "SOFTWARE TESTING COURSE",
  "DATA ANALYTICS USING PYTHON",
  "GENERATIVE AI",
  "POWER BI",
  "AUTOCAD"
];

function ExploreTopPrograms() {
  return (
    <div className="explore-container">
      <h2>Explore Top Programs</h2>
      <div className="program-grid">
        {programs.map((program, index) => (
          <div className="program-card" key={index}>
            <p>{program}</p>
          </div>
        ))}
      </div>

      <div className="learners-section">
        <h3>OUR LEARNERS WORK AT</h3>
        <p>
          Ducat learners work at some of the leading and innovative organizations of today, solving core business problems.
        </p>
      </div>
    </div>
  );
}

export default ExploreTopPrograms;
