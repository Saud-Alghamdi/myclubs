import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Register from "./views/Register";
import Login from "./views/Login";
import MyClubs from "./views/MyClubs";
import MyMatches from "./views/MyMatches";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/myclubs"
          element={<MyClubs />}
        />
        <Route
          path="/mymatches"
          element={<MyMatches />}
        />
      </Routes>
    </Router>
  );
}
