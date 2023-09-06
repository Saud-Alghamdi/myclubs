import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Nav from "./components/shared/Nav";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import MyClubs from "./pages/MyClubs";
import MyMatches from "./pages/MyMatches";
import PrivateRoutes from "./components/shared/PrivateRoutes";
import NonLoggedInRoutes from "./components/shared/NonLoggedInRoutes";
import Footer from "./components/shared/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18nConfig";

const queryClient = new QueryClient();

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer
          position="top-center"
          hideProgressBar={true}
          theme="colored"
        />
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
    </I18nextProvider>
  );
}
