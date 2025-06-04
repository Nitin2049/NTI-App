import React from "react";

const CourseHR = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
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
          <h1 className="card-title text-center text-success mb-4">
            Advanced Human Resources Management
          </h1>
          <p className="text-center fs-5 text-secondary mb-5">
            Elevate your HR career with practical skills, strategic insights,
            and leadership tools to manage people and culture effectively.
          </p>

          <div className="row g-4">
            <div className="col-md-6">
              <h3 className="text-primary mb-3">Why Take This Course?</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-0 ps-0">
                  Gain mastery over recruitment, training, and employee
                  retention.
                </li>
                <li className="list-group-item border-0 ps-0">
                  Learn HR compliance, labor laws, and ethical practices.
                </li>
                <li className="list-group-item border-0 ps-0">
                  Develop leadership skills for managing teams and
                  organizational culture.
                </li>
                <li className="list-group-item border-0 ps-0">
                  Harness HR analytics to make data-driven decisions.
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <h3 className="text-primary mb-3">Course Structure</h3>
              <ol className="list-group list-group-numbered">
                <li className="list-group-item border-0 ps-0">
                  Foundations of Human Resource Management
                </li>
                <li className="list-group-item border-0 ps-0">
                  Talent Acquisition & Workforce Planning
                </li>
                <li className="list-group-item border-0 ps-0">
                  Performance Management & Employee Development
                </li>
                <li className="list-group-item border-0 ps-0">
                  Compensation, Benefits & Legal Compliance
                </li>
                <li className="list-group-item border-0 ps-0">
                  Diversity, Equity & Inclusion Strategies
                </li>
                <li className="list-group-item border-0 ps-0">
                  HR Technology and Analytics Tools
                </li>
              </ol>
            </div>
          </div>

          <div className="text-center mt-5">
            <h4 className="text-success mb-3">Who Should Enroll?</h4>
            <p className="fs-5 text-muted mb-4">
              Whether you're new to HR or a manager looking to upgrade your
              skills, this course offers valuable insights for anyone
              responsible for managing people.
            </p>
            <div className="badge bg-success fs-6 px-4 py-2 mb-4">
              8 Weeks · Online · Certification Included
            </div>

            {/* Enroll Now Button wrapper for perfect centering */}
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-success btn-lg px-5"
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

export default CourseHR;
