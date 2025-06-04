import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext"; // import auth
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../context/AuthContext";

export default MyProfile = () => {
  const { user, login } = useAuth(); // get user from context
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/user/profile", {
          withCredentials: true,
        });

        setProfile(response.data);
        login(response.data); // optional: set in context if not already
      } catch (err) {
        setError("Failed to fetch profile.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [login]);

  if (loading) return <div className="container text-center mt-5"><div className="spinner-border" /></div>;
  if (error) return <div className="container text-center text-danger mt-5">{error}</div>;

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h3 className="card-title mb-4 text-center text-primary">Student Profile</h3>
              <div className="mb-3"><strong>Name:</strong> {profile.name}</div>
              <div className="mb-3"><strong>Email:</strong> {profile.email}</div>
              <div className="mb-3"><strong>Student ID:</strong> {profile.studentId}</div>
              <div><strong>Courses Purchased:</strong>
                <ul className="list-group mt-2">
                  {profile.courses?.map((c, i) => <li key={i} className="list-group-item">{c}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
