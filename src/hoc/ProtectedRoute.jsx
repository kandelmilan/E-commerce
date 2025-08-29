import { Navigate } from "react-router";
import { toast } from "react-toastify";


function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    toast.error("Login Needed");
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;