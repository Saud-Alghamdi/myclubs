import SignupForm from "../components/signup/SignupForm";
import pitchBg from "../assets/pitch-bg.jpg"

export default function Signup() {
  return (
    <main className="relative from-transparent to-black px-5 py-12 text-gray-200 md:py-12">
      <img
        className="absolute inset-0 -z-10 h-full w-full object-cover brightness-[0.3]"
        src={pitchBg}
        alt=""
      />
      <h1 className="lg:text-5xl0 text-center text-3xl font-bold md:text-4xl">
        Sign up
      </h1>
      <SignupForm />
    </main>
  );
}
