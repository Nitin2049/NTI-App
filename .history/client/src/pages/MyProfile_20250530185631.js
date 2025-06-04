import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

const MyProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("DBuser");
    if (!storedUser) {
      console.error("No user data found in sessionStorage");
      return;
    }

    try {
      const userData = JSON.parse(storedUser);
      setUser(userData);
    } catch (error) {
      console.error("Failed to parse user data from sessionStorage:", error);
    }
  }, []);

// ✅ Avoid rendering until user data is ready
  if (!user) {
    return <div className="text-center mt-5">Loading profile...</div>;
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h3 className="card-title mb-4 text-center text-primary">
                Student Profile
              </h3>
              <div className="mb-3">
                <strong>Name:</strong> {user.name}
              </div>
              <div className="mb-3">
                <strong>Email:</strong> {user.email}
              </div>
              <div className="mb-3">
                <strong>Student ID:</strong> {user.studentId}
              </div>
              <div>
                <strong>Courses Purchased:</strong>
                <ul className="list-group mt-2">
                  <li className="list-group-item">{user.courses}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyProfile;
