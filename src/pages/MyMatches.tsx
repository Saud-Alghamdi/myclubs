import Matches from "../components/mymatches/Matches";
import pitchBg from "../assets/pitch-bg.jpg";
import ImageComponent from "../components/shared/ImageComponent";

export default function MyMatches() {
  return (
    <main className="relative min-h-screen from-transparent to-black px-5 py-12 text-gray-200 md:py-12 lg:px-10">
      <ImageComponent
        src={pitchBg}
        blurHash="L14:;yRQD9kU*EkAVukBHce:o{kB"
        blurTwStyles="!fixed !inset-0 !-z-10 !h-screen !w-full !object-cover !brightness-[0.3]"
        originalTwStyles="fixed inset-0 -z-10 h-screen w-full object-cover brightness-[0.3]"
        alt="Pitch Background"
      />
      <Matches />
    </main>
  );
}
