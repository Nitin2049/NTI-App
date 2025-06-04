import React from "react";

const CourseBusinessAnalyst = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
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
          <h1 className="card-title text-center text-warning mb-4">
            Business Analyst Professional Course
          </h1>
          <p className="text-center fs-5 text-secondary mb-5">
            Develop essential skills to analyze business processes, gather
            requirements, and deliver impactful solutions that drive success.
          </p>

          <div className="row g-4">
            <div className="col-md-6">
              <h3 className="text-warning mb-3">Why Become a Business Analyst?</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-0 ps-0">
                  Bridge the gap between stakeholders and technical teams.
                </li>
                <li className="list-group-item border-0 ps-0">
                  Master requirement gathering and documentation techniques.
                </li>
                <li className="list-group-item border-0 ps-0">
                  Learn process modeling, SWOT analysis, and risk management.
                </li>
                <li className="list-group-item border-0 ps-0">
                  Boost career opportunities across industries.
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <h3 className="text-warning mb-3">Course Curriculum</h3>
              <ol className="list-group list-group-numbered">
                <li className="list-group-item border-0 ps-0">Introduction to Business Analysis</li>
                <li className="list-group-item border-0 ps-0">Requirement Elicitation & Documentation</li>
                <li className="list-group-item border-0 ps-0">Business Process Modeling</li>
                <li className="list-group-item border-0 ps-0">Data Analysis & Visualization</li>
                <li className="list-group-item border-0 ps-0">Tools: MS Excel, Power BI & JIRA</li>
                <li className="list-group-item border-0 ps-0">Agile & Scrum for Business Analysts</li>
              </ol>
            </div>
          </div>

          <div className="text-center mt-5">
            <h4 className="text-success mb-3">Who Should Enroll?</h4>
            <p className="fs-5 text-muted mb-4">
              Aspiring business analysts, project managers, and professionals
              aiming to improve organizational efficiency.
            </p>
            <div className="badge bg-success fs-6 px-4 py-2 mb-4">
              10 Weeks · Online · Certification Included
            </div>

            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-warning btn-lg px-5"
                onClick={() =>
                  alert("Thanks for your interest! Enrollment details coming soon.")
                }
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

export default CourseBusinessAnalyst;
