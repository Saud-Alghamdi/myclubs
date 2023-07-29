import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import Register from "./Views/Register";
import Login from "./Views/Login";
import MyClubs from "./Views/MyClubs";
import MyMatches from "./Views/MyMatches";

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
