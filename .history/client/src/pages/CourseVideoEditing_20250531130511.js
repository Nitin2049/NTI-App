import React from "react";

const CourseVideoEditing = () => {
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
          backdropFilter: "blur(8px)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
        }}
      >
        <div className="card-body p-5">
          <h1 className="card-title text-center text-primary mb-4">
            Professional Video Editing Course
          </h1>
          <p className="text-center fs-5 text-secondary mb-5">
            Learn to craft stunning videos with industry-standard editing
            software and storytelling techniques.
          </p>

          <div className="row g-4">
            <div className="col-md-6">
              <h3 className="text-primary mb-3">Why Choose Video Editing?</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-0 ps-0">
                  Master Adobe Premiere Pro, Final Cut Pro, and DaVinci Resolve.
                </li>
                <li className="list-group-item border-0 ps-0">
                  Understand video storytelling & editing workflows.
                </li>
                <li className="list-group-item border-0 ps-0">
                  Work with color correction, transitions, and effects.
                </li>
                <li className="list-group-item border-0 ps-0">
                  Build a portfolio for freelancing or media careers.
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <h3 className="text-primary mb-3">Course Curriculum</h3>
              <ol className="list-group list-group-numbered">
                <li className="list-group-item border-0 ps-0">Introduction to Video Editing</li>
                <li className="list-group-item border-0 ps-0">Editing with Premiere Pro</li>
                <li className="list-group-item border-0 ps-0">Color Grading & Correction</li>
                <li className="list-group-item border-0 ps-0">Motion Graphics & Effects</li>
                <li className="list-group-item border-0 ps-0">Sound Editing & Mixing</li>
                <li className="list-group-item border-0 ps-0">Final Project & Portfolio Building</li>
              </ol>
            </div>
          </div>

          <div className="text-center mt-5">
            <h4 className="text-success mb-3">Who Should Enroll?</h4>
            <p className="fs-5 text-muted mb-4">
              Aspiring video editors, content creators, filmmakers, and media
              professionals.
            </p>
            <div className="badge bg-success fs-6 px-4 py-2 mb-4">
              8 Weeks · Online · Certification Included
            </div>

            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-primary btn-lg px-5"
                onClick={() =>
                  alert("Thank you for your interest! Enrollment details will be shared soon.")
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

export default CourseVideoEditing;
