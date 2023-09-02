import AllClubs from "../components/myclubs/AllClubs";
import FavoriteClubs from "../components/myclubs/FavoriteClubs";
import pitchBg from "../assets/pitch-bg.jpg";
import ImageComponent from "../components/shared/ImageComponent";

export default function MyClubs() {
  return (
    <main className="relative from-transparent to-black px-5 lg:px-10 py-12 text-gray-200 md:py-12 min-h-screen">
      <ImageComponent
        src={pitchBg}
        blurHash="L14:;yRQD9kU*EkAVukBHce:o{kB"
        blurTwStyles="!fixed !inset-0 !-z-10 !h-screen !w-full !object-cover !brightness-[0.3]"
        originalTwStyles="fixed inset-0 -z-10 h-screen w-full object-cover brightness-[0.3]"
        alt="Pitch Background"
      />
      <FavoriteClubs />
      <AllClubs />
    </main>
  );
}
