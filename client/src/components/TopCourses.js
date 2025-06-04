import React from 'react';
import './TopCourses.css';

const courses = [
  'Cloud Computing', 'Devops', 'Cyber Security + AI', 'Full Stack Development + AI', '.Net Core + AI',
  'Java + AI', 'Mern Stack + AI', 'Python', 'UI / UX', 'Business Analytics',
  'Data Science', 'Data Analytics', 'Generative AI', 'Machine learning', 'AWS',
  'Digital Marketing + AI', 'Software Testing', 'AutoCAD', 'ERP', 'Azure'
];

function TopCourses() {
  return (
    <div className="top-courses-container">
      <h2 className="top-courses-heading">
        TOP COURSES
        <div className="heading-underline"></div>
      </h2>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div className="course-box" key={index}>
            {course}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopCourses;
