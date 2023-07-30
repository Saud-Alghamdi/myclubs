export default function Features() {
  return (
    <section>
      {/* Header */}
      <h1 className="mt-10 text-center text-3xl font-bold">
        Features & Services:
      </h1>
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
