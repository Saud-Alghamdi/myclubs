import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import ContactUs from "../components/home/ContactUs";

export default function Home() {
  return (
    <main className="home-page">
      <Hero />
      <Features />
      <ContactUs />
    </main>
  );
}
