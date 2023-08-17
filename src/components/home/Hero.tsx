import heroBg from "../../assets/hero-bg.jpg";

export default function Hero() {
  return (
    <section className="background-radial-gradient relative h-screen overflow-hidden bg-center text-gray-200">
      <img
        className="absolute inset-0 -z-10 h-full w-full object-cover brightness-[0.4]"
        src={heroBg}
        alt=""
      />
      <div className="mx-auto mt-32 w-10/12 sm:max-w-[500px] lg:max-w-[700px]">
        <h1 className="text-4xl font-bold lg:text-6xl">
          Stay Connected <br /> To Your Favorite Clubs!
        </h1>
        <p className="mt-8 lg:mt-10 lg:text-lg">
          We let you customize your football experience to match your
          preferences. Choose your favorite clubs and receive tailored updates,
          match schedules, and results just for you. Say goodbye to endless
          searching and hello to personalized football updates.
        </p>
      </div>
    </section>
  );
}
