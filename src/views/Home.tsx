import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="home-view">
      <Nav />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
