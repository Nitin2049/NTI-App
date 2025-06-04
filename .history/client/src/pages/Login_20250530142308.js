import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();

  const handleLoginSuccess = async (credentialResponse) => {
    const idToken = credentialResponse.credential;

    // Send ID token to backend for verification
    try {
      const response = await axios.post(
        "http://localhost:5000/api/verify-token",
        {
          token: idToken,
        }
      );

      const verifiedUser = response.data.user;
      login(verifiedUser); // set globally

      navigate("/loggedin", { state: { name: verifiedUser.name } });
    } catch (error) {
      console.error(
        "Token verification failed:",
        error.response?.data || error.message
      );
    }
  };

  const handleLogout = () => {
    logout(); // Clear user from context
    navigate("/");
  };

  return (
    <div className="d-flex  justify-content-end w-100">
      {!user ? (
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      ) : (
        <>
          <span className="welcome-msg">Welcome, {user.name}</span>
          <button className="btn btn-danger" onClick={handleLogout}>
            Log Out
          </button>
        </>
      )}
    </div>
  );
}
