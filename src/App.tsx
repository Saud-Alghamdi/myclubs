import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import Home from "./views/Home";
import Register from "./views/Register";
import Login from "./views/Login";
import MyClubs from "./views/MyClubs";
import MyMatches from "./views/MyMatches";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/myclubs" element={<MyClubs />} />
            <Route path="/mymatches" element={<MyMatches />} />
          </Routes>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}
