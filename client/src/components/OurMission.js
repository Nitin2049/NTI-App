import React from 'react';
import './OurMission.css';
// import missionImg from '../assets/mission-placeholder.png'; // Replace with actual image

const OurMission = () => {
  return (
    <section className="mission-section">
      {/* <div className="mission-image">
        <img src={missionImg} alt="Our Mission" />
      </div> */}
      <div className="mission-content">
        <h2>Our Mission & Vision</h2>

        <div className="mission-item">
          <span className="icon">🎯</span>
          <div>
            <h3>Mission</h3>
            <p>
              To provide industry-relevant IT training that equips individuals with the skills and
              knowledge to excel in their careers and contribute to technological advancements.
            </p>
          </div>
        </div>

        <div className="mission-item">
          <span className="icon">💡</span>
          <div>
            <h3>Vision</h3>
            <p>
              To be the most trusted and preferred IT training institute globally, recognized for our
              excellence in education, innovation, and transformative impact on careers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;