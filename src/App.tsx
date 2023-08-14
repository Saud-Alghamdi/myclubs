import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import MyClubs from "./pages/MyClubs";
import MyMatches from "./pages/MyMatches";
import PrivateRoutes from "./components/PrivateRoutes";
import NonLoggedInRoutes from "./components/NonLoggedInRoutes";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
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
      </AuthProvider>
    </QueryClientProvider>
  );
}
