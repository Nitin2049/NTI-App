const CourseJava = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e96443, #904e95)",
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
        }}
      >
        <div className="card-body p-5">
          <h1 className="card-title text-center text-danger mb-4">
            Java Programming Masterclass
          </h1>
          <p className="text-center fs-5 text-secondary mb-4">
            Learn Java from scratch and build real-world applications, preparing
            for roles in software development, automation, and enterprise systems.
          </p>

          <div className="row g-4">
            <div className="col-md-6">
              <h4 className="text-danger mb-3">Why Learn Java?</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-0 ps-0">Widely used in enterprise applications.</li>
                <li className="list-group-item border-0 ps-0">Strong object-oriented foundation.</li>
                <li className="list-group-item border-0 ps-0">Used in Android development, backend systems, and automation.</li>
                <li className="list-group-item border-0 ps-0">High demand in global job markets.</li>
              </ul>
            </div>

            <div className="col-md-6">
              <h4 className="text-danger mb-3">Course Highlights</h4>
              <ol className="list-group list-group-numbered">
                <li className="list-group-item border-0 ps-0">Java Basics & Syntax</li>
                <li className="list-group-item border-0 ps-0">Object-Oriented Programming (OOP)</li>
                <li className="list-group-item border-0 ps-0">Collections, Exceptions & File Handling</li>
                <li className="list-group-item border-0 ps-0">Multithreading & JDBC</li>
                <li className="list-group-item border-0 ps-0">Java for Web & Desktop Applications</li>
                <li className="list-group-item border-0 ps-0">Project: Build a Mini Application</li>
              </ol>
            </div>
          </div>

          <div className="text-center mt-5">
            <h5 className="text-success mb-3">Who Should Enroll?</h5>
            <p className="fs-5 text-muted">
              Beginners, students, or professionals looking to strengthen their
              Java skills and land developer roles.
            </p>
            <div className="badge bg-success fs-6 px-4 py-2 mb-4">
              10 Weeks · Online · Certificate Included
            </div>

            <div className="d-flex justify-content-center">
              <button
                className="btn btn-danger btn-lg px-5"
                style={{ fontWeight: "600" }}
                onClick={() =>
                  alert("Thank you for your interest! We'll share enrollment details soon.")
                }
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

export default CourseJava;
