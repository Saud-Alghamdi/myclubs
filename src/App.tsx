import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ToastEventProvider } from "./context/ToastEventContext";
import Nav from "./components/shared/Nav";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import MyClubs from "./pages/MyClubs";
import MyMatches from "./pages/MyMatches";
import PrivateRoutes from "./components/shared/PrivateRoutes";
import NonLoggedInRoutes from "./components/shared/NonLoggedInRoutes";
import Footer from "./components/shared/Footer";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ToastEventProvider>
          <Router>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route element={<NonLoggedInRoutes />}>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
              </Route>
              <Route element={<PrivateRoutes />}>
                <Route path="/myclubs" element={<MyClubs />} />
                <Route path="/mymatches" element={<MyMatches />} />
              </Route>
            </Routes>
            <Footer />
          </Router>
        </ToastEventProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
