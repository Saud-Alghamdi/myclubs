import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import ContactUs from "../components/home/ContactUs";

export default function Home() {
  return (
    <main className="home-page min-h-screen">
      <Hero />
      <Features />
      <ContactUs />
    </main>
  );
}
