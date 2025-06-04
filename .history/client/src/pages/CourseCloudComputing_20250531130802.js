import React from "react";

const CourseCloudComputing = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
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
          boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
        }}
      >
        <div className="card-body p-5">
          <h1 className="card-title text-center text-info mb-4">
            Cloud Computing Masterclass
          </h1>
          <p className="text-center fs-5 text-secondary mb-5">
            Gain hands-on expertise in cloud platforms, architectures, and
            services to power modern applications.
          </p>

          <div className="row g-4">
            <div className="col-md-6">
              <h3 className="text-info mb-3">Why Learn Cloud Computing?</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-0 ps-0">
                  Understand AWS, Azure, and Google Cloud fundamentals.
                </li>
                <li className="list-group-item border-0 ps-0">
                  Learn cloud architecture, deployment, and security.
                </li>
                <li className="list-group-item border-0 ps-0">
                  Manage virtual machines, storage, and networking.
                </li>
                <li className="list-group-item border-0 ps-0">
                  Prepare for cloud certifications and career growth.
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <h3 className="text-info mb-3">Course Curriculum</h3>
              <ol className="list-group list-group-numbered">
                <li className="list-group-item border-0 ps-0">Introduction to Cloud Computing</li>
                <li className="list-group-item border-0 ps-0">AWS Cloud Practitioner Essentials</li>
                <li className="list-group-item border-0 ps-0">Azure Fundamentals</li>
                <li className="list-group-item border-0 ps-0">Google Cloud Platform Basics</li>
                <li className="list-group-item border-0 ps-0">Cloud Security Best Practices</li>
                <li className="list-group-item border-0 ps-0">Hands-on Labs & Final Project</li>
              </ol>
            </div>
          </div>

          <div className="text-center mt-5">
            <h4 className="text-success mb-3">Who Should Enroll?</h4>
            <p className="fs-5 text-muted mb-4">
              IT professionals, developers, and anyone interested in cloud technologies.
            </p>
            <div className="badge bg-success fs-6 px-4 py-2 mb-4">
              12 Weeks · Online · Certificate Included
            </div>

            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-info btn-lg px-5"
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

export default CourseCloudComputing;
