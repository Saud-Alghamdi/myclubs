import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function NonUserRoutes() {
  const authContext = useAuth();

  return authContext.currentUser ? <Navigate to="/" /> : <Outlet />;
}