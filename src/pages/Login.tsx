import LoginForm from "../components/login/LoginForm";
import pitchBg from "../assets/pitch-bg.jpg";

export default function Login() {
  return (
    <main className="relative from-transparent to-black px-5 py-12 text-gray-200 md:py-12 min-h-screen">
      <img
        className="fixed inset-0 -z-10 h-screen w-full object-cover brightness-[0.3]"
        src={pitchBg}
        alt=""
      />
      <h1 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl0">
        Login
      </h1>
      <LoginForm />
    </main>
  );
}
