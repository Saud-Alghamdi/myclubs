import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import MyClubs from "./pages/MyClubs";
import MyMatches from "./pages/MyMatches";
import PrivateRoutes from "./components/PrivateRoutes";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/myclubs" element={<MyClubs />} />
              <Route path="/mymatches" element={<MyMatches />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}
