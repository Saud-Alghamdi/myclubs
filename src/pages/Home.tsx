import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import ContactUs from "../components/home/ContactUs";
import { useToastEvent } from "../hooks/useToastEvent";
import Toast from "../components/shared/Toast";

export default function Home() {
  const { isSignupSuccessful } = useToastEvent();

  return (
    <main className="home-page min-h-screen">
      {isSignupSuccessful && (
        <Toast message="Sign up successful!" isSuccessToastType={true} />
      )}
      <Hero />
      <Features />
      <ContactUs />
    </main>
  );
}
