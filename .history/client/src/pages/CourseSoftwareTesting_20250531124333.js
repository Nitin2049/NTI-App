import React from "react";

const CourseSoftwareTesting = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)",
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
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
        }}
      >
        <div className="card-body p-5">
          <h1 className="card-title text-center text-primary mb-4">
            Comprehensive Software Testing Course
          </h1>
          <p className="text-center fs-5 text-secondary mb-5">
            Master software testing methodologies, tools, and best practices to
            deliver high-quality software products.
          </p>

          <div className="row g-4">
            <div className="col-md-6">
              <h3 className="text-primary mb-3">Why Choose This Course?</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-0 ps-0">
                  Learn manual and automated testing techniques.
                </li>
                <li className="list-group-item border-0 ps-0">
                  Understand test planning, execution, and defect tracking.
                </li>
                <li className="list-group-item border-0 ps-0">
                  Get hands-on experience with popular tools like Selenium and JIRA.
                </li>
                <li className="list-group-item border-0 ps-0">
                  Prepare for ISTQB certification and real-world challenges.
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <h3 className="text-primary mb-3">Course Outline</h3>
              <ol className="list-group list-group-numbered">
                <li className="list-group-item border-0 ps-0">
                  Introduction to Software Testing
                </li>
                <li className="list-group-item border-0 ps-0">
                  Test Design Techniques
                </li>
                <li className="list-group-item border-0 ps-0">
                  Automation Testing with Selenium
                </li>
                <li className="list-group-item border-0 ps-0">
                  Performance & Security Testing Basics
                </li>
                <li className="list-group-item border-0 ps-0">
                  Defect Reporting & Test Management Tools
                </li>
                <li className="list-group-item border-0 ps-0">
                  Agile & DevOps Testing Practices
                </li>
              </ol>
            </div>
          </div>

          <div className="text-center mt-5">
            <h4 className="text-success mb-3">Who Should Enroll?</h4>
            <p className="fs-5 text-muted mb-4">
              Beginners, QA professionals, developers, and anyone passionate about
              ensuring software quality and reliability.
            </p>
            <div className="badge bg-success fs-6 px-4 py-2 mb-4">
              10 Weeks · Online · Certification Included
            </div>

            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-primary btn-lg px-5"
                onClick={() =>
                  alert("Thanks for your interest! Enrollment coming soon.")
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

export default CourseSoftwareTesting;
