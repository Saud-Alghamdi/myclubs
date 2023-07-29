export default function Hero() {
  return (
    <>
      <div
        className="background-radial-gradient mb-40 overflow-hidden"
        style={{
          backgroundColor: "hsl(218, 41%, 15%)",
          backgroundImage: `radial-gradient(650px circle at 0% 0%, hsl(218, 41%, 35%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%, transparent 100%),
          radial-gradient(1250px circle at 100% 100%, hsl(218, 41%, 45%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%, transparent 100%)`,
        }}
      >
        <div className="h-full px-6 py-12 text-center md:px-12 lg:py-24 lg:text-left">
          <div className="w-100 mx-auto text-neutral-800 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div
                className="mt-12 lg:mt-0"
                style={{ zIndex: 10 }}
              >
                <h1 className="mt-0 mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-[hsl(218,81%,95%)]">
                  The best offer <br />
                  <span className="text-[hsl(218,81%,75%)]">for your business</span>
                </h1>
                <p className="opacity-70 text-[hsl(218,81%,85%)]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, expedita iusto veniam atque, magni tempora mollitia dolorum consequatur nulla, neque debitis eos reprehenderit quasi ab ipsum nisi dolorem modi. Quos?
                </p>
              </div>
              <div className="relative mb-12 lg:mb-0">
                <div
                  id="radius-shape-1"
                  className="absolute rounded-full shadow-lg"
                />
                <div
                  id="radius-shape-2"
                  className="absolute shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
