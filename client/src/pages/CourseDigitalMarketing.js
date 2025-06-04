import React from "react";

const CourseDigitalMarketing = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
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
          <h1 className="card-title text-center text-danger mb-4">
            Digital Marketing Mastery Course
          </h1>
          <p className="text-center fs-5 text-secondary mb-5">
            Become an expert in digital marketing strategies, SEO, social media,
            content marketing, and analytics to grow businesses online.
          </p>

          <div className="row g-4">
            <div className="col-md-6">
              <h3 className="text-danger mb-3">Why Choose Digital Marketing?</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-0 ps-0">
                  Reach millions of customers worldwide.
                </li>
                <li className="list-group-item border-0 ps-0">
                  Master SEO, SEM, PPC, email marketing & more.
                </li>
                <li className="list-group-item border-0 ps-0">
                  Create impactful campaigns with data-driven insights.
                </li>
                <li className="list-group-item border-0 ps-0">
                  Grow your career or business with digital skills.
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <h3 className="text-danger mb-3">Course Curriculum</h3>
              <ol className="list-group list-group-numbered">
                <li className="list-group-item border-0 ps-0">
                  Introduction to Digital Marketing
                </li>
                <li className="list-group-item border-0 ps-0">SEO & Content Marketing</li>
                <li className="list-group-item border-0 ps-0">Social Media Strategies</li>
                <li className="list-group-item border-0 ps-0">Email Marketing & Automation</li>
                <li className="list-group-item border-0 ps-0">Google Ads & PPC Campaigns</li>
                <li className="list-group-item border-0 ps-0">Analytics & Performance Tracking</li>
              </ol>
            </div>
          </div>

          <div className="text-center mt-5">
            <h4 className="text-success mb-3">Who Should Enroll?</h4>
            <p className="fs-5 text-muted mb-4">
              Marketing professionals, entrepreneurs, students, and anyone eager
              to master online marketing.
            </p>
            <div className="badge bg-success fs-6 px-4 py-2 mb-4">
              10 Weeks · Online · Certification Included
            </div>

            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-danger btn-lg px-5"
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

export default CourseDigitalMarketing;
