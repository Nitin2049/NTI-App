import React from "react";

const CourseSQL = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1d4350, #a43931)",
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
            SQL Fundamentals Course
          </h1>
          <p className="text-center fs-5 text-secondary mb-4">
            Master SQL to analyze data, manage databases, and unlock insights for data-driven decision-making.
          </p>

          <div className="row g-4">
            <div className="col-md-6">
              <h4 className="text-danger mb-3">Why Learn SQL?</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-0 ps-0">Most used language for data access and manipulation.</li>
                <li className="list-group-item border-0 ps-0">Work with MySQL, PostgreSQL, and SQL Server.</li>
                <li className="list-group-item border-0 ps-0">Power up your data analytics and reporting skills.</li>
                <li className="list-group-item border-0 ps-0">In-demand skill across data science and development roles.</li>
              </ul>
            </div>

            <div className="col-md-6">
              <h4 className="text-danger mb-3">What You'll Learn</h4>
              <ol className="list-group list-group-numbered">
                <li className="list-group-item border-0 ps-0">SQL Basics & Syntax</li>
                <li className="list-group-item border-0 ps-0">Filtering, Sorting & Joins</li>
                <li className="list-group-item border-0 ps-0">Aggregations & Subqueries</li>
                <li className="list-group-item border-0 ps-0">Database Design Concepts</li>
                <li className="list-group-item border-0 ps-0">Stored Procedures & Indexing</li>
                <li className="list-group-item border-0 ps-0">Real-World Projects & Query Optimization</li>
              </ol>
            </div>
          </div>

          <div className="text-center mt-5">
            <h5 className="text-success mb-3">Who Should Enroll?</h5>
            <p className="fs-5 text-muted">
              Beginners, analysts, developers, and anyone handling structured data.
            </p>
            <div className="badge bg-success fs-6 px-4 py-2 mb-4">
              6 Weeks · Online · Certificate Included
            </div>

            <div className="d-flex justify-content-center">
              <button
                className="btn btn-danger btn-lg px-5"
                style={{ fontWeight: "600" }}
                onClick={() => alert("Thank you! Enrollment details will be shared soon.")}
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

export default CourseSQL;
