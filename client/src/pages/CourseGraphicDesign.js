import React from "react";

const CourseGraphicDesign = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)",
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
            Graphic Design Masterclass
          </h1>
          <p className="text-center fs-5 text-secondary mb-5">
            Unlock your creativity and learn the essential tools and techniques
            to create stunning graphics, logos, and digital art.
          </p>

          <div className="row g-4">
            <div className="col-md-6">
              <h3 className="text-danger mb-3">Why Choose Graphic Design?</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-0 ps-0">
                  Master tools like Adobe Photoshop, Illustrator & Figma.
                </li>
                <li className="list-group-item border-0 ps-0">
                  Learn design principles, color theory, and typography.
                </li>
                <li className="list-group-item border-0 ps-0">
                  Build a professional portfolio with real projects.
                </li>
                <li className="list-group-item border-0 ps-0">
                  Start a career as a freelance designer or in agencies.
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <h3 className="text-danger mb-3">Course Curriculum</h3>
              <ol className="list-group list-group-numbered">
                <li className="list-group-item border-0 ps-0">Fundamentals of Design</li>
                <li className="list-group-item border-0 ps-0">Adobe Photoshop Basics</li>
                <li className="list-group-item border-0 ps-0">Vector Graphics with Illustrator</li>
                <li className="list-group-item border-0 ps-0">UI/UX Design with Figma</li>
                <li className="list-group-item border-0 ps-0">Branding & Logo Design</li>
                <li className="list-group-item border-0 ps-0">Portfolio Building & Freelancing Tips</li>
              </ol>
            </div>
          </div>

          <div className="text-center mt-5">
            <h4 className="text-success mb-3">Who Should Enroll?</h4>
            <p className="fs-5 text-muted mb-4">
              Aspiring graphic designers, creatives, and anyone passionate about visual storytelling.
            </p>
            <div className="badge bg-success fs-6 px-4 py-2 mb-4">
              8 Weeks · Online · Certificate Included
            </div>

            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-danger btn-lg px-5"
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

export default CourseGraphicDesign;
