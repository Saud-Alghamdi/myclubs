import featuresBg from "../../assets/features-bg.jpg";

export default function HowItWorks() {
  return (
    <section className="relative p-10 text-gray-200">
      <img
        className="absolute inset-0 -z-10 h-full w-full object-cover brightness-[0.3]"
        src={featuresBg}
        alt=""
      />
      {/* Header */}
      <h1 className=" text-center text-3xl font-bold">How It Works:</h1>
      {/* Grid */}
      <div className="mx-auto mt-10 grid w-1/2 gap-y-10">
        {/* Grid item 1 */}
        <div className="justif-center flex flex-col items-center gap-y-10 px-2 py-10 outline outline-blue-300">
          <h3>&#129409;</h3>
          <h3>Live Matches</h3>
          <p>
            Watch live matches running with high quality video with 0 latency.
          </p>
        </div>
        {/* Grid item 2 */}
        <div className="justif-center flex flex-col items-center gap-y-10 px-2 py-10 outline outline-blue-300">
          <h3>&#129409;</h3>
          <h3>Live Matches</h3>
          <p>
            Watch live matches running with high quality video with 0 latency.
          </p>
        </div>
        {/* Grid item 3 */}
        <div className="justif-center flex flex-col items-center gap-y-10 px-2 py-10 outline outline-blue-300">
          <h3>&#129409;</h3>
          <h3>Live Matches</h3>
          <p>
            Watch live matches running with high quality video with 0 latency.
          </p>
        </div>
      </div>
    </section>
  );
}
