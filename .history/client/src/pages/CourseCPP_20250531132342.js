const CourseCPP = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #434343, #000000)",
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
          background: "rgba(255, 255, 255, 0.97)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="card-body p-5">
          <h1 className="text-center text-dark mb-4">C++ Programming Course</h1>
          <p className="text-center text-secondary fs-5 mb-4">
            Master C++ from basics to advanced concepts including OOP, memory management, and STL — perfect for aspiring developers and computer science students.
          </p>

          <div className="row g-4">
            <div className="col-md-6">
              <h4 className="text-dark mb-3">Why Learn C++?</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-0 ps-0">Foundational language for game development and high-performance apps</li>
                <li className="list-group-item border-0 ps-0">Strong Object-Oriented Programming support</li>
                <li className="list-group-item border-0 ps-0">Used in competitive programming and system software</li>
                <li className="list-group-item border-0 ps-0">Enhances problem-solving and algorithmic thinking</li>
              </ul>
            </div>

            <div className="col-md-6">
              <h4 className="text-dark mb-3">Course Curriculum</h4>
              <ol className="list-group list-group-numbered">
                <li className="list-group-item border-0 ps-0">Introduction to C++ & Setup</li>
                <li className="list-group-item border-0 ps-0">Variables, Data Types & Operators</li>
                <li className="list-group-item border-0 ps-0">Functions & Recursion</li>
                <li className="list-group-item border-0 ps-0">Classes, Objects & OOP Principles</li>
                <li className="list-group-item border-0 ps-0">Inheritance, Polymorphism & Encapsulation</li>
                <li className="list-group-item border-0 ps-0">STL (Standard Template Library) & Projects</li>
              </ol>
            </div>
          </div>

          <div className="text-center mt-5">
            <h5 className="text-success mb-3">Who Should Enroll?</h5>
            <p className="fs-5 text-muted">
              Computer science students, competitive programmers, and anyone wanting to learn a powerful systems-level language.
            </p>
            <div className="badge bg-success fs-6 px-4 py-2 mb-4">
              8 Weeks · Online · Certificate Included
            </div>

            <button
              className="btn btn-dark btn-lg px-5"
              onClick={() =>
                alert("Thanks for your interest! We'll send you enrollment details shortly.")
              }
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCPP;
