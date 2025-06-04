import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { gen } from "../utils/idGen.js";

export default function Login() {
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };

  const handleLoginSuccess = async (credentialResponse) => {
    const idToken = credentialResponse.credential;

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/verify-token",
        {
          token: idToken,
        }
      );

      const verifiedUser = response.data.user;
      login(verifiedUser);
      const userId = gen();
      try {
        const fetchData = await axios.post(
          "http://localhost:5000/api/v1/user/profile",
          {
            name: verifiedUser.name,
            email: verifiedUser.email,
            studentId: userId,
          }
        );
        sessionStorage.setItem("DBuser", JSON.stringify(fetchData.data));
        
        navigateToHome();
      } catch (error) {
        console.error("Error saving user data:", error);
        return error.response?.data || error.message;
      }
    } catch (error) {
      console.error(
        "Token verification failed:",
        error.response?.data || error.message
      );
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("DBuser");
    logout();
    navigate("/");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card p-5 shadow-sm text-center"
        style={{ minWidth: "350px" }}
      >
        {!user ? (
          <>
            <h4 className="mb-4">Sign in with Google</h4>
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </>
        ) : (
          <>
            <h4 className="mb-3 text-success">Welcome, {user.name}</h4>
            <button className="btn btn-danger mt-3" onClick={handleLogout}>
              Log Out
            </button>
          </>
        )}
      </div>
    </div>
  );
}
