import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function PrivateRoutes() {
  const authContext = useAuth();

  // While Firebase is checking the auth state, don't render anything.
  if (authContext.firebaseIsCheckingAuth) {
    return null;
  }

  // If Firebase has finished checking and the user is null, redirect to login.
  if (!authContext.currentUser) {
    return <Navigate to="/login" />;
  }

  // If Firebase has finished checking and the user is not null, show the Outlet (the component for that route).
  return <Outlet />;
}
