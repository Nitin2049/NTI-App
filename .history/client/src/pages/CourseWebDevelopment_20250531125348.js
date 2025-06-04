import React from "react";

const CourseWebDevelopment = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 15px",
      }}
    >
      <div
        className="card shadow-lg rounded-4 border-0"
        style={{
          maxWidth: "900px",
          width: "100%",
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(8px)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
        }}
      >
        <div className="card-body p-5">
          <h1 className="card-title text-center text-primary mb-4">
            Full Stack Web Development Course
          </h1>
          <p className="text-center fs-5 text-secondary mb-5">
            Learn to build stunning, responsive websites and web applications from scratch using the latest technologies.
          </p>

          <div className="row g-4">
            <div className="col-md-6">
              <h3 className="text-primary mb-3">Why Learn Web Development?</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-0 ps-0">
                  Master frontend and backend development.
                </li>
                <li className="list-group-item border-0 ps-0">
                  Work with popular tools like React, Node.js, and Express.
                </li>
                <li className="list-group-item border-0 ps-0">
                  Build real-world projects and portfolios.
                </li>
                <li className="list-group-item border-0 ps-0">
                  Prepare for a high-demand career in tech.
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <h3 className="text-primary mb-3">Course Curriculum</h3>
              <ol className="list-group list-group-numbered">
                <li className="list-group-item border-0 ps-0">HTML, CSS & JavaScript Fundamentals</li>
                <li className="list-group-item border-0 ps-0">ReactJS & Frontend Development</li>
                <li className="list-group-item border-0 ps-0">Backend with Node.js & Express</li>
                <li className="list-group-item border-0 ps-0">Databases: MongoDB & SQL</li>
                <li className="list-group-item border-0 ps-0">RESTful APIs & Authentication</li>
                <li className="list-group-item border-0 ps-0">Deployment & Hosting</li>
              </ol>
            </div>
          </div>

          <div className="text-center mt-5">
            <h4 className="text-success mb-3">Who Should Enroll?</h4>
            <p className="fs-5 text-muted mb-4">
              Beginners, aspiring developers, and professionals looking to expand their web development skills.
            </p>
            <div className="badge bg-success fs-6 px-4 py-2 mb-4">
              12 Weeks · Online · Certification Included
            </div>

            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-primary btn-lg px-5"
                onClick={() => alert("Thank you for your interest! Enrollment details coming soon.")}
                style={{ fontWeight: "600" }}
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseWebDevelopment;
