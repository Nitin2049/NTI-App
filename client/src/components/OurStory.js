import React from 'react';
import './OurStory.css';
// import teamImage from '../assets/team-placeholder.png'; // Replace with your actual image

const OurStory = () => {
  return (
    <section className="our-story-section">
      <div className="story-text">
        <h2>Our Story</h2>
        <p>
          Founded in 2001, Ducat India embarked on a mission to bridge the gap between academic
          education and industry requirements. Over the past two decades, we have emerged as a
          leading IT training institute, renowned for our commitment to quality, innovation, and
          student success.
        </p>
        <p>
          We believe in practical, hands-on learning delivered by experienced industry professionals.
          Our curriculum is constantly updated to reflect the latest technological advancements,
          ensuring our students are always ahead of the curve.
        </p>
        <p>
          With multiple centers across Noida and a strong focus on placement assistance, NTI has
          empowered thousands of individuals to build successful careers in the IT sector.
        </p>
      </div>
      <div className="story-image">
        {/* <img src={teamImage} alt="Ducat Team" /> */}
      </div>
    </section>
  );
};

export default OurStory;