import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import ContactUs from "../components/home/ContactUs";
import { useToastEvent } from "../hooks/useToastEvent";
import Toast from "../components/shared/Toast";
import toast from "../locales/en/toast.json";

export default function Home() {
  const { isSignupSuccessful, isLoginSuccessful, isLogoutSuccessful } =
    useToastEvent();

  return (
    <main className="home-page min-h-screen">
      {/*--- toasts ---*/}
      {isSignupSuccessful && (
        <Toast message={toast.signup.success} isSuccessToastType={true} />
      )}
      {isLoginSuccessful && (
        <Toast message={toast.login.success} isSuccessToastType={true} />
      )}
      {isLogoutSuccessful && (
        <Toast message={toast.logout.success} isSuccessToastType={true} />
      )}

      <Hero />
      <Features />
      <ContactUs />
    </main>
  );
}
