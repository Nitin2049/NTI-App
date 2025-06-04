const CourseC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #1e3c72, #2a5298)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
      }}
    >
      <div
        className="card shadow-lg border-0 rounded-4"
        style={{
          maxWidth: "900px",
          width: "100%",
          background: "rgba(255, 255, 255, 0.96)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="card-body p-5">
          <h1 className="text-center text-primary mb-4">C Programming Course</h1>
          <p className="text-center text-secondary fs-5 mb-4">
            Master the fundamentals of programming with C — the foundation of many modern programming languages and systems.
          </p>

          <div className="row g-4">
            <div className="col-md-6">
              <h4 className="text-primary mb-3">Why Learn C?</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-0 ps-0">Build a solid foundation in computer science</li>
                <li className="list-group-item border-0 ps-0">Used in system-level programming, OS, and embedded systems</li>
                <li className="list-group-item border-0 ps-0">High-performance and efficient language</li>
                <li className="list-group-item border-0 ps-0">Great stepping stone for C++, Java, and Python</li>
              </ul>
            </div>

            <div className="col-md-6">
              <h4 className="text-primary mb-3">Course Curriculum</h4>
              <ol className="list-group list-group-numbered">
                <li className="list-group-item border-0 ps-0">Introduction to C & IDE Setup</li>
                <li className="list-group-item border-0 ps-0">Data Types, Variables & Operators</li>
                <li className="list-group-item border-0 ps-0">Control Structures & Loops</li>
                <li className="list-group-item border-0 ps-0">Functions & Recursion</li>
                <li className="list-group-item border-0 ps-0">Pointers & Memory Management</li>
                <li className="list-group-item border-0 ps-0">Structures, Files & Final Project</li>
              </ol>
            </div>
          </div>

          <div className="text-center mt-5">
            <h5 className="text-success mb-3">Who Should Enroll?</h5>
            <p className="fs-5 text-muted">
              Beginners in programming, students pursuing engineering or CS, and anyone curious about low-level programming.
            </p>
            <div className="badge bg-success fs-6 px-4 py-2 mb-4">
              6 Weeks · Online · Certificate Included
            </div>

            <div className="d-flex justify-content-center">
              <button
                className="btn btn-primary btn-lg px-5"
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

export default CourseC;
