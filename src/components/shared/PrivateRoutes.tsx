import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function PrivateRoutes() {
  const authContext = useAuth();

  return authContext.currentUser ? <Outlet /> : <Navigate to="/login" />;
}
