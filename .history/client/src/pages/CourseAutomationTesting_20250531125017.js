import React from "react";

const CourseAutomationTesting = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
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
            Automation Testing Masterclass
          </h1>
          <p className="text-center fs-5 text-secondary mb-5">
            Learn to automate testing workflows with cutting-edge tools and frameworks to deliver high-quality software faster.
          </p>

          <div className="row g-4">
            <div className="col-md-6">
              <h3 className="text-primary mb-3">Why Automation Testing?</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-0 ps-0">
                  Boost testing efficiency and reduce manual errors.
                </li>
                <li className="list-group-item border-0 ps-0">
                  Work with popular automation tools like Selenium, Cypress & more.
                </li>
                <li className="list-group-item border-0 ps-0">
                  Integrate tests in CI/CD pipelines for seamless delivery.
                </li>
                <li className="list-group-item border-0 ps-0">
                  Advance your career as a skilled QA Automation Engineer.
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <h3 className="text-primary mb-3">Course Outline</h3>
              <ol className="list-group list-group-numbered">
                <li className="list-group-item border-0 ps-0">Intro to Automation Testing</li>
                <li className="list-group-item border-0 ps-0">Selenium WebDriver Basics</li>
                <li className="list-group-item border-0 ps-0">Advanced Cypress Testing</li>
                <li className="list-group-item border-0 ps-0">Test Frameworks & Design Patterns</li>
                <li className="list-group-item border-0 ps-0">CI/CD Integration with Jenkins & GitHub Actions</li>
                <li className="list-group-item border-0 ps-0">Reporting & Debugging Automation Tests</li>
              </ol>
            </div>
          </div>

          <div className="text-center mt-5">
            <h4 className="text-success mb-3">Who Should Enroll?</h4>
            <p className="fs-5 text-muted mb-4">
              QA professionals, developers, and anyone passionate about improving software quality through automation.
            </p>
            <div className="badge bg-success fs-6 px-4 py-2 mb-4">
              8 Weeks · Online · Certificate Included
            </div>

            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-primary btn-lg px-5"
                onClick={() => alert("Thank you for your interest! Enrollment details will be shared soon.")}
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

export default CourseAutomationTesting;
