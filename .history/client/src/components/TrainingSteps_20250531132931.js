import React from 'react';
import './DucatTrainingSteps.css';

const DucatTrainingSteps = () => {
  return (
    <section className="NTI-training">
      <div className="steps">
        <div className="step">
          <div className="step-icon">📚</div>
          <div className="step-label">First Step</div>
          <p>Interactive Training Development</p>
        </div>
        <div className="step">
          <div className="step-icon">🛠️</div>
          <div className="step-label">Second Step</div>
          <p>Ongoing Projects Training</p>
        </div>
        <div className="step">
          <div className="step-icon">📊</div>
          <div className="step-label">Third Step</div>
          <p>Performance Reviews</p>
        </div>
        <div className="step">
          <div className="step-icon">🏆</div>
          <div className="step-label">Completed</div>
          <p>Training Success</p>
        </div>
      </div>

      <div className="benefits">
        <h2>BENEFITS OF CHOOSING NTI INDIA</h2>
        <ul>
          <li><strong>Customized Training Programs:</strong> Tailored to your organization’s specific needs.</li>
          <li><strong>Experienced Instructors:</strong> Over 17 years of expertise in corporate training.</li>
          <li><strong>Proven Track Record:</strong> Success in various IT courses and corporate training programs.</li>
          <li><strong>Interactive Learning:</strong> Ensuring that training is always engaging and productive.</li>
        </ul>
        <p>By choosing NTI India, you are investing in your organization’s future success. Our seminars and training sessions are designed to transform employees into experts and certified professionals, improving confidence and ensuring long-term growth.</p>
      </div>
    </section>
  );
};

export default DucatTrainingSteps;
