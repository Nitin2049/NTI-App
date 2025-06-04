import React from 'react';

const CourseHR = () => {
  return (
    <div className="container py-5">
      <div className="card shadow p-4">
        <h1 className="text-center text-primary mb-3">Human Resources Management Course</h1>
        <p className="text-center text-muted mb-4">
          A professional certificate program to master people management, talent acquisition, compliance, and strategic HR leadership.
        </p>

        <div className="row">
          <div className="col-md-6 mb-4">
            <h4>📘 Course Overview</h4>
            <p>
              This course provides a solid foundation in HR principles and practices. Learn how to manage recruitment, employee engagement, conflict resolution, compensation, and legal compliance.
              Perfect for aspiring HR professionals or managers looking to upgrade their skills.
            </p>
          </div>

          <div className="col-md-6 mb-4">
            <h4>📚 Course Modules</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Introduction to HR Management</li>
              <li className="list-group-item">Recruitment & Talent Acquisition</li>
              <li className="list-group-item">Employee Engagement & Retention</li>
              <li className="list-group-item">Compensation & Benefits</li>
              <li className="list-group-item">HR Technology & Analytics</li>
              <li className="list-group-item">Employment Law & Ethics</li>
            </ul>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6 mb-4">
            <h4>🎯 Learning Outcomes</h4>
            <ul>
              <li>Understand core HR functions and their strategic importance</li>
              <li>Design and execute hiring strategies</li>
              <li>Develop performance appraisal systems</li>
              <li>Ensure legal compliance and ethical HR practices</li>
              <li>Utilize HR metrics and dashboards</li>
            </ul>
          </div>

          <div className="col-md-6 mb-4">
            <h4>👤 Ideal For</h4>
            <p>
              This course is suitable for:
            </p>
            <ul>
              <li>Beginners in HR</li>
              <li>Team leaders and managers</li>
              <li>HR professionals aiming to advance their career</li>
              <li>Anyone interested in understanding modern workforce management</li>
            </ul>
          </div>
        </div>

        <div className="alert alert-info text-center mt-4" role="alert">
          📅 Duration: 6 Weeks &nbsp; | &nbsp; 🌐 100% Online &nbsp; | &nbsp; 🎓 Certificate of Completion Included
        </div>
      </div>
    </div>
  );
};

export default CourseHR;
