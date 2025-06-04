import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ClipLoader from "react-spinners/ClipLoader";

export const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    // Show spinner while checking auth
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "179px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ClipLoader size={200} color="#3498db" />
      </div>
    );
  }

  if (!user) {
    // Not logged in, redirect to home or login
    return <Navigate to="/" replace />;
  }

  return children;
};
