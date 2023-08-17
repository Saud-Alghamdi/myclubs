import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import ContactUs from "../components/ContactUs";

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Features />
      <HowItWorks />
      <ContactUs />
    </div>
  );
}
