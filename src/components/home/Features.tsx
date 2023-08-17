import featuresBg from "../../assets/features-bg.jpg";

export default function Features() {
  return (
    <section className="relative py-10 text-gray-200">
      <img
        className="absolute inset-0 -z-10 h-full w-full object-cover brightness-[0.3]"
        src={featuresBg}
        alt=""
      />
      {/* Header */}
      <h1 className=" text-center text-3xl font-bold md:text-4xl lg:text-5xl">
        Features:
      </h1>
      {/* Grid */}
      <div className="mx-auto mt-10 grid w-fit items-center justify-center justify-items-center gap-x-28 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
        {/* Grid item 1 */}
        <div className="justif-center flex w-72 flex-col items-center gap-y-10 px-2 py-10 ">
          <h3>&#129409;</h3>
          <h3>Personalized Experience</h3>
          <p>
            Watch live matches running with high quality video with 0 latency.
          </p>
        </div>
        {/* Grid item 2 */}
        <div className="justif-center flex w-72 flex-col items-center gap-y-10 px-2 py-10  ">
          <h3>&#129409;</h3>
          <h3>Real-time</h3>
          <p>
            Watch live matches running with high quality video with 0 latency.
          </p>
        </div>
        {/* Grid item 3 - (Has an additional style "span")*/}
        <div className="justif-center flex w-72 flex-col items-center gap-y-10 px-2 py-10  md:col-span-full xl:col-auto">
          <h3>&#129409;</h3>
          <h3>Match Notifications</h3>
          <p>
            Watch live matches running with high quality video with 0 latency.
          </p>
        </div>
      </div>
    </section>
  );
}
