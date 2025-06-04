import React from 'react';
import './HRCourseInfo.css'; // Make sure to create this CSS file

const CourseHR = () => {
  return (
    <div className="hr-course-container">
      <h1 className="hr-title">Human Resources Management Course</h1>
      <p className="hr-subtitle">
        Gain essential skills to manage people, culture, and HR processes in modern organizations.
      </p>

      <div className="hr-section">
        <h2>Course Overview</h2>
        <p>
          Learn the core principles of HR, including recruitment, employee engagement, performance
          management, and labor law compliance. This course blends theoretical knowledge with
          practical insights to help you become a more effective HR professional.
        </p>
      </div>

      <div className="hr-section">
        <h2>What You'll Learn</h2>
        <ul>
          <li>Key HR functions and roles</li>
          <li>Effective talent acquisition and onboarding</li>
          <li>Performance management systems</li>
          <li>Conflict resolution and employee relations</li>
          <li>Compensation, benefits, and labor laws</li>
        </ul>
      </div>

      <div className="hr-section">
        <h2>Who Should Enroll</h2>
        <p>
          Ideal for HR beginners, team leads, managers, or anyone aspiring to build a career in human
          resources.
        </p>
      </div>

      <div className="hr-badge">📅 6 Weeks · 🌐 100% Online · 🎓 Certificate Included</div>
    </div>
  );
};

export default CourseHR;
