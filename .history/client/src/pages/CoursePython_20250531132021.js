const CoursePython = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #141e30, #243b55)",
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
          <h1 className="text-center text-primary mb-4">Python Programming Course</h1>
          <p className="text-center text-secondary fs-5 mb-4">
            Learn Python from scratch — one of the most powerful and versatile programming languages used in web development, automation, data analysis, and more.
          </p>

          <div className="row g-4">
            <div className="col-md-6">
              <h4 className="text-primary mb-3">Why Learn Python?</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-0 ps-0">Easy to learn and beginner-friendly</li>
                <li className="list-group-item border-0 ps-0">Widely used in AI, data science, and web apps</li>
                <li className="list-group-item border-0 ps-0">Huge community and vast libraries</li>
                <li className="list-group-item border-0 ps-0">Highly in-demand across tech jobs</li>
              </ul>
            </div>

            <div className="col-md-6">
              <h4 className="text-primary mb-3">Course Content</h4>
              <ol className="list-group list-group-numbered">
                <li className="list-group-item border-0 ps-0">Python Syntax & Variables</li>
                <li className="list-group-item border-0 ps-0">Functions, Loops, & Conditionals</li>
                <li className="list-group-item border-0 ps-0">File I/O & Error Handling</li>
                <li className="list-group-item border-0 ps-0">Object-Oriented Programming (OOP)</li>
                <li className="list-group-item border-0 ps-0">Working with APIs & Libraries</li>
                <li className="list-group-item border-0 ps-0">Mini Project + Certification</li>
              </ol>
            </div>
          </div>

          <div className="text-center mt-5">
            <h5 className="text-success mb-3">Who Should Join?</h5>
            <p className="fs-5 text-muted">
              Anyone new to programming, data enthusiasts, or professionals
              wanting to automate tasks and build powerful apps.
            </p>
            <div className="badge bg-success fs-6 px-4 py-2 mb-4">
              8 Weeks · Online · Certificate Included
            </div>

            <button
              className="btn btn-primary btn-lg px-5"
              onClick={() => alert("Thanks for your interest! Enrollment info will be sent soon.")}
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePython;
