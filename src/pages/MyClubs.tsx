import AllClubs from "../components/myclubs/AllClubs";
import FavoriteClubs from "../components/myclubs/FavoriteClubs";
import pitchBg from "../assets/pitch-bg.jpg";

export default function MyClubs() {
  return (
    <main className="relative from-transparent to-black px-5 lg:px-10 py-12 text-gray-200 md:py-12 min-h-screen">
      <img
        className="fixed inset-0 -z-10 h-screen w-full object-cover brightness-[0.3]"
        src={pitchBg}
        alt=""
      />
      <FavoriteClubs />
      <AllClubs />
    </main>
  );
}
