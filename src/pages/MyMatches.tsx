import Matches from "../components/mymatches/Matches";
import pitchBg from "../assets/pitch-bg.jpg";

export default function MyMatches() {
  return (
    <main className="relative from-transparent to-black px-5 py-12 text-gray-200 md:py-12 lg:px-10">
      <img
        className="fixed inset-0 -z-10 h-screen w-full object-cover brightness-[0.3]"
        src={pitchBg}
        alt=""
      />
      <Matches />
    </main>
  );
}
