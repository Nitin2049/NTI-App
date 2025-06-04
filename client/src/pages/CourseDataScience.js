import React from "react";

const CourseDataScience = () => {
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
            Data Science Bootcamp
          </h1>
          <p className="text-center fs-5 text-secondary mb-5">
            Master data analysis, machine learning, and data visualization
            techniques to become a skilled data scientist.
          </p>

          <div className="row g-4">
            <div className="col-md-6">
              <h3 className="text-primary mb-3">Why Data Science?</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-0 ps-0">
                  Extract insights from complex datasets.
                </li>
                <li className="list-group-item border-0 ps-0">
                  Learn Python, R, SQL, and popular libraries.
                </li>
                <li className="list-group-item border-0 ps-0">
                  Build predictive models and algorithms.
                </li>
                <li className="list-group-item border-0 ps-0">
                  Solve real-world business problems.
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <h3 className="text-primary mb-3">Course Curriculum</h3>
              <ol className="list-group list-group-numbered">
                <li className="list-group-item border-0 ps-0">Introduction to Data Science & Tools</li>
                <li className="list-group-item border-0 ps-0">Python Programming for Data Analysis</li>
                <li className="list-group-item border-0 ps-0">Data Wrangling & Cleaning</li>
                <li className="list-group-item border-0 ps-0">Exploratory Data Analysis & Visualization</li>
                <li className="list-group-item border-0 ps-0">Machine Learning Algorithms</li>
                <li className="list-group-item border-0 ps-0">Capstone Project & Deployment</li>
              </ol>
            </div>
          </div>

          <div className="text-center mt-5">
            <h4 className="text-success mb-3">Who Should Enroll?</h4>
            <p className="fs-5 text-muted mb-4">
              Students, IT professionals, analysts, and anyone looking to
              build a career in data science.
            </p>
            <div className="badge bg-success fs-6 px-4 py-2 mb-4">
              14 Weeks · Online · Certificate Included
            </div>

            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-primary btn-lg px-5"
                onClick={() =>
                  alert("Thank you for your interest! Enrollment details coming soon.")
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

export default CourseDataScience;
