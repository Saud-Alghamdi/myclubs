import Nav from "../components/Nav";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div className="login-view">
      <Nav />
      <LoginForm />
      <Footer />
    </div>
  );
}
